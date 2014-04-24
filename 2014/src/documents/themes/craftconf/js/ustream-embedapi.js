/**!
 * Ustream Embed API
 * http://ustream.tv/
 *
 * Enables sites using Ustream embed iframe to build and adapt on the embed player.
 * The Ustream Embed API provides basic methods to control the live stream
 * or video playback, and enables the user to access essential events
 * of the live stream or played video.
 *
 * USAGE
 *
 * Create an instance of the Embed API by providing the ID of the iframe,
 * or the iframe DOM object itself:
 *
 * var viewer = UstreamEmbed('UstreamIframe');
 *
 * The Ustream Embed API provides the following:
 *
 *     callMethod
 *     getProperty
 *     addListener
 *     removeListener
 *
 * Available methods through 'callMethod':
 *
 *     play
 *         Starts playing the currently loaded channel or video
 *
 *         Example:
 *             viewer.callMethod('play');
 *
 *     pause
 *         Pauses the live stream, or the playback of a video
 *
 *         Example:
 *             viewer.callMethod('pause');
 *
 *     stop
 *         Pauses the live stream, or stops the video and jumps back to the start
 *
 *         Example:
 *             viewer.callMethod('stop');
 *
 *     load
 *         Loads a channel or a video in the player
 *         Requires two additional arguments:
 *             type - the loaded content type (channel|video)
 *             id   - the loaded content id
 *
 *         Example:
 *             viewer.callMethod('load', 'video', 5903947);
 *             viewer.callMethod('load', 'channel', 1524);
 *
 *     seek
 *         Jumps to given position in played recorded video
 *         Requires one argument:
 *             position in seconds
 *
 *         Example:
 *             viewer.callMethod('seek', 180);
 *
 *     volume
 *         Sets the playback sound volume
 *         Requires one argument:
 *             volume percent between 0-100
 *
 *         Example:
 *             viewer.callMethod('volume', 0); // mute
 *
 *     quality
 *         Sets the stream quality, if available
 *         Requires one argument:
 *            a quality index from received quality options in quality event
 *
 *         Example:
 *             viewer.callMethod('quality', 16); // set to high
 *
 *
 * Accessable properties by 'getProperty':
 *
 *     duration
 *         Get the video duration in seconds
 *
 *         Example:
 *             viewer.getProperty('duration', callBack);
 *
 *     viewers
 *         Get the current viewer count for the loaded live stream
 *
 *         Example:
 *             viewer.getProperty('viewers', callBack);
 *
 *     progress
 *         Get the current progress for recorded video playback
 *
 *         Example:
 *             viewer.getProperty('progress', callBack);
 *
 *
 * Available events for 'addListener' and 'removeListener':
 *
 *     live
 *         Called when the currently loaded channel becomes live
 *
 *         Example:
 *             viewer.addListener('live', callBack);
 *
 *     offline
 *         Called when the currently loaded channel goes offline
 *
 *         Example:
 *             viewer.addListener('offline', callBack);
 *
 *     finished
 *         Called when the currently loaded and played video reaches its end
 *
 *         Example:
 *             viewer.addListener('finished', callBack);
 *
 *     playing
 *         Called when the currently loaded content playback is started or stopped
 *         Received arguments: playing (boolean)
 *
 *         Example:
 *             viewer.addListener('playing', callBack);
 *
 *     size
 *         Called when the stream size is available,
 *         or changed (changes reported only in flash mode)
 *         Data is the size of the ideal embed iframe according to it's width,
 *         and the stream aspect ratio. Player bar height is included
 *         Received arguments: size (array) width, height
 *
 *         Example:
 *             viewer.addListener('size', callBack);
 *
 *     quality
 *         Called when the stream quality options are available.
 *         Receives an object, with the quality IDs as keys,
 *         and an object with two properties as values:
 *
 *         {
 *             label: "480p", // label to show to users on control UI
 *             active: true  // if this quality is used or set
 *         }
 *
 *         Example:
 *             viewer.addListener('quality', callBack);
 *
 */
var UstreamEmbed = (function () {

	var objectKeys = (typeof Object.keys !== 'undefined'),
		instances = {},
		hostRegexp = new RegExp('^(http(?:s)?\://[^/]+)', 'im');

	function UstreamEmbed(iframe) {
		return createInstance(iframe);
	}

	function createInstance (iframe) {
		var element = getIframe(iframe),
			instance = (function (element) {
				var isReady = false,
					instanceObj,
					embedHost,
					sStreamConnected = false,
					sStreamHost,
					sStreamElement,
					cmdQueue = [],
					getters = {},
					events = {},
					ieHackEvent = [];

				embedHost = getHostName(element.getAttribute('src'));

				function addCommandQueue (method) {

					if (method === 'socialstream') {
						addDomEvent(window, 'message', onSocialFrame);

						// social stream connect
						sStreamElement = getIframe(arguments[1]);

						sStreamHost = getHostName(sStreamElement.getAttribute('src'));
						sStreamConnected = true;

						if (ieHackEvent.length) {
							for (var i = 0, il = ieHackEvent.length; i < il; i++) {
								onMessage(ieHackEvent[i]);
							}
						}
						return;
					}

					if (!isReady) {
						if (!cmdQueue) {
							cmdQueue = [];
						}
						cmdQueue.push(arguments);
						return;
					}

					var args = (makeArray(arguments)).slice(1);

					if (args[0] && typeof args[0] === 'function') {
						// getter callback
						if (!getters[method]) {
							getters[method] = [];
						}
						getters[method].push(args[0]);
					}

					sendMessage(element, embedHost, {cmd: method, args: args});
				}

				function execCommandQueue () {
					if (cmdQueue) {
						while (cmdQueue.length) {
							addCommandQueue.apply(this, cmdQueue.shift());
						}
						cmdQueue = null;
					}
				}

				function onSocialFrame (e) {
					if (sStreamElement &&
						sStreamElement.contentWindow &&
						sStreamElement.contentWindow === e.source
					) {
						instanceObj.onmessage(e);
					} else if (e.source === sStreamElement.id) {
						instanceObj.onmessage(e);
					}
				}

				function onSStreamMsg (e) {
					var d = JSON.parse(e.data),
						args;

					if (!!d.cmd && d.cmd == "ready") {
						// handshake
						sendMessage(sStreamElement, sStreamHost, {cmd: 'ready'});
						return;
					}

					args = [d.cmd];
					args = args.concat(d.args);

					addCommandQueue.apply(this, args);
				}

				function ready () {
					isReady = true;
					execCommandQueue();
				}

				function callMethod () {
					addCommandQueue.apply(this,arguments);
				}

				return instanceObj ={
					host: embedHost,
					callMethod: callMethod,

					getProperty: function () {
						callMethod.apply(this,arguments);
					},

					addListener: function (event, callback) {
						if (!events[event]) {
							events[event] = [];
						}
						events[event].push(callback);
					},

					removeListener: function (event, callback) {
						if (callback) {
							// we miss u "array.indexOf" in old IE :(
							for (var i = 0, eL = events[event].length; i < eL ; i++ ) {
								if (events[event][i] === callback) {
									events[event].splice(i, 1);
								}
							}
						} else {
							events[event] = null;
						}
					},

					onmessage: function (e) {
						var d;

						if (! embedHost && ! sStreamHost) {
							// Combined embed IE8-ban csinalhat olyat, hogy
							// mindket embed iframe kilovi a ready-t, de a Ustream Embed meg nem
							// peldanyosodott, igy nincs iframe URL sehol. (embedhost, sstreamhost stb.)
							// ugyh itt rogzitjuk a megnem hallott eventeket
							// aztan amikor megvolt az init, akkor behivunk megint ide...
							ieHackEvent.push({
								origin: e.origin, // string
								data: e.data //string
							});
							// innen nem futunk bele semmibe :(
							// ugyh ha a ss inicializalas megvan visszahivunk ide
						}

						if (e.origin == embedHost) {
							d = JSON.parse(e.data);


							if (d.sstream) {
								onSStreamMsg(e);
								return;
							}

							if (!!d.event && d.event.ready) {
								ready();
								dispatchEvent(events, 'ready');
							}

							if (!!d.event && d.event.live === true) {
								dispatchEvent(events, 'live');
								return;
							} else if (!!d.event && d.event.live === false) {
								dispatchEvent(events, 'offline');
								return;
							}

							if (!!d.event && !d.event.ready) {
								if (objectKeys) {
									Object.keys(d.event).forEach(function (key) {
										dispatchEvent(events, key, d.event[key]);
									});
								} else {
									for (var key in d.event) {
										if (d.event.hasOwnProperty(key)) {
											dispatchEvent(events, key, d.event[key]);
										}
									}
								}
							}

							// minden mas esetben
							if (!!d.property) {
								if (objectKeys) {
									Object.keys(d.property).forEach(function (key) {
										callGetter(getters, key, d.property[key]);
									});
								} else {
									for (var key in d.property) {
										if (d.property.hasOwnProperty(key)) {
											callGetter(getters, key, d.property[key]);
										}
									}
								}
							}

						} else if (sStreamConnected && e.origin == sStreamHost) {
							onSStreamMsg(e);
							return;

						}
					},

					destroy: function () {
						isReady = false;
						embedHost = '';
						sStreamConnected = false;
						sStreamHost = '';
						sStreamElement = null;
						cmdQueue = [];
						getters = {};
						events = {};
						ieHackEvent = [];

						if (instances[element.id]) instances[element.id] = null;
						element = null;
					}
				};
			}(element));

		if (!element.id) {
			element.id = "UstreamEmbed" + Math.ceil(Math.random() * 100000);
		}

		instance.id = element.id;

		instances[element.id] = instance;
		return instance;
	}

	function getIframe (iframe) {
		if (typeof iframe === "string") {
			iframe = document.getElementById(iframe);
		}
		return iframe;
	}

	function dispatchEvent (events, event, data) {
		for (var cb in events[event]) {
			if (events[event].hasOwnProperty(cb)) {
				events[event][cb].call(window, event, data);
			}
		}
	}

	function callGetter (getters, event, data) {
		if (!getters[event]) {
			return;
		}

		for (var cb in getters[event]) {
			if (getters[event].hasOwnProperty(cb)) {
				getters[event][cb].call(window, data);
			}
		}

		getters[event] = null;
		delete getters[event];
	}

	function onMessage (e) {
		var ins, doc;
		for (ins in instances) {
			if (instances.hasOwnProperty(ins) && instances[ins]) {
				doc = document.getElementById(ins);
				if (doc && doc.contentWindow) {
					if (doc.contentWindow === e.source) {
						instances[ins].onmessage(e);
					}
				} else if (typeof e.source  === "string" && e.source == ins) {
					instances[ins].onmessage(e);
				}
			}
		}
	}

	function sendMessage (element, host, data) {
		element.contentWindow.postMessage(JSON.stringify(data), host)
	}

	function getHostName (url) {
		if (url.indexOf('http') < 0) {
			url = location.protocol + url;
		}
		return url.match(hostRegexp)[1].toString();
	}

	function makeArray (smtg) {
		return Array.prototype.slice.call(smtg, 0);
	}

	function addDomEvent(target, event, cb) {
		if (target.addEventListener) {
			target.addEventListener(event, cb, false);
		} else {
			target.attachEvent('on' + event, cb);
		}
	}

	addDomEvent(window, 'message', onMessage);

	return (window.UstreamEmbed = UstreamEmbed);

})();