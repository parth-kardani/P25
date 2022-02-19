RwristX=0;
LwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,160)

    posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}

function modelloaded(){
    console.log("Model Loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        RwristX=results[0].pose.rightWrist.x;
        LwristX=results[0].pose.leftWrist.x;
        console.log("RwristX="+RwristX+  "LwristX="+LwristX);
        
        console.log("Difference= "+difference);

        
    }
}


function draw(){
    background("skyblue")
    difference=floor(RwristX-LwristX);
        textSize(difference);
        fill("pink")
        text("HELLO", 200,200);

}