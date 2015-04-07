require(["paint/manager", "objects/circle"], function(Manager, Circle) {
	var m = Manager.getInstance();
	m.initialize(document.getElementById('canvas'));

	var c = new Circle({
		x: 100,
		y: 100,
		radius: 20,
		vx: 100,
		ay: -9.8});
	m.add(c);
});