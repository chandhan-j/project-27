class Bob {
	constructor(x,y,radius) {
		var options={
			isStatic:false,
			restitution:0.9,
			friction:0.5,
            density:1.2
        }

		
        this.body=Bodies.circle(x,y, radius, options)
        this.radius = radius;

		World.add(world, this.body);

    }
    

	display() {
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			stroke("silver")
			strokeWeight(3);
			fill("silver")
			ellipse(0,0,this.radius, this.radius);
			pop()
			
	}

}