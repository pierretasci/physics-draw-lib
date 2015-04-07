define(function() {
	function Circle(options) {
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.radius = options.radius || 25;
		this.vx = options.vx || 0;
		this.vy = options.vy || 0;
		this.ax = options.ax || 0;
		this.ay = -options.ay || 0;
	}

	Circle.prototype.draw = function(ctx) {
		ctx.moveTo(this.x, this.y);
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		ctx.stroke();
	}

	Circle.prototype.move = function(dt) {
		this.x += this.vx * dt + 0.5 * this.ax * dt * dt * dt;
		this.y += this.vy * dt + 0.5 * this.ay  * dt * dt * dt;

		this.vy += this.ay * dt;
		this.vx += this.ax * dt;
	}

	return Circle;
});