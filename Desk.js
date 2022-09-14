Status = "";
Desk_Image = "";

function preload()
{
Desk_Image = loadImage("Desk_Image.jpg");
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
objectDetector.detect(Desk_Image,gotResults);
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
image(Desk_Image,0,0,640,350);
}