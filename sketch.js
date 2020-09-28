var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottom,left,right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 var options={isStatic:true};
	 bottom=Bodies.rectangle(400,640,100,20,options);
World.add(world,bottom);

var options={isStatic:true};
left=Bodies.rectangle(500,550,20,100,options);
World.add(world,left);

var options={isStatic:true};
right=Bodies.rectangle(300,550,20,100,options);
World.add(world,right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("red");
  rect(this.bottom.position.x,this.bottom.position.y,200,20);
  fill ("red");
  rect(this.left.position.x,this.left.position.y,20,200);
  fill ("red");
  rect(this.right.position.x,this.right.position.y,20,200);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



