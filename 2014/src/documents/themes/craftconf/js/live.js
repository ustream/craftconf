;(function ($, window, document) {
	if (!window.craft) {
		window.craft = {};
	}

	craft.live = {
		days: {
			day0: '2014-04-23',
			day1: '2014-04-24'
		},

		data: {
			room_0: [],
			room_1: [],
			room_2: []
		},

		channelSelectors: $('.live .channels li'),

		init: function () {
			this.getDataFromSchedule();

			this.viewer = UstreamEmbed('UstreamIframe');

			this.channelSelectors.on('click', $.proxy(this.onSelectorClick, this));

			this.setCurrentState();

			setInterval($.proxy(function () {
				this.setCurrentState();
			}, this), 50000);
		},

		onSelectorClick: function (e) {
			var target = $(e.target).closest('li');

			this.viewer.callMethod('load', 'channel', target.data('cid'));

			target
				.addClass('active')
				.siblings().removeClass('active');
		},

		setCurrentState: function () {
			var currentTs = new Date().getTime();

			for (var i = 0; i < 3; i++) {
				var ongoig = false,
					next = false;

				$.each(this.data['room_' + i], $.proxy(function (ind, talk) {
					if (talk.start < currentTs && currentTs < talk.end) {
						ongoig = talk;
					}

					if (talk.start > currentTs) {
						next = talk;
						return false;
					}
				}, this));

				this.updateSelector(i, ongoig, next);
			}
		},

		updateSelector: function (room, talkData, nextTalkData) {
			var selector = this.channelSelectors.filter('.room' + room);

			selector.find('.live h5').text(talkData.title || 'There is no live talk right now!');
			selector.find('.live .speaker').text(talkData.speaker || '');

			if (nextTalkData) {
				selector.find('.next .time').text(nextTalkData.time.split('-')[0] || '');
				selector.find('.next .title').text(nextTalkData.title || 'There are no talks for today!');
				selector.find('.next .speaker').text(nextTalkData.speaker || '');
			}
		},

		getDataFromSchedule: function () {
			$('.schedule-tbl .day').each($.proxy(function (ind, day) {
				$(day).find('.desktop .schedule-slot').each($.proxy(function (i, e) {
					var dayKey = 'day' + ind;

					e = $(e);

					var time = $.trim(e.parent().find('.schedule-time').text()).split('-');

					var item = {
						start: new Date(this.days[dayKey] + ' ' + time[0]).getTime(),
						end: new Date(this.days[dayKey] + ' ' + time[1]).getTime(),
						time: time.join('-'),
						title: $.trim(e.find('.talk-title').text()),
						speaker: e.find('.schedule-speaker').text()
					};

					if (e.attr('colspan') == 3) {
						this.data['room_0'].push(item);
						this.data['room_1'].push(item);
						this.data['room_2'].push(item);
					} else {
						this.data['room_' + (e.index() - 1)].push(item);
					}
				}, this));
			}, this));
		}
	}
} (jQuery, window, document));