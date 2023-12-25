
const ROUND_NUMBER = 5;
const WAIT_TIME = 1000;
let canClick = true;
let playerPokemon = " ";
let computerPokemon = " ";
let playerScore = 0;
let computerScore = 0;

const playerSelectedImg = document.querySelector(".playerSelected");
const computerSelectedImg = document.querySelector(".computerSelected");
const winnerTextElement = document.querySelector(".WinnerText");
const playerPokeballs = document.querySelector(".pokeballs.player");
const computerPokeballs = document.querySelector(".pokeballs.computer");



function getComputerPokemonImg()
{
   let choice = Math.floor(Math.random() * 3) + 1;
   const pokeBtn = document.querySelector(`.btn--${choice}`)
   return pokeBtn.querySelector("img"); 
}

function PlayRound(userChoice, computerChoice)
{
    let winner = "";

    switch(userChoice)
    {
        case "Bulbasaur":
            {
                if(computerChoice === "Squirtle")
                {
                    winner =  "user";
                }
                else if(computerChoice === "Charmender")
                {
                    winner =  "computer";
                }
                else
                {
                    winner = "draw";
                }
            }
        break;
        case "Charmender":
            {
                if(computerChoice === "Bulbasaur")
                {
                    winner = "user";
                }
                else if(computerChoice === "Squirtle")
                {
                    winner = "computer";
                }
                else
                {
                    winner = "draw";
                }
            }
        break;
        case "Squirtle":
            {
                if(computerChoice === "Charmender")
                {
                    winner = "user";
                }
                else if(computerChoice === "Bulbasaur")
                {
                    winner = "computer";
                }
                else
                {
                    winner = "draw";
                }
            }
        break;
    }
    PrintResults(winner);

}

function PrintResults(winner)
{
    switch(winner)
    {
        case "user":
        {
            winnerTextElement.textContent = `Player ${playerPokemon} has won!`;
            if(playerScore >= ROUND_NUMBER - 1)
            {
                ResetGame();
            }
            else
            {
                playerScore++;
                playerPokeballs.insertAdjacentHTML("beforeend", `<img class = "pokeball" src="./images/pokeball.png"></img>`);
            }

        }break;
        case "computer":
        {
            winnerTextElement.textContent = `Computer ${computerPokemon} has won!`;
            if(computerScore >= ROUND_NUMBER - 1)
            {
                ResetGame();
            }
            else
            {
                computerScore++;
                computerPokeballs.insertAdjacentHTML("beforeend", `<img class = "pokeball" src="./images/pokeball.png"></img>`);
            }
        }break;
        case "draw":
        {
            winnerTextElement.textContent = "DRAW";
        }
    }
    setTimeout(ResetRound, WAIT_TIME * 2);
}

function ResetRound()
{
    playerSelectedImg.setAttribute("src", "./images/question_mark.png");
    computerSelectedImg.setAttribute("src", "./images/question_mark.png");
    winnerTextElement.textContent = "";
    canClick = true;
}

function ResetGame()
{
    playerScore = 0;
    computerScore = 0;
    computerPokeballs.innerHTML = "";
    playerPokeballs.innerHTML = "";
}

function Game()
{
    function UpdateResultImages(playerImg, computerImg)
    {
        playerSelectedImg.setAttribute("src",playerImg.getAttribute("src"));
        setTimeout(()=>{
            computerSelectedImg.setAttribute("src",computerImg.getAttribute("src"));
        },WAIT_TIME);
    }

    const pokemonContainer = document.querySelector(".PokeContainer");
    const pokeButtons = document.querySelectorAll(".poke");


    pokemonContainer.addEventListener("mouseover", function(e)
    { 
        e.preventDefault();
        const targetButton = e.target.closest(".poke");
  
        if (targetButton) {
          pokeButtons.forEach((button) => {
            if (button !== targetButton) button.classList.add("notShine");
          });
          targetButton.classList.add("shine");
        }
    });

    pokemonContainer.addEventListener("mouseout", function(e)
    {
       
        e.preventDefault();
        const targetButton = e.target.closest(".poke");
  
        if (targetButton) {
          pokeButtons.forEach((button) => {
            if (button !== targetButton) button.classList.remove("notShine");
          });
          targetButton.classList.remove("shine");
        }

    });

    pokemonContainer.addEventListener("click", function(e)
    {
        e.preventDefault();
        const targetButton = e.target.closest(".poke");
        if (targetButton && canClick) {
            canClick = false;
            const playerImg = targetButton.querySelector("img");
            const computerImg = getComputerPokemonImg();
            UpdateResultImages(playerImg, computerImg);

            playerPokemon = playerImg.getAttribute("data-poke");
            computerPokemon = computerImg.getAttribute("data-poke");

            const myTimeout = setTimeout(PlayRound,WAIT_TIME,playerPokemon,computerPokemon);
        }

    });



}

Game();
