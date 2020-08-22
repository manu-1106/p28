var tree1,ground1;
var stone1,boy,boyImage;
var mango1,mango2,mango3,mango4,mango5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

 boy=createSprite(130,680,30,60);
boy.image=loadImage("plucking mangoes/boy.png");

	engine = Engine.create();
	world = engine.world;

tree1=new tree(760,650,20,70);
ground1=new ground(0,680,800,20);
stone1= new stone(150,340,20,20);
mango1=new mango(780,700);
mango2=new mango(790,665);
mango3=new mango(775,675);
mango4=new mango(784,671);
mango5=new mango(782,654);
sling1=new sling(stone1,161);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree1.display();
  ground1.display();
  stone1.display();
  boy.display();
  boyImage.display();
  mango1.disply();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling1.display();
  drawSprites();
 
}



