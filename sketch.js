const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time1;

function preload() {
    getBackgroundImg();
}

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
    background(backgroundImg);

} else{

    text("Please Refresh this page. If this problem persists please contact no one!",500,350)
}


    Engine.update(engine);


clock = time1;
text("Time: " + clock,width-200,30);
}

async function getBackgroundImg(){
var area = await prompt("Please send us your area?", "Europe/Brussels")
var secret = await "https://worldtimeapi.org/api/timezone/" + area;
var un = await fetch(secret);
var unjson = await un.json();
var dt = await unjson.datetime;
var time = await dt.slice(11,13);
time1 = await dt.slice(11,17);
if(time>-1 && time<5){
    backgroundImg = loadImage("sunset12.png"); 
}
if(time>4 && time<7){
    backgroundImg = loadImage("sunrise1.png"); 
}
if(time>6 && time<8){
    backgroundImg = loadImage("sunrise2.png"); 
}
if(time>7 && time<10){
    backgroundImg = loadImage("sunrise3.png"); 
}
if(time>9 && time<12){
    backgroundImg = loadImage("sunrise4.png"); 
}
if(time>11 && time<15){
    backgroundImg = loadImage("sunrise5.png"); 
}
if(time>14 && time<18){
    backgroundImg = loadImage("sunrise6.png"); 
}
if(time>17 && time<19){
    backgroundImg = loadImage("sunset7.png"); 
}
if(time>18 && time<20){
    backgroundImg = loadImage("sunset9.png"); 
}
if(time>19 && time<21){
    backgroundImg = loadImage("sunset10.png"); 
}
if(time>20 && time<23){
    backgroundImg = loadImage("sunset11.png"); 
}

}
