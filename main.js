function startClassification() 
{ navigator.mediaDevices.getUserMedia({ audio: true }); 
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W8bfmE0ga/model.json', modelReady); } 
function modelReady() { classifier.classify(gotResults); } 
function gotResults(error, results) 
{ if (error) { console.error(error); } 
else 
{ console.log(results); 
    random_r = Math.floor(Math.random() * 255) + 1; 
    random_g = Math.floor(Math.random() * 255) + 1; 
    random_b = Math.floor(Math.random() * 255) + 1; 
    document.getElementById("sound").innerHTML = results[0].label;
     document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + " %";  
     document.getElementById("sound").style.color="rgb("+random_r+","+random_g+","+random_b+")"; 
        document.getElementById("accuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img=document.getElementById("dog");
        img2=document.getElementById("cat");
       
        if (results[0].label=="barking") {
            img.src="dog gif.gif";
            img2.src="cat.jpg";
        
        } else if (results[0].label=="meowing"){
            img.src="cat.jpg";
            img2.src="dog gif.gif";
            
        }   
       
         else{
            img.src="dog.jpeg";
            img2.src="cat.jpg";
         
        }   
    
    }}

