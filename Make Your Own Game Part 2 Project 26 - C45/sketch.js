var score = 0;
var bg, bgImg;
var logo, logoImg;
var catcher, catcherImg;
var charizard, charizardImg, blastoise, blastoiseImg, zekrom, zekromImg, venusaur, venusaurImg, mewtwo, mewtwoImg;

function preload() {
  bgImg = loadImage("assets/Background.jpg");
  logoImg = loadImage("assets/Logo.png");
  catcherImg = loadAnimation("assets/Catcher1.png", "assets/Catcher2.png");
  charizardImg = loadImage("assets/Charizard.png");
  blastoiseImg = loadImage("assets/Blastoise.png");
  zekromImg = loadImage("assets/Zekrom.png");
  venusaurImg = loadImage("assets/Venusaur.png");
  mewtwoImg = loadImage("assets/Mewtwo.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight)

  bg = createSprite(displayWidth / 2, displayHeight / 2);
  bg.addImage(bgImg);
  bg.velocityX = 0;
  bg.scale = 2

  logo = createSprite(displayWidth / 2 - 500, displayHeight / 2 - 260);
  logo.addImage(logoImg);
  logo.scale = 0.50

  catcher = createSprite(675, 100, 20, 50);
  catcher.addAnimation("catcher", catcherImg);
  catcher.scale = 0.75;
  frameRate(10);

  charizard = createSprite(displayWidth / 2 + 50, displayHeight / 2 + 165);
  charizard.addImage(charizardImg);
  charizard.scale = 0.30

  blastoise = createSprite(displayWidth / 2 - 350, displayHeight / 2 + 165);
  blastoise.addImage(blastoiseImg);
  blastoise.scale = 0.25

  zekrom = createSprite(displayWidth / 2 - 140, displayHeight / 2 + 165);
  zekrom.addImage(zekromImg);
  zekrom.scale = 0.25

  venusaur = createSprite(displayWidth / 2 + 400, displayHeight / 2 + 165);
  venusaur.addImage(venusaurImg);
  venusaur.scale = 0.25

  mewtwo = createSprite(displayWidth / 2 + 235, displayHeight / 2 + 165);
  mewtwo.addImage(mewtwoImg);
  mewtwo.scale = 0.25
}

function draw() {
  background(255, 255, 255);

  drawSprites();
}

