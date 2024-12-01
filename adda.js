const option1 = documet.getElementById("option1");
const option2 = documet.getElementById("option2");
const option3 = documet.getElementById("option3");
const audio = document.getElementById("myaudio");
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random()* 13);
    var num2 = Math.floor(Math.random()* 13);
    var dummyAnswer1 = Math.floor(Math.random()* 13);
    var dummyAnswer2 = Math.floor(Math.random()* 13);
    var allAnswers =[];
    var switchAnswers = [];
    answer = num1+num2;

    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;

    option1.innerHTML = answer;
    option2.innerHTML = dummyAnswer1;
    option3.innerHTML = dummyAnswer2;

}

option1.addEventListener("click" , function(){
    if(option1.innerHTML == answer ){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option2.addEventListener("click" , function(){
    if(option2.innerHTML == answer ){
        generate_equation();
    }
    else{
        audio.play();
    }
});

option3.addEventListener("click" , function(){
    if(option3.innerHTML == answer ){
        generate_equation();
    }
    else{
        audio.play();
    }
});

generate_equation();