class Ball {
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 1,
            density : 0.8
        }
        this.body=Bodies.circle(x,y,30,options)
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,30,30);
    }
}