var e,e1;
var s,s1;
var m,m1;
var v,v1;
var l,l1;
var angle = 0;
var anglespeed = 0.5;

function preload(){
  s1 = loadImage("sun.png");
  m1 = loadImage("mercury.png");
  e1 = loadImage("earth.png");
  v1 = loadImage("mars.png");
  l1 = loadImage("venus.png");
}
function setup() {
  createCanvas(1200,500);
  s = createSprite(100,40,30,30);
  s.addImage("s",s1);
  s.setCollider("circle",0,0,50);
  s.debug = true;

  m = createSprite(400,10,5,5);
  m.addImage("m",m1);
  m.setCollider("circle",0,0,50);

  e = createSprite(800, 300, 30, 30);
  e.addImage("e",e1);

  v = createSprite(1000,100,10,10);
  v.addImage("v",v1);

  l = createSprite(550,350,10,10);
  l.addImage("l",l1);
}

function draw() {
  background("black");

  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);  

  if (s.collide(m)){
    m.destroy();
  }

  angle = angle+anglespeed;

  if(frameCount%10===0){
    s.scale = s.scale+0.03;
  }

  drawSprites();
}