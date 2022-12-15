//images and sounds
let freewayImage;
let actorImage;
let carImage;
let carImage2;
let carImage3;

let trackSound;
let collisionSound;
let pointSound;

function preload() {
  freewayImage = loadImage("Images/estrada.png");
  actorImage = loadImage("Images/ator-1.png");
  carImage = loadImage("Images/carro-1.png");
  carImage2 = loadImage("Images/carro-2.png");
  carImage3 = loadImage("Images/carro-3.png");
  
  carImages = [carImage, carImage2, carImage3, carImage, carImage2, carImage3];
  
  trackSound = loadSound("sounds/trilha.mp3");
  collisionSound = loadSound("sounds/colidiu.mp3");
  pointSound = loadSound("sounds/pontos.wav");
}