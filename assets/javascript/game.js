$( document ).ready(function(){
var crystal1= Math.floor(Math.random()*11+1);
var crystal2= Math.floor(Math.random()*11+1);
var crystal3= Math.floor(Math.random()*11+1);
var crystal4= Math.floor(Math.random()*11+1);
var computerNumber=Math.floor(Math.random()*102+19);
// document.getElementById('what').innerHTML=computerNumber;
$('#what').text(computerNumber);
var playerTotal= 0; 
var victory= 0;

var losses = 0;

// $("#totalscore2").text(crystal1);
function reset(){
    computerNumber=Math.floor(Math.random()*101+19);
    console.log(computerNumber)
    $('#what').text(computerNumber);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);
    playerTotal= 0;
    $('#totalscore2').text(playerTotal);
    } ;
function winner() {   
    victory++;
    $("#wins").html;
    reset();
    };
function loser(){
    losses++;
    $("#losses").html;
    reset();
    };

$('#crystal1').on ('click', function(){
    playerTotal = playerTotal + crystal1;
    $('#totalscore2').text(playerTotal);
    if (playerTotal === computerNumber){
        winner();
      }
      else if (playerTotal > computerNumber){
        loser();
      } 
    })
$('#crystal2').on ('click', function(){
        playerTotal = playerTotal + crystal2;
        $('#totalscore2').text(playerTotal);
        if (playerTotal === computerNumber){
            winner();
          }
          else if (playerTotal > computerNumber){
            loser();
          } 
    })
$('#crystal3').on ('click', function(){
            playerTotal = playerTotal + crystal3;
            $('#totalscore2').text(playerTotal);
            if (playerTotal === computerNumber){
                winner();
              }
              else if (playerTotal > computerNumber){
                loser();
              } 
    })
$('#crystal4').on ('click', function(){
                playerTotal = playerTotal + crystal4;
                $('#totalscore2').text(playerTotal);
                if (playerTotal === computerNumber){
                    winner();
                  }
                  else if (playerTotal > computerNumber){
                    loser();
                  } 
    })
});
