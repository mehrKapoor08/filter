noseX = 0;
noseY = 0;
mustache = "";


function preload() {
    mustache = loadImage("https://i.postimg.cc/4NrTn1Rd/moustache2.png")
    lipstck = loadImage("l1.png")
};

function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 250)
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);


}

function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, noseX - 20, noseY - 2, 30, 30);
    image(lipstck, noseX - 20, noseY - 1.23, 30, 30);
}

function takeSnapshot() {
    save('snapshot.png')
}

function modelLoaded() {
    console.log('modelLoaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX =' + noseX);
        console.log('noseY =' + noseY);
    }

}
3