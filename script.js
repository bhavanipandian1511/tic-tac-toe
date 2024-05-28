const box = document.querySelectorAll('.box');
const statustxt = document.getElementById('#status');
const btnRestart = document.querySelector('#resart');
let x="<img src ='C:\Users\Bhavani\Desktop\Study\java_script_recap\tic-tac-toe\image\images X.png'>";
let o="<img src ='C:\Users\Bhavani\Desktop\Study\java_script_recap\tic-tac-toe\image\image o.jpg'>";

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
let currentPlayer=x;
let player="X";
let isGameActive=false;
init();
function init(){
box.forEach(box=>box.addEventListener('click',boxClick));
btnRestart.addEventListener('click',restartGame);
statustxt.textcontent=`${player} Your Turn`;
isGameActive=true;
}

function boxClick(){
   const index=this.dataset.index;
   if(options[index]!="" ||!isGameActive){
    return;
}
UpdateBox(this,index);
}

function UpdateBox(box,index){
    options[index]=player;
    box.innerHTML=currentPlayer;

}

function changePlayer(){

}

function checkWinner(){

}

function restartGame(){

}