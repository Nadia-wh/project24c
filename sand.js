class Sand {
    constructor(x, y, radius) {
      var options1 = {
          'restitution':0.4,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 20, options1);
      this.radius = 20;
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      ellipse(0, 0,this.radius);
      pop();
    }
  };