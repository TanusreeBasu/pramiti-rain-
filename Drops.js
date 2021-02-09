class Drops {
   constructor(x,y,radius){
    var options = {   
        restitution :0.4,
        friction :0.1,
        density :0.1
        //isStatic:true
    }
    this.drop = Bodies.circle(x, y,radius, options);
    this.radius = radius;
   // this.drops = []  
    World.add (world,this.drop)
   }
   display(){
   // var maxDrops = 100;
 //   var angle = this.body.angle;
    fill("blue");
  //  push();
   // translate(this.body.position.x, this.body.position.y);
  //  rotate(angle);
    ellipseMode(RADIUS);
    ellipse(this.drop.position.x, this.drop.position.y,this.radius);
  //  pop();

    if (this.drop.position.y > height){
        Matter.Body.setPosition (this.drop,{x:random(0,400),y:random(0,400)})
    }

    // 
      
  }
   
   }
