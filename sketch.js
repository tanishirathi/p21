var thickness,wall;
var bullet,speed,weigh

function setup() {
createCanvas(1600, 400);


speed=random(55,90)
weight=random(400,1500)
bullet=createSprite(50, 200, 50,50);   
bullet.velocityX = speed;
bullet.shapeColor=color(255);
thickness=random(22,83)
wall=createSprite(1200,200, thickness, height/2)
wall.shapeColor=color(80,80,80)
speed=random(223,321)
weight=random(30,52)
}


function draw() {
background(0); 
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10)
  {
  wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
hasCollided();
drawSprites();
 
}
function hasCollided(lbullet,lwall)
{

bulletRightEdge=lbullet.x+ lbullet.width;
wallleftEdge=lwall.x;
if(bulletRightEdge>=wallleftEdge)
{
return true 
}
return false;
}