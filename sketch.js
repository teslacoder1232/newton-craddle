
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,bobObject1,bobObject2,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(395,300,240,20);

	bobObject1 = new Bob(300,500,20);
	bobObject2 = new Bob(345,500,20);
	bobObject3 = new Bob(390,500,20);
	bobObject4 = new Bob(435,500,20);
	bobObject5 = new Bob(480,500,20);

	rope1=new Rope(300,390,180,2);
	rope2=new Rope(345,390,180,2);
	rope3=new Rope(390,390,180,2);
	rope4=new Rope(435,390,180,2);
	rope5=new Rope(480,390,180,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
roofObject.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

 drawSprites();
 
}



