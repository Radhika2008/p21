var wall,thickness;
var bullet,speed,weight;

function setup(){

  createCanvas(1600,400);

speed=random(55,90);
weigth=random(400,1500);

bulletspeed=random(223,321);
bulletweight=random(30,52);

thickness=random(22,83)

bullet=createSprite(50,200,50,50);
bullet.velocityX=speed;
bullet.shapeColor=color(255);

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);

}

function draw(){

if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
vardamage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}
if(damage>10){
  wall.shapeColor(255,0,0);
}

if(damage<10){

  wall.shapeColor=color(0,255,0);

}

drawSprites();

}

function hasCollided(lbullet,lwall){
  
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true
}

return false;
}

