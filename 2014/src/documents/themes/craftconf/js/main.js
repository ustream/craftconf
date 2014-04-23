;(function ($, window, document) {
	if (!window.craft) {
		window.craft = {};
	}

	//Shim for requestAnimationFrame
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			function( callback ){
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	//Application object
	craft.app = {
		body: $(document.body),
		htmlBody: $('html, body'),

		gears: $(".gear"),
		gearSpeeds: {
			gear_1: -0.9,
			gear_2: 1.2,
			gear_3: -.8,
			gear_4: 1.1,
			gear_5: -1,
			gear_6: 2
		},

		/**
		 * Navigation item click handler
		 * @method onNavClick
		 * @param {Event} e
		 */
		onNavClick: function (e) {
			var target = $(e.target),
				linkTarget = target.attr('href'),
				linkSplits = linkTarget.split('#'),
				offSetTop;

			// If no hashtag found, stop here!
			if (linkSplits.length < 2) {
				return;
			}

			linkTarget = '#' + linkSplits[1];

			if (!$(linkTarget).length) {
				return;
			}

			e.preventDefault();

			// Get distance of top
			offSetTop = $(linkTarget).offset().top;

			// Animate the scroll
			this.htmlBody.stop().animate({scrollTop : offSetTop}, function () {
				location.hash = linkTarget;
			});
		},

		/**
		 * Gear animation setup, rotate on window scroll event
		 * @method setupGearAnimation
		 */
		setupGearAnimation: function () {
			$(window).on('scroll', $.proxy(function () {
				var deg = - window.scrollY * 360 / 10000;

				window.requestAnimationFrame($.proxy(function () {
					this.gears.each($.proxy(function (i, e) {
						e = $(e);

						deg *= this.gearSpeeds['gear_' + e.data('gear')] || 0.5;

						e.css('transform', 'translateZ(0) rotate('+ deg + 'deg)');
					}, this));
				}, this));
			}, this));
		},

		/**
		 * Header dropDown functionality on mobile/tablet devices
		 * @method setupDropDown
		 */
		setupDropDown: function () {
			var dropDown = $('#dropdown');

			this.body.on('click', function (e) {
				var target = $(e.target);

				if (!target.closest('#dropdown').length && !target.closest('#menu').length) {
					dropDown.removeClass('opened');
				}
			});

			$('.nav-item a').on('click', function () {
				dropDown.removeClass('opened');
			});

			$('#menu').on('click', function () {
				dropDown.toggleClass('opened');
			});
		},

		/**
		 * Speaker navigation setup
		 * @method setupSpeakerList
		 */
		setupSpeakerList: function () {
			//Speaker item click
			$('.speakers-list').on('click', 'li', $.proxy(this.onSpeakerClick, this));

			//Featured speaker click
			$('.featured a').on('click', $.proxy(this.onFeaturedSpeakerClick, this));
		},

		/**
		 * Speaker item click handler
		 * @method onSpeakerClick
		 * @param {Event} e
		 */
		onSpeakerClick: function (e) {
			var target = $(e.target);

			if (target.hasClass('twitter-link')) return;

			target = target.closest('li');

			this.openSpeaker(target.data('type'),  target.attr('id'));
		},

		/**
		 * Featured speaker click handler in about section
		 * @method onFeaturedSpeakerClick
		 * @param {Event} e
		 */
		onFeaturedSpeakerClick: function (e) {
			var href = $(e.target).attr('href'),
				id = href.replace('#speakers/', ''),
				speakers = $('.speakers-list li');

			e.preventDefault();


			speakers.addClass('notransition')
				.removeClass('opened')
				.find('.more').height(0);

			window.requestAnimFrame(function () {
				speakers.removeClass('notransition');
			});

			this.openSpeaker('speakers', id, true);
		},

		/**
		 * Open speaker by type and id parameter
		 * @param {speakers|workshops} type
		 * @param {String} id
		 * @param {Boolean=} navigate
		 */
		openSpeaker: function (type, id, navigate) {
			var speaker = $('#' + id + '[data-type="' + type + '"]'),
				more = speaker.find('.more'),
				speechInfo = speaker.find('.speech-info');

			//Close opened speakers
			speaker.siblings('.opened')
				.removeClass('opened')
				.find('.more').height(0);

			speaker.toggleClass('opened');

			//Open/Close our current one
			if (speaker.hasClass('opened')) {
				speechInfo.height(24);
				more.height(more.find('.details').outerHeight());
				window.location.hash = type + '/' + id;

				setTimeout($.proxy(function () {
					this.fixScrollPositionToSpeaker(speaker);
				}, this), 200);

			} else {
				speechInfo.height(speaker.find('.speech-title').outerHeight());
				more.height(0);
			}

			this.fixScrollPositionToSpeaker(speaker, navigate);
		},

		/**
		 * Fix scroll position if speaker is not fully visible
		 * @param speakerItem
		 * @param force
		 */
		fixScrollPositionToSpeaker: function (speakerItem, force) {
			var scrollTop = document.body.scrollTop,
				offsetTop = speakerItem.offset().top;

			if(
				force
				|| offsetTop > scrollTop + 80 + window.innerHeight
				|| offsetTop - scrollTop - 80 < 0
			) {
				this.htmlBody.animate({
					scrollTop: speakerItem.offset().top - 80
				});
			}
		},

		/**
		 * Improves scrolling performance by disabling pointer events during scroll
		 * (pointer-events: none;)
		 * @method improveScrolling
		 */
		improveScrolling: function () {
			var timer,
				speakers = $('.speakers-list');

			$(window).on('scroll', $.proxy(function () {
				clearTimeout(timer);
				if(!speakers.hasClass('disable-hover')) {
					speakers.addClass('disable-hover')
				}

				timer = setTimeout($.proxy(function(){
					speakers.removeClass('disable-hover')
				} , this), 200);
			}, this));
		},

		/**
		 * Initial hash handler
		 * @method handleInitialHash
		 */
		handleInitialHash: function () {
			var hash = window.location.hash,
				matches = hash.match(/#(speakers|workshops)\/(.*)/);

			if (matches && matches[1]) {
				setTimeout($.proxy(function () {
					this.openSpeaker(matches[1], matches[2], true);
				}, this), 10);
			}
		},

		handleDiscountCode: function () {
			var discount = window.location.search.match(/discount=([^&]*)/),
				sessionStorage = window.sessionStorage,
				iframe = $('#TicketIframe'),
				src = iframe.attr('data-src');

			if (discount && discount[1]) {
				discount = discount[1];
				sessionStorage.setItem('discount', discount)
			} else if (sessionStorage) {
				discount = sessionStorage.getItem('discount');
			}

			if (discount) {
				src += ('&discount=' + discount);
			}

			iframe.attr('src', src);
		},

		handleCurrentQuiz: function () {
			var iframe = '<iframe class="form-iframe" src="#src#" width="100%" height="#height#" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',
				quizNr = window.location.href.match(/task=([^&]*)/),
				container;

			if (quizNr && quizNr[1]) {
				container = $('.quiz').eq(parseInt(quizNr[1]) - 1);

				iframe = iframe.replace('#src#', container.data('src'));
				iframe = iframe.replace('#height#', container.data('height'));

				container.replaceWith(iframe);
			}
		},

		/**
		 * Touch device check
		 * @method isTouchDevice
		 * @returns {boolean|*}
		 */
		isTouchDevice: function () {
			return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
		},

		/**
		 * @constructor
		 */
		init : function () {
			var dayContainers = $('.day-containers');

			//Skip scroll animation on touch devices
			if(!this.isTouchDevice()) {
				this.setupGearAnimation();
				this.improveScrolling();
			} else {
				this.body.addClass('touch');
			}

			//Navigation
			$("#nav").on('click', 'a', $.proxy(this.onNavClick, this));

			//Quick handler for schedule day change
			$('.schedule-tbl .day-header').on('click', function () {
				var dayHeader = $(this);

				dayHeader
					.addClass('active')
					.siblings().removeClass('active');


				dayContainers.find('.day')
					.removeClass('active')
					.eq(dayHeader.index())
						.addClass('active');
			});

			this.setupDropDown();

			//Speakers
			this.setupSpeakerList();
			this.handleInitialHash();
			this.handleDiscountCode();
			this.handleCurrentQuiz();

			craft.live && craft.live.init();
		}
	};

	//Let's rock!
	$(function () {
		craft.app.init();
	});
} (jQuery, window, document));
