var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 70, 70);
  fixedRect.shapeColor="green";

  movingRect=createSprite(500,200,60,30);
  movingRect.shapeColor="green";

 
}

function draw() {
  background("black");
  movingRect.x=mouseX;
  movingRect.y=mouseY;  

  console.log(fixedRect.width/2+movingRect.width/2);
  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }

  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green"
  }
  
  drawSprites();
}