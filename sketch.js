var fixedRect, movingRect;
var object
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object=createSprite(400,250,50,120)
  movingRect.velocityY = -5;
  object.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(object,movingRect)
 
  drawSprites();
}
function bounceoff(object2,object3){
  if (object2.x - object3.x < object2.width/2 + object3.width/2
    && object3.x - object2.x < object2.width/2 + object3.width/2) {
  object3.velocityX = object3.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object3.y - object2.y < object2.height/2 + object3.height/2
  && object2.y - object3.y < object2.height/2 + object3.height/2){
  object3.velocityY = object3.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}