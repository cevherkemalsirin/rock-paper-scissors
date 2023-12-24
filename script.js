
const ROUND_NUMBER = 5;


function getComputerChoice()
{
   let choice = Math.floor(Math.random() * 3) + 1;
   return choice === 1 ? "rock": choice === 2 ? "paper" : "scissors"; 
}

function PlayRound(userChoice, computerChoice)
{
    switch(userChoice)
    {
        case "rock":
            {
                if(computerChoice === "scissors")
                {
                    return "user";
                }
                else if(computerChoice === "paper")
                {
                    return "computer";
                }
                else
                {
                    return "draw";
                }
            }
        break;
        case "paper":
            {
                if(computerChoice === "scissors")
                {
                    return "computer";
                }
                else if(computerChoice === "rock")
                {
                    return "user";
                }
                else
                {
                    return "draw";
                }
            }
        break;
        case "scissors":
            {
                if(computerChoice === "rock")
                {
                    return "computer";
                }
                else if(computerChoice === "paper")
                {
                    return "user";
                }
                else
                {
                    return "draw";
                }
            }
        break;
    }

}


function Game()
{
    let userWinNum = 0;
    let userChoice = " ";
    for(let i = 0; i <ROUND_NUMBER; i++ )
    {
       userChoice = prompt("Please enter the choice : ").toLowerCase();
       let result = PlayRound(userChoice, getComputerChoice());
       if(result === "user")
       {
        userWinNum++;
        console.log("User has won this round!!!")
       }
       else if(result === "computer")
       {
        console.log("Computer has won this round!");
       }
       else
       {
        console.log("DRAW");
       }
    }

    Math.floor(ROUND_NUMBER / 2) < userWinNum ? console.log("User has won the GAME") : console.log("Computer has won the Game");
 }

