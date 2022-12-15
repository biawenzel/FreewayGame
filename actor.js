//variaveis do ator
let yActor = 366;
let xActor = 85;
let collision = false;
let points = 0;

function showActor() {
  image(actorImage, xActor, yActor, 30, 30);
}

function moveActor() {
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    if (actorCanMove()) {
      yActor += 3;
    }    
  }
}

function checkCollision() {
  for (let i = 0; i < carImages.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], carLength, carHeight, xActor, yActor, 15)
    if (collision) {
      returnToStart();
      collisionSound.play();
      if (pointsGreaterThanZero()) {
         points -= 1;
      }     
    }
  }
}

function returnToStart() {
  yActor = 366;
}

function showPoints() {
  textAlign(CENTER);
  textSize(25);
  fill(color(7, 36, 222));
  text(points, width/2, 27);
}

function scorePoints() {
  if (yActor < 15) {
    points += 1;
    pointSound.play();
    returnToStart();
  }
}

function pointsGreaterThanZero() {
  return points > 0;  
}

function actorCanMove() {
  return yActor < 366;
}










