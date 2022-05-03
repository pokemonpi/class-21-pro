var ball;
var groundobj,leftside,rightside;
var radius = 40
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     

	Engine.run(engine);
  var ball_options={
	  isStatic:false,
      restitution:0.3,
	  friction:0,
	  density:1.2
  }
 ball=Bodies.circle(260,100,radius/2,ball_options);
 World.add(world,ball);
 groundobj=new ground(width/2, 670,width,20)
 leftside=new ground(1100,600,20,120)
 rightside=new ground(1350,600,20,120)




 


 Engine.run(engine)
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})






}

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse (ball.position.x,ball.position.y,radius,radius)
 groundobj.display()
 leftside.display()
 rightside.display()
  drawSprites();
  
 
}



