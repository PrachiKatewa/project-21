var wall , thickness;
var bullet , speed , weight ; 

function setup() {
  createCanvas(800,800);

  wall = createSprite(700,400,thickness,height/2);
  bullet = createSprite(100,400,50,10);

  wall.shapeColor = "brown";
  bullet.shapeColor = "green";

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;

}

function draw() {
  background(0);  
if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
wall.shapeColor = "red";
}

if(damage<10){
wall.shapeColor = "green";
}

}

 

  drawSprites();
}

function hasCollided(bullet , wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true  
}
else{
  return false ;
}


}