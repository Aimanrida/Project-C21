var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1200,400);
  bullet = createSprite(50, 200, 5, 50);
  bullet.shapeColor = "white";
  bullet.velocityX = 3;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

}

function draw() {
  background("lightblue");

  if(hasCollided(bullet,wall))
  {
     bullet.velocityX = 0;
     var damage=0.5 * weight * speed * speed/thickness * thickness * thickness;

     if(damage>10)
     {
       wall.shapeColor = colour(255,0,0,);
     }

     if(damage<10)
     {
       wall.shapeColor = color(0,255,0);
     }

  } 
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge =lbullet.x + lbullet.width;
  wallLeftedge=lwall.x;
  if (bulletRightEdge>=wallLeftedge)
  {
    return true;
  }
  return false
}