
var ground
var groundV2
var groundV3
var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		fiction:0,
		density:1.2
	}
	ball = Bodies.circle(200, 20, 20, ball_options)
	World.add(world, ball)

	var ground_options = {
		isStatic:true
	  }
	  ground = Bodies.rectangle(400, 670, 800, 20, ground_options)
	  World.add(world, ground)


	  var ground_options = {
		isStatic:true
	  }
	  groundV2 = Bodies.rectangle(600, 620, 20, 100, ground_options)
	  World.add(world, ground)


	  var ground_options = {
		isStatic:true
	  }
	  groundV3 = Bodies.rectangle(750, 620, 20, 100, ground_options)
	  World.add(world, ground)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 20)
  rect(groundV2.position.x, groundV2.position.y,20, 100 )
  rect(groundV3.position.x, groundV3.position.y,20, 100 )

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20)	

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,{x: 0, y: 0},{x: 6, y: -12})
	}

}


