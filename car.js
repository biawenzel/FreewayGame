let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let carLength = 50;
let carHeight = 40;

function showCar() {
  for (let i = 0; i < carImages.length; i++) {
    image(carImages[i], xCars[i], yCars[i], carLength, carHeight);
  }  
}

function moveCar() {
  for (let i = 0; i < carImages.length; i++) {
    xCars[i] -= speedCars[i];
  }  
}

function returnCarInitialPosition() {
  for (let i = 0; i < carImages.length; i++) {
    if (passedScreen(xCars[i])) {
    xCars[i] = 600;
    }
  }
}

function passedScreen(xCars) {
  return xCars < -50;
}







