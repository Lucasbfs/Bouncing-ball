//declaring variables
const FPS = 30; //30 frames per sec
var bsize = 30; //px

//radius
var radius = Math.floor((bsize / 2) * 1.414);

//ball 1 location
var ballx, bally; //ball locations

//ball 2 location
var ball2x, ball2y;

//ball 1 speed
var xvel, yvel; //velocity in pixels per sec

//ball 2 speed
var x2vel, y2vel;


var canvas, context;

//load the canvas on screen
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");

//set interval tame (the game loop)

setInterval(update, 1000 / FPS); 

//ball 1 starting position
ballx = canvas.width / 2;   //the width of the canvas divided 2;
bally = canvas.height / 2;

//second ball position
ball2x = canvas.height / 1.5;
ball2y = canvas.height / 1.5;

//random ball starting speed (50 and 100 px per sec)
xvel = Math.floor(Math.random() * 200 + 25) /  FPS; //math.floor to keep it as an inteer and not decimal, 101 is because 1 is not count
yvel = Math.floor(Math.random() * 200 + 25) /  FPS; 


//random second ball starting speed 
x2vel = Math.floor(Math.random() * 10 + 25); //math.floor to keep it as an inteer and not decimal, 101 is because 1 is not count
y2vel = Math.floor(Math.random() * 10 + 25); 

//random ball direction
if(Math.floor(Math.random() * 2) == 0) {
    xvel = -xvel;
}
if(Math.floor(Math.random() * 2) == 0) {
    yvel = -yvel;
}

//second random ball direction
if(Math.floor(Math.random() * 2) == 0){
    x2vel = -x2vel;
}
if(Math.floor(Math.random() * 2) == 0){
    y2vel = -y2vel;
}


//update function (actions of the ball)
function update(){
    //moving the ball (position plus velocity)
    ballx += xvel;
    bally += yvel;

    //moving the second ball
    ball2x += x2vel;
    ball2y  += y2vel;

    //bounce the ball of each wall
    if(ballx - bsize / 2 < 0 && xvel < 0){
        xvel = -xvel;
    }
    if(ballx + bsize / 2 > canvas.width && xvel > 0){
        xvel = -xvel;
    }
    if(bally - bsize / 2 < 0 && yvel < 0){
        yvel = -yvel;
    }
    if(bally + bsize / 2 > canvas.height && yvel > 0){
        yvel = -yvel;
    }

    //bounce the second ball
    if(ball2x - bsize / 2 < 0 && x2vel < 0){
        x2vel = -x2vel;
    }
    if(ball2x + bsize / 2 > canvas.width && x2vel > 0){
        x2vel = -x2vel;
    }
    if(ball2y - bsize / 2 < 0 && y2vel < 0){
        y2vel = -y2vel;
    }
    if(ball2y + bsize / 2 > canvas.height && y2vel > 0){
        y2vel = -y2vel;
    }


    //make the two balls bounce each other
    // if(ballx + radius == ball2x + radius){
    //     xvel = -xvel;
    // }
    // if(bally + radius == ball2y + radius){
    //     yvel = -yvel;
    // }

    //draw background and ball
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    

    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(ballx, bally, bsize, 0, 2 * Math.PI);
    context.fill();

    //create second ball
    context.beginPath();
    context.fillStyle = "red";
    context.arc(ball2x, ball2y, bsize, 0, 2 * Math.PI);
    context.fill();

    // context.fillStyle = "red";
    // context.fillRect(ball2x - bsize / 2, ball2y - bsize / 2, bsize, bsize);
}
