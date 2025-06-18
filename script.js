const boxes = document.querySelectorAll(".child");
const eraserBtn = document.getElementById("eraser-button");
const input = document.getElementById("my-input");
let isMouseClick=false;
let color = "black";
document.addEventListener("mousedown", MouseDown);
document.addEventListener("mouseup", MouseUp);
function MouseDown(){
    isMouseClick= true;
}

function MouseUp(){
    isMouseClick= false;
}

for (let i = 0; i <= 64; i++) {
  boxes[i].addEventListener("mouseover", changebg);
}

function changebg(event){
    if(isMouseClick){
    event.target.style.backgroundColor = color;
    }
}

function setColor() {
  color = document.getElementById("my-input").value;
}
function eraser(){
    color= "aliceblue"
}