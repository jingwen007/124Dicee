var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var dice1 = document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");


var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var dice2 = document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

var refresh = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    refresh.textContent = "dice1 win!";
}else if(randomNumber1 < randomNumber2){
    refresh.textContent = "dice2 win!";
}else{
    refresh.textContent = "deuce";
}
