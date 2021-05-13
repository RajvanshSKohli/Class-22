const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var myEngine,myWorld;
var ball,ground

function setup() {
  createCanvas(800,400);

  ellipseMode(CENTER);

  rectMode(CENTER);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  var ball_options={
    restitution: 1
  }

  ball=Bodies.circle(100,200,30,ball_options)
  World.add(myWorld,ball);

  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(400,380,800,20,ground_options)
  World.add(myWorld,ground);

  console.log(ball.position.y);


}

function draw() {

  Engine.update(myEngine);

  background(0);  
  
  ellipse(ball.position.x,ball.position.y,60,60)
  rect(ground.position.x,ground.position.y,800,20)
}