var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);

var randomImage1="dice"+randomNumber1+".png";
var randomImage2="dice"+randomNumber2+".png";

var ImageSrc1="dice/"+randomImage1;
var ImageSrc2="dice/"+randomImage2;

document.querySelectorAll("img")[0].setAttribute("src",ImageSrc1);
document.querySelectorAll("img")[1].setAttribute("src",ImageSrc2);

if(randomNumber1==randomNumber2){
    document.querySelector('h1').innerHTML="draw";
}else if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="player 1 win";
}else{
    document.querySelector('h1').innerHTML="player 2 win";
}