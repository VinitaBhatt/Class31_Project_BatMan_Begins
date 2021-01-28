const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




var maxDrops=100;
var drops=[];
var world,engine;
var umbrella_man;
var rand;
var thunderImage1, thunderImage2,thunderImage3,thunderImage4;
var thunder, thunderFrameCount;

function preload(){
    thunderImage1 = loadImage("1.png");
    thunderImage2 = loadImage("2.png");
    thunderImage3 = loadImage("3.png");
    thunderImage4 = loadImage("4.png");
}

function setup(){
   createCanvas(400,600);
   engine = Engine.create();
   world = engine.world;

   for(var i=0;i<=100;i++){
    drops.push(new Drops(random(0,400),random(0,400)));
   }
    
   umbrella_man = new Umbrella(200,440);


}

function draw(){
    Engine.update(engine);
    background("black");
    

    console.log(drops.length);
    for(var i=0; i<drops.length;i++){
        drops[i].display();
        drops[i].reposition();
    }

    umbrella_man.display();

    rand = Math.round(random(1,4));
    //console.log("Rand" + rand);
    if(frameCount % 80 === 0){
        thunderFrameCount = frameCount;
        console.log("under condition");
        thunder = createSprite(random(10,370), random(10,50), 10, 10);
        thunder.scale=0.5;
        switch(rand){
            case 1: thunder.addImage(thunderImage1);
                    console.log("case1");
                    break;
            case 2: thunder.addImage(thunderImage2);
                    break;
            case 3: thunder.addImage(thunderImage3);
                    break;
            default: thunder.addImage(thunderImage4);
        }
    }

    if(thunderFrameCount+10 === frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
    
}   

