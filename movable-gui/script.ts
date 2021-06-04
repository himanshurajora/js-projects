const object: any = document.getElementById("object") as HTMLElement
const boxes: NodeList = document.querySelectorAll(".box")

function dragOver(e: MouseEvent) {
    e.preventDefault();
}
function dragEnter(e:MouseEvent) {
    (e.target as HTMLElement).classList.add("over");


}

function dragLeave(e:MouseEvent) {
    (e.target as HTMLElement).classList.remove("over");
}

function dragDrop(e:MouseEvent) {
    console.log(e.srcElement)
    } 

boxes.forEach(el => {
    el.addEventListener("dragover", dragOver);
    el.addEventListener("dragleave", dragLeave);
    el.addEventListener("dragenter", dragEnter);
    el.addEventListener("drop", dragDrop);
})


const dragStart = () => {
    setTimeout(() => {
        object.className = 'invisible';
    }, 0);
}

const dragEnd = () => {
    setTimeout(() => {
        object.className = 'visible';
    }, 0);
}


object.addEventListener("dragstart", dragStart);
object.addEventListener("dragend", dragEnd);


