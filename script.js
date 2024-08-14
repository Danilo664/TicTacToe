let playerX = 0;
let playerO = 0;

let slots = document.querySelectorAll(".theSlot");//selects all slots
let sign = "none";

const theModal = document.getElementById("pickStartingSign");
theModal.showModal()

const choiceX = document.getElementById("choiceX").addEventListener("click", ()=>{
    sign = "X";
    theModal.close()
})
const choiceO = document.getElementById("choiceO").addEventListener("click", ()=>{
    sign = "O";
    theModal.close()
})

let match = 0;
let turn=0;

let slot1 = document.getElementById("slotNumberOne").innerHTML;
let slot2 = document.getElementById("slotNumberTwo").innerHTML;
let slot3 = document.getElementById("slotNumberThree").innerHTML;
let slot4 = document.getElementById("slotNumberFour").innerHTML;
let slot5 = document.getElementById("slotNumberFive").innerHTML;
let slot6 = document.getElementById("slotNumberSix").innerHTML;
let slot7 = document.getElementById("slotNumberSeven").innerHTML;
let slot8 = document.getElementById("slotNumberEight").innerHTML;
let slot9 = document.getElementById("slotNumberNine").innerHTML; //specifically links slots to specific variables

slots.forEach(slot => {
    slot.addEventListener("mousedown", event => {
        changeSign(event.target);
        slot1 = document.getElementById("slotNumberOne").innerHTML;
        slot2 = document.getElementById("slotNumberTwo").innerHTML;
        slot3 = document.getElementById("slotNumberThree").innerHTML;
        slot4 = document.getElementById("slotNumberFour").innerHTML;
        slot5 = document.getElementById("slotNumberFive").innerHTML;
        slot6 = document.getElementById("slotNumberSix").innerHTML;
        slot7 = document.getElementById("slotNumberSeven").innerHTML;
        slot8 = document.getElementById("slotNumberEight").innerHTML;
        slot9 = document.getElementById("slotNumberNine").innerHTML;
        if(turn===9){
            alert("No victors this time!")
            resetTheMatch();
        }else{
            rowsCheck();
            columnsCheck();
            anglesCheck();
        }
    });
});

function changeSign(target){
    if(target.innerHTML !== ""){
        alert("You can NOT do that, pick empty space!")
        return 0;
    }
    target.innerHTML = sign;
    if(sign === "O"){
        sign = "X";
        turn++;
    }
    else{
        sign = "O";
        turn++;
    }
}

function rowsCheck(){
    if(slot1 !== "" && slot2 !== "" && slot3 !== ""){
        if(slot1 === slot2 && slot2 === slot3){
            alert("Player "+slot1+" WINS!")
            givePointToTheWiner(slot1);
        }
    }
    if(slot4 !== "" && slot5 !== "" && slot6 !== ""){
        if(slot4 === slot5 && slot5 === slot6){
            alert("Player "+slot4+" WINS!")
            givePointToTheWiner(slot4);
        }
    }
    if(slot7 !== "" && slot8 !== "" && slot9 !== ""){
        if(slot7 === slot8 && slot8 === slot9){
            alert("Player "+slot7+" WINS!")
            givePointToTheWiner(slot7);
        }
    }
}
function columnsCheck(){
    if(slot1 !== "" && slot4 !== "" && slot7 !== ""){
        if(slot1 === slot4 && slot4 === slot7){
            alert("Player "+slot1+" WINS!")
            givePointToTheWiner(slot1);
        }
    }
    if(slot2 !== "" && slot5 !== "" && slot8 !== ""){
        if(slot2 === slot5 && slot5 === slot8){
            alert("Player "+slot2+" WINS!")
            givePointToTheWiner(slot2);
        }
    }
    if(slot3 !== "" && slot6 !== "" && slot9 !== ""){
        if(slot3 === slot6 && slot6 === slot9){
            alert("Player "+slot3+" WINS!")
            givePointToTheWiner(slot3);
        }
    }
}
function anglesCheck(){
    if(slot1 !== "" && slot5 !== "" && slot9 !== ""){
        if(slot1 === slot5 && slot5 === slot9){
            alert("Player "+slot1+" WINS!")
            givePointToTheWiner(slot1);
        }
    }
    if(slot7 !== "" && slot5 !== "" && slot3 !== ""){
        if(slot7 === slot5 && slot5 === slot3){
            alert("Player "+slot7+" WINS!")
            givePointToTheWiner(slot7);
        }
    }
}

function givePointToTheWiner(slotSign){
    if(slotSign === "X"){
        playerX++;
        document.getElementById('playerXPoints').innerHTML=playerX;
    }
    else{
        playerO++;
        document.getElementById('playerOPoints').innerHTML=playerO;
    }
    resetTheMatch();
}

function resetTheMatch(){
    document.getElementById("slotNumberOne").innerHTML = "";
    document.getElementById("slotNumberTwo").innerHTML = "";
    document.getElementById("slotNumberThree").innerHTML = "";
    document.getElementById("slotNumberFour").innerHTML = "";
    document.getElementById("slotNumberFive").innerHTML = "";
    document.getElementById("slotNumberSix").innerHTML = "";
    document.getElementById("slotNumberSeven").innerHTML = "";
    document.getElementById("slotNumberEight").innerHTML = "";
    document.getElementById("slotNumberNine").innerHTML = "";
    match++;
    turn = 0;
    gameOver();
}

function gameOver(){
    if(match===5){
        if(playerO>playerX){
            alert("Winner is player O")
            restartGame()
        }
        if(playerO===playerX){
            alert("DRAW!")
            restartGame()
        }
        else{
            alert("Winner is player X")
            restartGame()
        }
    }
    if(playerO===3){
        alert("Player O is victorious!")
        restartGame()
    }
    else if(playerX===3){
        alert("Player X is victorious!")
        restartGame()
    }
}
function restartGame(){
    match=0;
    playerO=0;
    playerX=0;
    document.getElementById('playerXPoints').innerHTML=playerX;
    document.getElementById('playerOPoints').innerHTML=playerO;
    theModal.showModal()
}
