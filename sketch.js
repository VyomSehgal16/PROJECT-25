
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbinImage, recta4, paperImg;

function preload(){
  dustbinImage = loadImage("dustbingreen.png");
  paperImg = loadImage("paper.png");
}

function setup() {
	var canvas = createCanvas(1150, 400);
    engine = Engine.create();
	  world = engine.world;

	  ground = new Ground(575, 365, 1150,10);

    recta1 = new Recta(1000,355,100,20);
    recta1.shapeColor = "white";
	
    recta2 = new Recta(945,285,20,150);
    recta2.shapeColor = "white";

    recta3 = new Recta(1055,285,20,150);
    recta3.shapeColor = "white";
  
    recta4 = createSprite(1010,285,100,150);
    recta4.addImage(dustbinImage,"dustbingreen.png");
    recta4.scale = 0.425;

    paperObject = new Paper(100,350,20);
    
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  ground.display();
  recta1.display();
  recta2.display();
  recta3.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); 
	 }
   }
   
   



