function preload()
{
    img=loadImage("dog_cat.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector='cocossd', (modelloaded);
    document.getElementById("Status").innerHTML="Status:Detecting objects"
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}

function modelloaded()
{
    console.log("model loaded!");
    status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
        console.log(results);
    
}