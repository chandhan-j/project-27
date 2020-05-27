const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var slingshot,slingshot2,slingshot3,slingshot4,slingshot5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,100,600,50);
	bob1 = new Bob(200,700,50);
	bob2 = new Bob(300,700,50);
	bob3 = new Bob(400,700,50);
	bob4 = new Bob(500,700,50);
	bob5 = new Bob(600,700,50);
	slingshot = new SlingShot(bob1.body,{x:200,y:100});
	slingshot2 = new SlingShot(bob2.body,{x:300,y:100});
	slingshot3 = new SlingShot(bob3.body,{x:400,y:100});
	slingshot4 = new SlingShot(bob4.body,{x:500,y:100});
	slingshot5 = new SlingShot(bob5.body,{x:600,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  slingshot.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  slingshot5.display();
  console.log("bob is showing");
   

  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}


