//Universe (Engine), Earth (World), Object (Bodies)
//create an engine => access the world => create a body, add it to the world
//matter.js   => Matter.World, Matter.Engine, Matter.Bodies

//namespaced
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, wo
var fruit

function setup(){

  createCanvas(600,400)

  engine = Engine.create()
  wo = engine.world

  // fruit = Bodies.circle(300,50, 30)
  // World.add(wo, fruit)

}

function draw(){
  background("black")
  Engine.update(engine)

  // fill("white")
  // ellipse(fruit.position.x, fruit.position.y,30)
}