class Rubber {
    constructor(x, y, radius) {
      var options1 = {
          'restitution':0.3,
          'friction':9,
          'density':1
      }
      this.body = Bodies.circle(x, y, 70, options1);
      this.radius = 70;
      
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
  
