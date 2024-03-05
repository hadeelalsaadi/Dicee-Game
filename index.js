var randomNamber =  Math.floor((Math.random() *6)+1);
console.log(randomNamber);
if (randomNamber==1){
    document.querySelector("#p1").setAttribute("src","dice1.png")
}else if (randomNamber==2){
    document.querySelector("#p1").setAttribute("src","dice2.png")
}else if (randomNamber=3){
    document.querySelector("#p1").setAttribute("src","dice3.png")
}else if (randomNamber==4){
    document.querySelector("#p1").setAttribute("src","dice4.png")
}else if (randomNamber==5){
    document.querySelector("#p1").setAttribute("src","dice5.png")
}else{
    document.querySelector("#p1").setAttribute("src","dice6.png")
}

var randomNamber1 =  Math.floor((Math.random() *6)+1);
console.log(randomNamber1);
if (randomNamber1==1){
    document.querySelector("#p2").setAttribute("src","dice1.png")
}else if (randomNamber1==2){
    document.querySelector("#p2").setAttribute("src","dice2.png")
}else if (randomNamber1=3){
    document.querySelector("#p2").setAttribute("src","dice3.png")
}else if (randomNamber1==4){
    document.querySelector("#p2").setAttribute("src","dice4.png")
}else if (randomNamber1==5){
    document.querySelector("#p2").setAttribute("src","dice5.png")
}else{
    document.querySelector("#p2").setAttribute("src","dice6.png")
}
if(randomNamber>randomNamber1){
    document.querySelector("h1").innerHTML= "The winner is Player 1";

}else if(randomNamber1==randomNamber){
    document.querySelector("h1").innerHTML= "Draw!";

}else{
    document.querySelector("h1").innerHTML= "The winner is Player 2";
}
