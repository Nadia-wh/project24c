class Stone {
    constructor(x, y, width, height) {
      var options1 = {
          'restitution':0.4,
          'mass':8.0,
          'density':5.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options1);
      this.width = width;
      this.height = height;
      
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
      stroke("white");
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
