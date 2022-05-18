function start(){ 
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/c3BZV-m1R/model.json", modelLoaded)
}
    function modelLoaded(){
    classifier.classify(getResult())
    console.log("Model Loaded Successfully")
}
function gotResult(error, result){
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        randomR=Math.floor(Math.random()*255)+1
        randomG=Math.floor(Math.random()*255)+1
        randomB=Math.floor(Math.random()*255)+1
        document.getElementById("result").style.color="rgb("+randomR+","+randomG+","+randomB+")"
        document.getElementById("accuracy").style.color="rgb("+randomR+","+randomG+","+randomB+")"
        document.getElementById("result").innerHTML="I can hear:"+result[0].label
        document.getElementById("accuracy").innerHTML="accuracy:"+(result[0].confidence*100).toFixed(2)+"%"
        image1=document.getElementById("animal")

        if (result[0].label=="Cat"){
            image1.src="imageCat.jpg"
            
        }
        else if (result[0].label=="Dog"){
            image1.src="imageDog.png"
            
        }
        else {
            image1.src="imageEar.jpg"
        }
    }
}