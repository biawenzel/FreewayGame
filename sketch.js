function setup() {
  createCanvas(500, 400);
  trackSound.loop();
}

function draw() {
  background(freewayImage);
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnCarInitialPosition();
  checkCollision();
  showPoints();
  scorePoints();
}









