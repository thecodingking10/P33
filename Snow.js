class Snow{
  constructor(x,y,r){
    var options = {
        restitution: 0.4
}
  this.r = r;
  this.body = Bodies.circle(x,y,this.r,options);
  this.snowImg = loadImage("snow4.webp")
  World.add(world, this.body);

}
  display(){
    push()
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.snowImg,pos.x,pos.y,this.r,this.r);
      pop();
  }
}