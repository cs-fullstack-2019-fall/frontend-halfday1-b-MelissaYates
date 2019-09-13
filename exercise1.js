let button1 = document.getElementById("first");
let button2 = document.getElementById("second");
const winning_score = 15;
let player1Clicks= 0;
let player2Clicks = 0;
let first_h1 = document.querySelector("#change1");
let second_h1 = document.querySelector("#change2");
let gameover = false;

button1.addEventListener("click", increaseButton1);
button2.addEventListener("click", increaseButton2);



function increaseButton1()
{
    if(!gameover)
    {
        player1Clicks++;
        first_h1.innerHTML=player1Clicks;
        if(player1Clicks===winning_score){
        gameover =true;
        playerScores()
        }

        }

}
function increaseButton2(){
    if(!gameover)
    {
        player2Clicks++;
        second_h1.innerHTML=player2Clicks;
        if(player2Clicks===winning_score){
        gameover=true;
        playerScores()
        }

    }

}

function playerScores(event)
{
    if(player1Clicks>player2Clicks){
        alert(`You are the winner! Your score is ${player1Clicks}`);
    }else if(player2Clicks>player1Clicks){
        alert(`You are the winner! Your score is ${player2Clicks}`);
    }
    else{
        alert("Tied");
    }
}









