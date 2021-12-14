class Snow{
    constructor(x, y, r) {
        var options = {
            'friction':1.0,
            'density':0.3
        }
        this.radius = r;
        this.body= Bodies.circle(x,y,this.radius, options)
        
        //this.height = height;
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        image(this.image,pos.x,pos.y,0);
        pop();
    }
}