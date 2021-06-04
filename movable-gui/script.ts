const object: any = document.getElementById("object") as HTMLElement
const boxes:NodeList = document.querySelectorAll(".box") 

function dragOver(e:MouseEvent){
    (e.target as HTMLElement).classList.add("over");
    
}
function dragEnter(e){
    console.log("enter");

}

function dragLeave(e){
    console.log("leave");
    (e.target as HTMLElement).classList.remove("over");

}

function dragDrop(e){
    console.log("drop");

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


