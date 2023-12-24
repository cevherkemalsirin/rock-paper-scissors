
const ROUND_NUMBER = 5;


function getComputerPokemonImg()
{
   let choice = Math.floor(Math.random() * 3) + 1;
   const pokeBtn = document.querySelector(`.btn--${choice}`)
   return pokeBtn.querySelector("img"); 
}

function PlayRound(userChoice, computerChoice)
{
    console.log(userChoice, computerChoice);
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
    function UpdateResultImages(playerImg, computerImg)
    {
        const playerSelectedImg = document.querySelector(".playerSelected");
        const computerSelectedImg = document.querySelector(".computerSelected");

        playerSelectedImg.setAttribute("src",playerImg.getAttribute("src"));
        computerSelectedImg.setAttribute("src",computerImg.getAttribute("src"));
    }


    const pokemonContainer = document.querySelector(".PokeContainer");
    const pokeButtons = document.querySelectorAll(".poke");
    let playerPokemon = " ";

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
        if (targetButton) {
            const playerImg = targetButton.querySelector("img");
            const computerImg = getComputerPokemonImg();
            UpdateResultImages(playerImg, computerImg);

            playerPokemon = playerImg.getAttribute("data-poke");
            computerPokemon = computerImg.getAttribute("data-poke");

            const myTimeout = setTimeout(PlayRound,3000,playerPokemon,computerPokemon);
        }

    });



}

Game();
