;(function ($, window, document) {
	var app = {
		body: $(document.body),

		animateScroll : function () {
			$("#nav").on('click', 'a', function (event) {

				var $this = $(this),
					$htmlBody = $('html, body'),
					linkTarget = $this.attr('href'),
					linkSplits = linkTarget.split('#'),
					offSetTop;

				// If no hashtag found, stop here!
				if (linkSplits.length < 2) {
					return true;
				}

				linkTarget = '#' + linkSplits[1];

				event.preventDefault();

				// Get distance of top
				offSetTop = $(linkTarget).offset().top;

				// Animate the scroll
				$htmlBody.stop().animate({scrollTop : offSetTop}, function () {
					location.hash = linkTarget;
				});
			});
		},

		setupGearAnimation: function () {
			var gears = $(".gear"),
				config = {
					gear_1: -0.9,
					gear_2: 1.2,
					gear_3: -.8,
					gear_4: 1.1,
					gear_5: -1,
					gear_6: 2
				};

			window.requestAnimFrame = (function(){
				return  window.requestAnimationFrame       ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame    ||
					function( callback ){
						window.setTimeout(callback, 1000 / 60);
					};
			})();

			$(window).on('scroll', function (e) {
				var deg = - window.scrollY * 360 / document.body.offsetHeight;

				window.requestAnimationFrame(function () {
					gears.each(function (i, e) {
						e = $(e);

						deg *= config['gear_' + e.data('gear')] || 0.5;

						e.css('transform', 'translateZ(0) rotate('+ deg + 'deg)');
					});
				});
			});
		},

		setupDropdown: function () {
			var dropdown = $('#dropdown');

			this.body.on('click', function (e) {
				var target = $(e.target);

				if (!target.closest('#dropdown').length && !target.closest('#menu').length) {
					dropdown.removeClass('opened');
				}
			});

			$('.nav-item a').on('click', function () {
				dropdown.removeClass('opened');
			});

			$('#menu').on('click', function () {
				dropdown.toggleClass('opened');
			});
		},

		setupSpeakerList: function () {
			var speakers = $('.speakers-list');

			//Speaker item click
			speakers.on('click', 'li', $.proxy(function (e) {
				var target = $(e.target);

				if (target.hasClass('twitter-link')) return;

				target = target.closest('li');

				this.openSpeaker(target.data('type'),  target.attr('id'));
			}, this));

			//Featured link click
			$('.featured a').on('click', $.proxy(function (e) {
				var href = $(e.target).attr('href'),
					id = href.replace('#speakers/', '');

				e.preventDefault();

				$('.speakers-list li')
					.addClass('notransition')
					.removeClass('opened')
					.find('.more').height(0)
					.removeClass('notransition');

				this.openSpeaker('speakers', id, true);
			}, this));
		},

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

		handleHash: function (navigate) {
			var hash = window.location.hash,
				matches = hash.match(/#(speakers|workshops)\/(.*)/);

			if (matches && matches[1]) {
				setTimeout($.proxy(function () {
					this.openSpeaker(matches[1], matches[2], navigate);
				}, this), 10);
			}
		},

		openSpeaker: function (type, id, navigate) {
			var speaker = $('#' + id + '[data-type="' + type + '"]'),
				more = speaker.find('.more'),
				speechInfo = speaker.find('.speech-info');

			if (navigate) {
				this.body.animate({
					scrollTop: speaker.offset().top - 80
				});
			}

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
			} else {
				speechInfo.height(speaker.find('.speech-title').outerHeight());
				more.height(0);
			}
		},

		init : function () {
			//Skip scroll animation on touch devices
			if(!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
				this.setupGearAnimation();
				this.improveScrolling();
			} else {
				this.body.addClass('touch');
			}

			this.setupDropdown();
			this.setupSpeakerList();
			this.animateScroll();
			this.handleHash(true);
		}
	};

	$(function () {
		app.init();
	});
} (jQuery, window, document));
