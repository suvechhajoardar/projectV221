var canvas;
var music;
var block1,block2,block3,block4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
edges=createEdgeSprites();
    //create 4 different surfaces
block1=createSprite(100,550,190,50);
block1.shapeColor="red";
block2=createSprite(300,550,190,50);
block2.shapeColor="blue"
block3=createSprite(500,550,190,50);
block3.shapeColor="green"
block4=createSprite(700,550,190,50);
block4.shapeColor="yellow"
    //create box sprite and give velocity
 ball=createSprite(random(20,70),10,50,50);
 ball.shapeColor="white";
 ball.velocityX=3;
 ball.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edges);
//ball.bounceOff(block1);
//ball.bounceOff(block2);
//ball.bounceOff(block3);
//ball.bounceOff(block4);
if(ball.isTouching(block1)&&ball.bounceOff(block1)){
    ball.shapeColor="red"
}
if(ball.isTouching(block2)&& ball.bounceOff(block2)){
    ball.shapeColor="blue"
}
if(ball.isTouching(block3)&& ball.bounceOff(block3)){
    ball.shapeColor="green"
}
if(ball.isTouching(block4)&& ball.bounceOff(block4)){
    ball.shapeColor="yellow"
}



drawSprites();

    //add condition to check if box touching surface and make it box
}
