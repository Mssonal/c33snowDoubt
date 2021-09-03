class Snow{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            
            
        }
        this.width = width
        this.height = height
        this.body = Bodies.circle(x, y, width,height,options);
        this.image = loadImage("snow4.webp")
        //this.color= color(random(0,225),random(0,225),random(0,225))
        //give color property 
        World.add(world, this.body);
       
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
        //noStroke();
        //fill("white");
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop();
    }
}