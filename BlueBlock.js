class BlueBlock{
  constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:1.0,
          density:1.0
      }
      this.x = x;
      this.y = y;
      this.width = 30;
      this.height = 40;
      this.Visibility = 255;
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<6){
        push();
        stroke("blue");
        fill("blue");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
  
        pop();
      }
  }
}