class Paper
{
	constructor(x,y,r)
	{
		var options={
			restitution : 0.5			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("paper.png")
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
            image(this.image,0,0,this.r,this.r)
			//strokeWeight(4);
			pop()
			
	}

}