// 21 Dez 2012, 4:42
;(function ($, window, document) {
	'use strict';
	({
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
			window.requestAnimFrame = (function(){
				return  window.requestAnimationFrame       ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame    ||
					function( callback ){
						window.setTimeout(callback, 1000 / 60);
					};
			})();

			var gears = $(".gear"),
				config = {
					gear_1: -0.9,
					gear_2: 1.2,
					gear_3: -.8,
					gear_4: 1.1,
					gear_5: -1,
					gear_6: 2
				};

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

			$(document.body).on('click', function (e) {
				var target = $(e.target);

				if (target.closest('#dropdown').length || target.closest('#menu').length) {
					return;
				}

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
					speechInfo = target.find('.speech-info');

				target.siblings('.opened').removeClass('opened').find('.more').height(0);
				target.toggleClass('opened');

				if (target.hasClass('opened')) {
					speechInfo.height(24);
					more.height(more.find('.details').outerHeight());
				} else {
					speechInfo.height(target.find('.speech-title').outerHeight());
					more.height(0);
				}
			});
		},

		init : function () {
			var that = this;

			$(function () {
				that.setupGearAnimation();
				that.setupDropdown();
				that.setupSpeakerList();

				that.animateScroll();
			});
		}
	}).init();
} (jQuery, window, document));
