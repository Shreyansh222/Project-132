Status = "";
TV_Image = "";

function preload()
{
TV_Image = loadImage("TV_Image.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
console.log("Model Loaded!");
Status = true;
objectDetector.detect(TV_Image,gotResults);
}

function gotResults(error,results)
{
if(error)
{
console.error(error);
}
console.log(results);
}

function draw()
{
image(TV_Image,0,0,640,350);
}