noseX=0;
noseY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/ncppvw4f/Clown-Nose-removebg-preview.png');
    wand = loadImage('https://i.postimg.cc/NjxDPDPX/wand2-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWrist x = " + rightWristX);
        console.log("rightWrist y = " + rightWristY);
    }
}

function modelLoaded() {
    console.log('PostNet Is Intialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
    image(wand, rightWristX, rightWristY-50, 100,100)
    }

function take_snapshot(){
    save('myFilterImage.png')
}
