$( document ).ready(function(){
// establishes the random number assigned to each crystal
let crystal1= Math.floor(Math.random()*11+1);
let crystal2= Math.floor(Math.random()*11+1);
let crystal3= Math.floor(Math.random()*11+1);
let crystal4= Math.floor(Math.random()*11+1);
let computerNumber=Math.floor(Math.random()*102+19);
$('#what').text(computerNumber);
let playerTotal= 0; 
let victory= 0;

let losses = 0;
// resets the game, reassigning crystal numbers
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
    $("#wins").text(victory);
    $("#taunt").text("You Won!");
    reset();
    };
function loser(){
    losses++;
    $("#losses").text(losses);
    $("#taunt").text("really dude?");
    reset();
    };
// assigning buttons and properties
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
