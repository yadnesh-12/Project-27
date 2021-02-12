class Rect {
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.5
        }
        this.body=Bodies.rectangle(x,y,400,200,options)
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        fill("grey");
        rectMode(CENTER);
        rect(pos.x,pos.y,350,50);
    }
}