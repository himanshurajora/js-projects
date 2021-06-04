import e from "cors"

const object: any = document.getElementById("object") as HTMLElement
const boxes:NodeList = document.querySelectorAll(".box") 

function dragOver(){

}
function dragEnter(){

}

function dragLeave(){

}

function dragDrop(){

}

boxes.forEach(el=>{
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


