var bg;
var bgImg;
var shooter;
var shooterImg;
var shooting;
function preload(){
  bgImg = loadImage ("assets/bg.jpeg")
  shooterImg = loadImage ("assets/shooter_2.png")
  shooting = loadImage ("assets/shooter_3.png")

}

function setup(){
  createCanvas(windowWidth, windowHeight) ;
  //creating background
  bg= createSprite(displayWidth/2, displayHeight/2,20,20)
  bg.addImage (bgImg)
  bg.scale = 1.2
  shooter = createSprite (160,500,10,10)
  shooter.addImage (shooterImg)
  shooter.scale =0.5
}

function draw(){
  background("black")
  if(keyDown("UP_ARROW")){
   shooter.y = shooter.y - 30
  } 
  if(keyDown("DOWN_ARROW")){
    shooter.y = shooter.y + 30
  }
  if(keyDown("RIGHT_ARROW")){
    shooter.x = shooter.x + 30
  }
  if(keyDown("LEFT_ARROW")){
    shooter.x = shooter.x - 30
  }
  if(keyWentDown("SPACE")){
    shooter.addImage(shooting)
  }
  if(keyWentUp("SPACE")){
    shooter.addImage(shooterImg)
  }
  drawSprites();
}