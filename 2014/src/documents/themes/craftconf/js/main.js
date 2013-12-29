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

			speakers.on('click', 'li', function (e) {
				var target = $(e.target).closest('li'),
					more = target.find('.more'),
					link = target.find('.speaker-link'),
					speechInfo = target.find('.speech-info');

				//Close opened speakers
				target.siblings('.opened')
					.removeClass('opened')
					.find('.more').height(0);

				target.toggleClass('opened');

				//Open/Close our current one
				if (target.hasClass('opened')) {
					speechInfo.height(24);
					more.height(more.find('.details').outerHeight());
				} else {
					speechInfo.height(target.find('.speech-title').outerHeight());
					more.height(0);
				}

				window.location.hash = link.data('type') + '/' + link.attr('id');
			});

			$('.featured a').on('click', $.proxy(function (e) {
				var href = $(e.target).attr('href'),
					id = href.replace('#speakers/', '');

				e.preventDefault();

				$('.speakers-list li')
					.addClass('notransition')
					.removeClass('opened')
					.find('.more').height(0)
					.removeClass('notransition');

				setTimeout($.proxy(function () {
					this.navigateToSpeaker(id);
				}, this), 0);

				window.location.hash = href;
			}, this));
		},

		improveScrolling: function () {
			var timer,
				speakers = $('#speakers');

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

		handleHash: function () {
			var hash = window.location.hash,
				matches = hash.match(/#(speakers|workshops)\/(.*)/);

			if (matches && matches[1]) {
				setTimeout($.proxy(function () {
					this.navigateToSpeaker(matches[1], matches[2]);
				}, this), 10);
			}
		},

		navigateToSpeaker: function (type, id) {
			var speaker = $('#' + id + '[data-type="' + type + '"]');

			this.body.animate({
				scrollTop: speaker.offset().top - 80
			});

			speaker.trigger('click');
		},

		init : function () {
			//Skip scroll animation on touch devices
			if(!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
				this.setupGearAnimation();
				this.improveScrolling();
			} else {
				this.body.addClass('touch');
			}

			//$(window).on('hashchange', $.proxy(this.handleHash, this));

			this.setupDropdown();
			this.setupSpeakerList();
			this.animateScroll();
			this.handleHash();
		}
	};

	$(function () {
		app.init();
	});
} (jQuery, window, document));
