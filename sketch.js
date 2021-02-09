const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drops=[];
var maxDrops = 100;
function preload(){
 
}

function setup(){
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  drop = new Drops (200,400,5);

}
 function draw(){
     background (0);
if(frameCount%150===0){
     for (var i = 0; i<maxDrops; i++){
        this.drops.push (new Drops (random(0,400),random (0,400)))
     }
    }
   drop.display();
 }

