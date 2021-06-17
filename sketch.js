
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world,engine;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new paper(200,450,70);
	ground=new ground(width/2,670,width,20);
	dustbin=new dustbin(1100,650);



	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paper.display();
  ground.display();
  dustbin.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

    
  	}
}





