let camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:150
});

Webcam.attach('#camera');
function takeSnapShot(){
    Webcam.snap(function(data_uri){document.getElementById("captured_img").src = data_uri})
}

console.log("ml5 Version",ml5.version);

let classifier=ml5.imageClassifier('',modelLoded);

function modelLoded(){
    console.log("MODEL LODED!!");
}