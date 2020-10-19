var bullet,wall, damage ,thickness, ob1,ob2, bulletRightEdge, wallLeftEdge;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = (255,255,255);
  bullet.velocityX = speed;
  thickness=random(22,88);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(0,0,0);
if(collide(bullet,wall)){
  var damage = 0.5*weight*speed* speed/(thickness*thickness*thickness);
  bullet.velocityX = 0;

  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}

function collide(ob1,ob2){
  bulletRightEdge=ob1.x + ob1.width;
  wallLeftEdge = ob2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}