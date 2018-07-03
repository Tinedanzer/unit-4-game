$( document ).ready(function(){
var crystal1= Math.floor(Math.random()*11+1);
var crystal2= Math.floor(Math.random()*11+1);
var crystal3= Math.floor(Math.random()*11+1);
var crystal4= Math.floor(Math.random()*11+1);
var computerNumber=Math.floor(Math.random()*102+19);
document.getElementById('what').innerHTML=computerNumber;
var playerTotal= 0; 
var wins= 0;
var losses = 0;

function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#what').text(Random);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);
    playerTotal= 0;
    $('#totalscore2').text(playerTotal);
    } ;
if (playerTotal===computerNumber) {
    wins++;
    $(".wins").html;
    reset();
};
if(playerTotal>computerNumber){
    losses++;
    $(".losses").html;
    reset();
};
});
