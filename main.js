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

let classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-4IQlRMiS/model.json',modelLoded)

function modelLoded(){
    console.log("MODEL LODED!!");
}

function check()
{
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (results){
        console.log(results);
        document.getElementById("result-object-name").innerHTML=results[0].label;
        document.getElementById("result-object-accuracy").innerHTML=results[0].confidence.toFixed(3);
    }else{
        console.error(error);
        console.log("error occured");
    }
}