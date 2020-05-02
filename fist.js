var fixedRect,movingRect;
function setup(){
createCanvas(1200,800);
fixedRect = createSprite(200,200,50,80);
fixedRect.shapeColor  = "green";
movingRect = createSprite(400,200,80,30);
movingRect.shapeColor = "yellow"
}
function draw(){
background(0,0,0,0);
movingRect.x = World.mouseX;
movingRect.Y = World.mouseY;
drawSprites();
}
if(movingRect.X - fixedRect.X === fixedRect.width /2 + movingRect.width/2){
movingRect.shapeColor = "red";
fixedRect.shapeColor = "green";
}   