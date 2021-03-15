class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.1,
            'friction':0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.image = loadImage("rectangle.png");
        World.add(world, this.body);
      }

      score(){
        if(this.visibility > 0 && this.visibility < 255)
        {
          score++;
        }
      }

      display(){
        var angle = this.body.angle;
        if (this.body.speed < 5 ){
          push()
          //rotate(angle);
          rectMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          pop()
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        }
      }
}