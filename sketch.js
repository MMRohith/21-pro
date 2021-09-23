var ast
var drink
var bg
var gym
var eat
var move
var sleep

function preload()

sleep = loadImage("images/sleep.png",sleep)
gym=loadAnimation('images/gym1.png','images/gym1.png')
bg=loadImage('images/iss.png')



function setup() {
  createCanvas(400, 400);
  bg=createSprite(200,200,400,400)
  bg.addImage(bg)
  ast=createSprite(200,200,40,40)
ast=addImage(sleep)


}

function draw() {
  background(220);
}