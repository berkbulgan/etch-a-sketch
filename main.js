const container = document.querySelector(".grid-container");
const drawBtn = document.querySelector("#drawBtn");
let gridBoxes = document.querySelectorAll(".grid-item")

function drawGrid(size){
    console.log(size);
    const boxes = [];
    let dimension = 960/size;
    container.replaceChildren();
    for (let i = 0; i<size**2; i++){
        boxes.push(document.createElement("div"));
        boxes[i].classList.add("grid-item");
        boxes[i].setAttribute("style", `width: ${dimension}px; height: ${dimension}px;`);
        boxes[i].setAttribute("id", i);
        container.appendChild(boxes[i]);
    }
}
function updateNodes(){
    gridBoxes = document.querySelectorAll(".grid-item");
    gridBoxes.forEach(box => box.addEventListener("click", paintBox));

}
function paintBox(e){
    this.style.backgroundColor = selectColor.value;
}

const selectSize = document.querySelector("#selectSize");
const selectColor = document.querySelector("#selectColor");
drawBtn.addEventListener("click", function(){
    drawGrid(selectSize.value);
    updateNodes()});
    


