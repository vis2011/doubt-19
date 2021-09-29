class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 450,
    };

    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.rope);
  }

  fly(){
    this.sling.bodyA=null;
  }

      
  attach(body){
    this.sling.bodyA = body;
  }

  display() {
    if (this.sling.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();

      //set the value of stroke to hide the rope
      stroke(48, 22, 8);
      strokeWeight(0);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}
