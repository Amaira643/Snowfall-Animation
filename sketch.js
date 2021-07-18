const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,bgImg;
var snowman,snowmanImg;
function preload(){

  bgImg = loadImage("snow6.jpg");

}
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  snowman = new Snowman(810, 350);

}
function draw(){
background(bgImg)

snowman.display();
}