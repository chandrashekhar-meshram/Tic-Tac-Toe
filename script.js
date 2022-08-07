const parent = document.getElementById("parent");

const massage = document.getElementById("massage");

let gameState = ['', '', '', '', '', '', '', '', ''];

let gameActive = true;

let currentPlayer = "X";

const winningCondition = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

massage.innerHTML = `Current Player : ${currentPlayer}`;



// creat 9 box
for(let i = 0; i < 9; i++){
    //gameState.push(""); 
    const box = document.createElement("div");
    box.classList.add("box"); // adding class to created div
    box.setAttribute("id", i); // give id
    parent.appendChild(box);
} 


// Check game won or not
const isWon = () => {
    let result = false;
    for(let i = 0; i < winningCondition.length; i++){
        let codition = winningCondition[i];

        let a = gameState[codition[0]];
        let b = gameState[codition[1]]
        let c = gameState[codition[2]]

        if(a === "" || b === "" || c === ""){
            continue;
        }       
        
        if(a == b && b == c){
        gameActive = false;
        result = true;
       }
    }
    return result;
}


// handling action on click of box
const handleClickEvent = (e) => {

    // If box is empty do the following things
    if(! e.target.innerText && gameActive){

        // insert current player name
        e.target.innerText = currentPlayer;
        
       // give color to players
        e.target.style.color = currentPlayer === "X" ? "red" : "green";

        // update array with current player name
        gameState[e.target.id] = currentPlayer;


        if(isWon()){
            massage.innerHTML = `Player : ${currentPlayer} won`;
        } else {
            currentPlayer = currentPlayer === "X" ? "0" : "X"; // toggle / change current player

            massage.innerHTML = `Current Player : ${currentPlayer}`;
        }
     


        

    } 
     
}     

/*
const handleClickEvent = (e) => {
   // console.log("Hey " + e.target.id);  
    e.target.innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    e.target.style.color = currentPlayer === "X" ? "red" : "green";   
}
*/

// Adding event listner to all the box
document.querySelectorAll(".box").forEach((element) => {
    element.addEventListener("click", handleClickEvent);
})