const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var Pikachu,PikachuImg;
var flakes;
var rndm1,rndm2,rndm3

function preload(){
bg = loadImage("snow3.jpg");
PikachuImg = loadImage("Pikachu.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  Pikachu = createSprite(windowWidth/2,windowHeight/2+200);
  Pikachu.addImage("Character1",PikachuImg);
  flakes = new Snow(Math.round(random(100,800)),100,100);
  
  
  //flakes = new Snow(100,100,50,50);

}

function draw() {
  background(bg);
  
  Engine.update(engine);

  if(frameCount%30 === 0){
    flakes.display();
    
  }
  if(keyDown("left")){
    Pikachu.x = Pikachu.x-10;
  }

  if(keyDown("right")){
    Pikachu.x = Pikachu.x+10;
  }

  drawSprites();

  
 
}