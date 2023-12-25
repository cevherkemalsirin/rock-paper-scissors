
const ROUND_NUMBER = 5;
const WAIT_TIME = 1000;
let canClick = true;
let playerPokemon = " ";
let computerPokemon = " ";

const playerSelectedImg = document.querySelector(".playerSelected");
const computerSelectedImg = document.querySelector(".computerSelected");
const winnerTextElement = document.querySelector(".WinnerText");



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
        }break;
        case "computer":
        {
            winnerTextElement.textContent = `Computer ${computerPokemon} has won!`;
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
    playerSelectedImg.setAttribute("src", "/images/question_mark.png");
    computerSelectedImg.setAttribute("src", "/images/question_mark.png");
    canClick = true;
}

function ResetGame()
{
    
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

    function ResetImages()
    {

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
