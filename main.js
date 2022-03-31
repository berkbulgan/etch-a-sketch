const container = document.querySelector(".grid-container");
const drawBtn = document.querySelector("#drawBtn");


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

function paintBox(e){
    this.style.backgroundColor = selectColor.value;
}

const selectSize = document.querySelector("#selectSize");
const selectColor = document.querySelector("#selectColor");
const gridBoxes = document.querySelectorAll(".grid-item");
drawBtn.addEventListener('click', drawGrid(selectSize.value));
//gridBoxes.forEach(key => box.addEventListener('transitionend', removeHover));
//gridBoxes.forEach(box => box.addEventListener('onhover', addHover));
gridBoxes.forEach(box => box.addEventListener('click', paintBox));


