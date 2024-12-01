// const option1 = document.getElementById("option1");
// const option2 = document.getElementById("option2");
// const option3 = document.getElementById("option3");
// const audio = document.getElementById("myaudio");
// var answer = 0;

// function generate_equation(){
//     var num1 = Math.floor(Math.random()* 13);
//     var num2 = Math.floor(Math.random()* 13);
//     var dummyAnswer1 = Math.floor(Math.random()* 13);
//     var dummyAnswer2 = Math.floor(Math.random()* 13);
//     var allAnswers =[];
//     var switchAnswers = [];
//     answer = num1/num2;

//     document.getElementById("num1").innerHTML=num1;
//     document.getElementById("num2").innerHTML=num2;

//     option1.innerHTML = answer;
//     option2.innerHTML = dummyAnswer1;
//     option3.innerHTML = dummyAnswer2;

// }

// option1.addEventListener("click" , function(){
//     if(option1.innerHTML == answer ){
//         generate_equation();
//     }
//     else{
//         audio.play();
//     }
// });

// option2.addEventListener("click" , function(){
//     if(option2.innerHTML == answer ){
//         generate_equation();
//     }
//     else{
//         audio.play();
//     }
// });

// option3.addEventListener("click" , function(){
//     if(option3.innerHTML == answer ){
//         generate_equation();
//     }
//     else{
//         audio.play();
//     }
// });

// generate_equation();



const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myaudio");
var answer = 0;

function generate_equation() {
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13) + 1; // Avoid division by zero
    var dummyAnswer1 = (Math.random() * 13).toFixed(2);
    var dummyAnswer2 = (Math.random() * 13).toFixed(2);
    answer = (num1 / num2).toFixed(2);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    var allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    allAnswers.sort(() => Math.random() - 0.5);

    option1.innerHTML = allAnswers[0];
    option2.innerHTML = allAnswers[1];
    option3.innerHTML = allAnswers[2];
}

option1.addEventListener("click", function () {
    if (Number(option1.innerHTML) === Number(answer)) {
        generate_equation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function () {
    if (Number(option2.innerHTML) === Number(answer)) {
        generate_equation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", function () {
    if (Number(option3.innerHTML) === Number(answer)) {
        generate_equation();
    } else {
        audio.play();
    }
});

generate_equation();
