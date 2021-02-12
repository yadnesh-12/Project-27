class Cons{
    constructor(body1, point){
        var options = {
            bodyA: body1,
            pointB : point,
            //stiffness: 0.04,
            length: 260
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = point;
    }


   

    display(){
        
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}