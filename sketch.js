var mrect,frect

function setup() {
  createCanvas(800,800);
  
mrect = createSprite(400,200,80,30);
mrect.shapeColor = "green";
mrect.velocityX = -3;
frect = createSprite(200,200,50,80);
frect.shapeColor = "green";
frect.velocityX = -3;

gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "green";
gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "green";
gameObject3 = createSprite(300.100,50,50);
gameObject3.shapeColor = "green";
gameObject4  = createSprite(400,100,50,50);
gameObject4.shapeColor = "green";
}

function draw() {
  background("black");  
  
 // mrect.x = World.mouseX;
 // mrect.y = World.mouseY;
  if(isTouching(mrect,frect))
    { mrect.shapeColor = "red"; frect.shapeColor = "red"; }
     else{ 
       mrect.shapeColor = "green"; 
       frect.shapeColor = "green";
       }

       bounceOffme(gameObject2,frect)
       drawSprites();
}