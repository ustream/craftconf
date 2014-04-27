;(function ($, window, document) {
	if (!window.craft) {
		window.craft = {};
	}

	craft.live = {
		days: {
			day0: '2014-04-24',
			day1: '2014-04-25'
		},

		data: {
			room_0: [],
			room_1: [],
			room_2: []
		},

		channelSelectors: $('.live .channels li'),

		init: function () {
			this.embed = $('#UstreamIframe');
			this.channelSelectors.on('click', $.proxy(this.onSelectorClick, this));
		},

		onSelectorClick: function (e) {
			var target = $(e.target).closest('li'),
				cid = target.data('cid'),
				url = this.embed.attr('src');

			this.embed.attr('src', url.replace(/\/(\w)*$/g, '/' + cid));

			target
				.addClass('active')
				.siblings()
				.removeClass('active');
		}
	}
} (jQuery, window, document));