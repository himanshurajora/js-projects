"use strict";
const object = document.getElementById("object");
const boxes = document.querySelectorAll(".box");
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.target.classList.add("over");
}
function dragLeave(e) {
    e.target.classList.remove("over");
}
function dragDrop(e) {
    console.log(e.srcElement);
}
boxes.forEach(el => {
    el.addEventListener("dragover", dragOver);
    el.addEventListener("dragleave", dragLeave);
    el.addEventListener("dragenter", dragEnter);
    el.addEventListener("drop", dragDrop);
});
const dragStart = () => {
    setTimeout(() => {
        object.className = 'invisible';
    }, 0);
};
const dragEnd = () => {
    setTimeout(() => {
        object.className = 'visible';
    }, 0);
};
object.addEventListener("dragstart", dragStart);
object.addEventListener("dragend", dragEnd);
//# sourceMappingURL=script.js.map