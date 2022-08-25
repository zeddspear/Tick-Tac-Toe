
let Dom = (()=>{

// variables
//for displaying message
let player = '';
// for changing player turns

let Playerx = 'x';
let Playery = 'o';



    let player1 = true;

    let gameActive = true;

    let gameboard = ["","","","","","","","",""];
    
// getting elements from Dom
const messageDisplay = document.querySelector('span');
    const cells = document.querySelectorAll('.box');
    
    messageDisplay.innerHTML = `Player with '${Playerx}' turn.`;


// winning combos;
let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];



    cells.forEach(cell =>(cell.addEventListener('click',markappend, {once:true})))

// game starting function on click
function markappend(e){
    
    let clickedsquare = e.target;
    let squareindex = parseInt(clickedsquare.getAttribute('data-index'));

if(gameboard[squareindex] !== "" || gameActive == false){
    return;
}

    if (player1 == true )
    {
        clickedsquare.innerHTML = Playerx.toUpperCase();
        messageDisplay.innerHTML = `Player with '${Playery}' turn.`;
        player1 = false;
    }else{
        clickedsquare.innerHTML = Playery.toUpperCase();
        messageDisplay.innerHTML = `Player with '${Playerx}' turn.`;
        player1 = true;
    };

     player = clickedsquare.innerHTML;
     
    

    gamehandle(squareindex);
    resultHandle();
    }

    

// appending values into array gameboard.
    function gamehandle(squareclickin){
        if(player1 == false){
        gameboard[squareclickin] = Playerx.toUpperCase();
        }
        else{
            gameboard[squareclickin] = Playery.toUpperCase();
        }
        
    }


    // gamecode for gamecombo
    function resultHandle(){
        let gamewon = false;
        for(let i=0;i<=7;i++){
        let a = gameboard[winningCombos[i][0]];
        let b = gameboard[winningCombos[i][1]];
        let c = gameboard[winningCombos[i][2]];

            if(!a || !b || !c){
                continue;
            }

            if(a == b && b == c){
                gamewon = true;
                break;
            }
        }

        if(gamewon){
            messageDisplay.innerHTML = `'${player}' Wins.`
            gameActive = false;
            return;
        };

        let tiegame = !gameboard.includes("");

        if(tiegame){
            messageDisplay.innerHTML = "It is a Tie."
            gameActive = false;
            return;
        }

    }
// ******************* this is prompt way to get alphabet as signs but have some issues will solve it later.

// Player character select function
   /* function characterchoice(){
      
        Playerx = prompt('Player 1 Please! Enter Your Playing Alphabet:');
        Playery = prompt('Player 2 Please! Enter Your Playing Alphabet:');
        
         Playerx.toUpperCase();
        Playery.toUpperCase();

        const P1 = Array.from(Playerx);
        const P2 = Array.from(Playery);

        if(Playerx == null || Playerx == "" || Playery == null || Playery == ""){
            alert("You must Enter a playing Alphabet !");
            characterchoice();
        }else if (!/^[a-zA-Z]+$/.test(Playerx) || !/^[a-zA-Z]+$/.test(Playery)){
            alert("You must Enter only an Alphabet!");
            characterchoice();
        };
        if(Playerx == Playery && P1[0] == P2[0]){
            alert("You must Enter Different Playing Alphabet From Player 1 !");
            characterchoice();
        }
        
       

    messageDisplay.innerHTML = `Player with '${P1[0]}' turn.`;

     return Playerx=P1[0] ,Playery=P2[0];
    }*/

    function reset(){
        window.location.reload();
    }


    return{reset};

})();





const resetbtn = document.querySelector('.restartbtn').addEventListener('click',Dom.reset);










