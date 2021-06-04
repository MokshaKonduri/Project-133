img="";
status="";
objects=[];
function preload() {
img=loadImage('dog-and-cat-cover.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    
}
function modelLoaded() {
    console.log("Coco Ssd Model is Loaded!!Yipee!!");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
if(error) {
    console.log(error);
}

    console.log(results);
    
    objects=results;
}
function draw() {
    image(img,0,0,640,420);
    if(status != "") {
        for(i=0; i < objects.length; i++) {
            console.log("Objects"+objects[i]);
            document.getElementById("status").innerHTML="Status : Objects Dectected";
            fill("#ff1493");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent+"%",objects[i].x + 15,objects[i].y + 15);
            noFill();
            stroke("#ff1493");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
