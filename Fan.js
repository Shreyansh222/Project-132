Status = "";
Fan_Image = "";

function preload()
{
Fan_Image = loadImage("Fan_Image.jpg");
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
objectDetector.detect(Fan_Image,gotResults);
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
image(Fan_Image,0,0,640,350);
}