var conference = {
	window: $(window),
	containers: $('.conf'),

	init: function () {
		this.containers.hover(
			$.proxy(this.onHover, this, 'in'),
			$.proxy(this.onHover, this, 'out')
		);

		this.window.resize($.proxy(this.onResize, this));

		this.onResize();
	},

	onHover: function (direction, e) {
		var target = $(e.target).closest('.conf'),
			marginTop, classMethod;

		if (direction === 'in') {
			marginTop = this.getConfH(target) / -2;
			classMethod = 'addClass';
		} else {
			marginTop = -110;
			classMethod = 'removeClass';
		}

		if (this.window.width() > 1024) {
			$('.wrapper', target).css('marginTop',  marginTop);
			target[classMethod]('hover');
		}
	},

	onResize: function () {
		var w = this.window.width();

		if (w <= 1024 && w > 900) {
			this.containers.css('height', this.getMaxColumnHeight());
		}

		if (w < 1024) {
			this.containers.each($.proxy(function(i, e) {
				$('.wrapper', e).attr('style', '');
				$(e).removeClass('hover');
			}, this));
		}
	},

	getConfH: function (o) {
		return $('h2', o).height() + $('h3', o).height() + $('.description', o ).height() + 30;
	},

	getMaxColumnHeight: function () {
		var colHeights = this.containers.map(function() {
			$(this).css('height', '');

			return $(this).height();
		});

		return Math.max.apply(null, colHeights);
	}
};


$(function() {
	conference.init();
});