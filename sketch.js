const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,50,50);
    box2 = new Box(900,550,50,50);
    box3 = new Box(700,450,50,50);
    box4 = new Box(900,450,50,50);
    box5 = new Box(800,350,50,50);
    pig1 = new Pig(800,550);
    pig2 = new Pig(800,450);
    log1 = new Log(800,500,300,PI/2);
    log2 = new Log(800,400,300,PI/2);
    log3 = new Log(700,350,100,PI/7);
    log4 = new Log(850,350,100,PI/7);
    bird1 = new Bird(300,600);
    ground = new Ground(600,590,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    box5.display();
}