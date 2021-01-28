class Drops{
    constructor(x,y){
        var options={
            friction : 0.01
        }
        this.body = Bodies.circle(x,y,3,options);
        this.radius=3;
        World.add(world,this.body);
    }

    display(){
        ellipseMode(RADIUS);
        fill("navy");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

    reposition(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}