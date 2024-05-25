const box = document.querySelectorAll('.box');
const statustxt = document.getElementById('#status');
const btnRestart = document.querySelector('#resart');
let x="<img src ='.\images X.png'>";
let o="<img src ='.\image o.jpg'>";

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options=["","","","","","","","",""];
let currentPlayer = x;
let player="X";
let isGameActive = false;
init();
function init(){
box.forEach(box=>box.addEventListener('click',boxClick));
btnRestart.addEventListener('click',restartGame);
statustxt.textcontent=`${player} Your Turn`;
isGameActive=true;
}

function boxClick(){
    console.log(this.dataset.index);

}

function updateBox(box,index){

}

function changePlayer(){

}

function checkWinner(){

}

function restartGame(){

}