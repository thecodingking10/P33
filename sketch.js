const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var background;
var bg;
var max = 100;
var snow = [];

function preload(){
  bg = loadImage("snow1.jpg");
  
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  createCanvas(800,400);
}

function draw() {
  background(bg);
  var rand = Math.round(random(0,800));
  if(frameCount % 5 === 0){
      snow.push(new Snow(rand,30,30)); 
  }  
  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
  drawSprites();
}