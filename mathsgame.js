var playing = false;
var score;

var nr1;
var nr2;
var answer = 0;
var waarray = [0,0,0,0];
var timeleft;

// IF WE CLICK ON START-RESET 
//     IF WE ARE PLAYING
//         RELOAD 
//     IF NOT PLAYING 
//         SET SCORE TO 0
//         SHOW COUNTDOWN BOX 
//         REDUCE TIME BY SECONDS 
//             TIME LEFT?
//                 Y-continue
//                 N-GAME OVER    
//         CHANGE BUTTON TO RESET
//         GENERATE Q&A 
// IF WE CLICK ANSWERBOX
//     IF WE ARE PLAYING 
//         CORRECT
//             YES 
//                 INCREASE SCORE
//                 SHOW CORRECT BOX FOR 1 SECONDS
//                 GENERATE NEW Q&A 
//             NOT
//                 SHOW TRY AGAIN FOR 1 SEC 

document.getElementById("startreset").onclick = function() {
   if (playing == true) {location.reload()}
   else {
        hide("gameover");
        show("question");
        document.getElementById("choices").style.display="block";
        show("scorebox");
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML = score;
        show ("timeremaining");
        show ("instruction");

        timeleft=30;
        startcountdown();

        document.getElementById("sr").innerHTML='Reset Game';
        generateqa();
        }
    }   

for (i=1; i<5 ; i++) {
    document.getElementById("box" + i).onclick = function() {
        if (playing == true) {
            // if (document.getElementById("box1").innerHTML == answer)
            if (this.innerHTML==answer) {
                score+=1;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong")
                show("correct");
                setTimeout(function(){hide("correct")},1000);
                generateqa();
            }

            else {
                show("wrong")
                hide("correct");
                setTimeout(function(){hide("wrong")},1000)
            }
        }
    }
}

function generateqa() {
    nr1=Math.round(Math.random()*9+1);
    nr2=Math.round(Math.random()*9+1);
    document.getElementById("question").innerHTML=nr1 + " x " + nr2;
    answer= nr1*nr2;

    var placeofcorrectanswer = Math.round(Math.random()*3+1);
    document.getElementById("box"+placeofcorrectanswer).innerHTML=answer;

    for (i=0; i<waarray.length; i++) {
        waarray[i]=(Math.round(Math.random()*9+1)) * (Math.round(Math.random()*9+1));
        while (waarray[i]==answer) {waarray[i]=(Math.round(Math.random()*9+1)) * (Math.round(Math.random()*9+1))}
        while (waarray[i-1]==waarray[i]) {waarray[i]=(Math.round(Math.random()*9+1)) * (Math.round(Math.random()*9+1))}
    }

    for (i=1; i<5; i++) {
        if (i != placeofcorrectanswer) {document.getElementById("box"+i).innerHTML = waarray[i-1];}
    }
}

function startcountdown() {
    var counter = document.getElementById("counter");
    var timeremainingvalue = setInterval(function()
        {timeleft-=1;
        counter.innerHTML = timeleft;
        if (timeleft==0) {clearInterval(timeremainingvalue); oyunbiter()}; 
        } , 1000);
}

function oyunbiter(){  
    hide("timeremaining");
    hide("correct");
    hide("wrong");
    hide("scorebox");
    hide("question");
    document.getElementById("choices").style.display="none";
    show("gameover");
    document.getElementById("sr").innerHTML='Start Game';
    playing=false;
    document.getElementById("gameoverscore").innerHTML=score;

} 

function hide(id){
    document.getElementById(id).style.visibility='hidden';
}

function show(id){
    document.getElementById(id).style.visibility='visible';
}