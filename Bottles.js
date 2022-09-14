Status = "";
Bottles_Image = "";

function preload()
{
Bottles_Image = loadImage("Bottles_Image.jpg");
}

function setup()
{
canvas = createCanvas(640,350);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
console.log("Model Loaded!");
Status = true;
objectDetector.detect(Bottles_Image,gotResults);
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
image(Bottles_Image,0,0,640,350);
}