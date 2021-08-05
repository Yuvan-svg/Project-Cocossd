img="";
status="";
objects = [];
function preload(){
img = loadImage('book.jpg');
}
function setup(){
canvas= createCanvas(640,420);
canvas.center();
objectDetector= ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
console.log("Model is Loaded");
status= true;
objectDetector.detect(img,gotResult);
}

function gotResults(error,results){
if(error){
console.log(error);
}
console.log(results);
object = results;
}

function draw(){
image(img,0,0,640,420);
if(status !="")
fill("#FF0000");
text("Book Pile 1",50,65);
noFill();
stroke("#FF0000");
rect (35,50,400,350);

fill("#FF0000");
text("Book Pile 2",315,180);
noFill();
stroke("#FF0000");
rect(300,170,300,200);
}