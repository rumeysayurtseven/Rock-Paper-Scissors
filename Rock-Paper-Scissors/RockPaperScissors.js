function computerPlay(){
    const rps=["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() *3);
    return (random,rps[random]);
}
function playerPlay(){
    const playerChoice= document.getElementById("user").value;
    return playerChoice;
}
function playRound(){
    let p1=playerPlay();
    let c1=computerPlay();
if(p1==c1){
    alert("Noone wins.");
}
else if (c1=="Rock" && p1=="Paper"){
    alert("You win! Paper beats Rock");
}
else if(c1=="Rock" && p1=="Scissors"){
    alert("You lose! Rock beats Scissor");
}
else if(c1=="Scissors" && p1=="Rock"){
    alert("You win! Rock beats Scissor");
}
else if(c1=="Scissors" && p1=="Paper"){
    alert("You lose! Scissor beats Paper");

}else if(c1=="Paper" && p1=="Rock"){
    alert("You lose! Paper beats Rock");

}else if(c1=="Paper" && p1=="Scissors"){
    alert("You win! Scissor beats Paper");
}
}
