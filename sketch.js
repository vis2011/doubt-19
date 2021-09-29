const Engine = Matter.Engine,
const  World = Matter.World,
const  Events = Matter.Events,
const  Bodies = Matter.Bodies,
const Constraint = Matter.Constraint;
 
var snowfall=100;
var bg;
var ground;
maxsnow = 10;
var pushSnow=[];
var image_image;
var Snowball;
var SLINGSHOT;

function preload(){
  bg=loadImage("snow2.jpg");
  image_image=loadImage("Rodo-Puppy.png");
}

function setup() {
  createCanvas(1200, 625);
  engine = Engine.create();
  world = engine.world;
  snowfall=new snow(100,100,100,100);
  ground=new Ground(600,530,1200,20);
  Snowball=new snowball(200,200,200,200);
  SLINGSHOT=new Slingshot(Snowball.body , {x:200,y:200});

  if(frameCount % 20 === 0){
    for(var i=0; i<maxsnow; i++){
        pushSnow.push(new snow(random(0,1200), 0));
    }
}
 
}


function draw() {
  background(bg);
  textSize(20)
  Engine.update(engine);
   snowfall.display();     
   Snowball.display();     
   image(image_image,30,350,300,300);
                  

    for(var i = 0; i<maxsnow; i++){
      pushSnow[i].display();
      pushSnow[i].updateY();
  }
  createSnow();
}

function createSnow(){
  if(World.frameCount % 75 === 0 ){
    var snow=createSprite(math.round(random(70,1000),80,50,5));
    snow.addImage("snow5.webp");
    snow.scale=0.04;
    snow.velocityY=20;
    snow.lifetime=33;
  }

  function mouseDragged() {
    //set the position of hero when mouse is dragged
    Matter.Body.setPosition(hero.body, { x:mouseX ,y: mouseY});
  }
  
  function mouseReleased(){
    rope.fly();
  
  }
  
  function keyPressed(){
    if(keyCode==32){
      rope.attach(hero.body);
      Matter.Body.setPosition(hero.body , {x:400 , y: 800});
    }
  }
}