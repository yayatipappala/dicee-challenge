var random1=Math.random();
random1=random1*6;
random1=Math.floor(random1)+1;
var randomimage="images/"+"dice"+random1+".png";
document.querySelector("img.img1").setAttribute("src",randomimage);
var random2=Math.random();
random2=random2*6;
random2=Math.floor(random2)+1;
var randomimage2="images/"+"dice"+random2+".png";
document.querySelector("img.img2").setAttribute("src",randomimage2);

if(random1>random2){
  document.querySelector("h1").innerHTML="🚩Player1 wins";
}
else if(random1<random2){
  document.querySelector("h1").innerHTML="Player2 wins🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
