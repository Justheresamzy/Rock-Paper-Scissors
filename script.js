const choices = ["Rock", "Paper", "Scissors"];
const botdisplay = document.getElementById("botdisplay");
const resultdisplay = document.getElementById("result");
const reload = document.getElementById("reload")


function playGame(playerchoices) {

    const botchoices = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoices === botchoices){
        result = "TIE";
    }
    else {
        switch(playerchoices){
            case "Rock":
                result = (botchoices === "Scissors") ? "YOU WIN" : "YOU LOSE";
                break;
             case "Paper":
                result = (botchoices === "Rock") ? "YOU WIN" : "YOU LOSE";
                break;
             case "Scissors":
                result = (botchoices === "Paper") ? "YOU WIN" : "YOU LOSE";
                break;

        }
    }

    botdisplay.textContent = botchoices;
    resultdisplay.textContent = result;
    console.log(botchoices);

} 

