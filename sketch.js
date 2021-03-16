const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stand1, stand2
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var polygon
var link
var score = 0;
var bg
var bgImg

function preload() {
    polygon_img=loadImage("polygon.png");

    getBgImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,590, 1200, 20);
    
    block1 = new Block(830, 235, 30, 40);
    block2 = new Block(860, 235, 30, 40);
    block3 = new Block(890, 235, 30, 40);
    block4 = new Block(920, 235, 30, 40);
    block5 = new Block(950, 235, 30, 40);
    block6 = new Block(860, 195, 30, 40);
    block7 = new Block(890, 195, 30, 40);
    block8 = new Block(920, 195, 30, 40);
    block9 = new Block(890, 155, 30, 40);

    stand1 = new Ground(890, 265, 190, 20);  
    stand2 = new Ground(490, 465, 190, 20);
    
    block10 = new Block(430, 435, 30, 40);
    block11 = new Block(460, 435, 30, 40);
    block12 = new Block(490, 435, 30, 40);
    block13 = new Block(520, 435, 30, 40);
    block14 = new Block(550, 435, 30, 40);
    block15 = new Block(460, 395, 30, 40);
    block16 = new Block(490, 395, 30, 40);
    block17 = new Block(520, 395, 30, 40);
    block18 = new Block(490, 355, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    link = new Launcher(polygon, {x:200, y:200});
}

function draw(){
    if(bgImg)
    background(bgImg);
    Engine.update(engine);

    fill("white");
    textSize(20);
    text("Score: " + score, 1100, 30);

    ground.display();
    
    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    
    stand2.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    link.display(); 

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
  
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    link.fly();
}

function keyPressed(){
    if (keyCode === 32)
    link.attach();
    Matter.Body.setPosition(polygon, {x: 200, y: 200});
}

async function getBgImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    //console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if(hour >= 06 && hour < 19)
    {
        bg = "bg1.png";
    }
    else
    {
        bg = "bg2.jpg"
    }

    bgImg = loadImage(bg);
}
