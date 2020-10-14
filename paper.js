class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution: 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var Paperpos  = this.body.position;
        push();
        translate(Paperpos.x,Paperpos.y);
        ellipseMode(CENTER);
        fill("white"); 
        ellipse(0,0,this.radius,this.radius); 
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius+10, this.radius+10);
        pop();
    }
}