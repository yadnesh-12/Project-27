
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ball1= new Ball (260,300);
	ball2= new Ball(320,300);
	ball3= new Ball(380,300);
	ball4= new Ball(440,300);
	ball5= new Ball(500,300);

	rect1= new Rect(380,100);

	constraint1= new Cons(ball3.body,{x:380,y:100})
	constraint2= new Cons(ball2.body,{x:320,y:100})
	constraint3= new Cons(ball1.body,{x:260,y:100})
	constraint4= new Cons(ball4.body,{x:440,y:100})
	constraint5= new Cons(ball5.body,{x:500,y:100})

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();


  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rect1.display();
  
 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-150,y:-150});
	}
}



