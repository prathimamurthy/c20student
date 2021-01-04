var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  
  
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(600, 200, 50, 50);

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";


}


function draw() {
  background(255,255,255);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;


  //if the diff in x position === the sum of half the widths - > the rects are touching
  if( movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
   fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
   ){

    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{


    fixedrect.shapeColor = "green";
   movingrect.shapeColor = "green";
  }


  drawSprites();
}


//algorithms - it is solution/logic to some problem

//isTouching , bounceoff,createSprite

//if(trex.istouching(ball))

//create two sprites and we will check if they are touching each other - our own alogrithm