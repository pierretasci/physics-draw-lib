define(function() {
	var instance = null;
	var drawables = [];
	var ctx = null;
	var canvas = null;
	var UNIVERSAL_TIME = 30; // millis

	var draw = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawables.map(function(d) {
			d.move(UNIVERSAL_TIME/1000);
			d.draw(ctx);
		}, this);
	}

	function Manager() {
		if(instance !== null) {
			throw new Error("Cannot create more than one Manager");
		}
	}

	Manager.prototype = {
		initialize: function(c) {
			// We want to start the draw loop
			this.drawLoop = window.setInterval(draw, this.UNIVERSAL_TIME());
			canvas = c;
			ctx = c.getContext('2d');
		},
		UNIVERSAL_TIME: function() {
			return UNIVERSAL_TIME; //millis
		},
		add: function(drawable) {
			if(drawable.draw) {
				drawables.push(drawable);
			}
		}
	}

	Manager.getInstance = function() {
		if(instance == null) {
			instance = new Manager();
		}

		return instance;
	}

	return Manager;
});