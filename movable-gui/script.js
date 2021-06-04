
var mouseDown;

document.addEventListener("mousedown", ()=>{
    mouseDown = true;
})

document.addEventListener("mouseup", ()=>{
    mouseDown = false;
})

document.addEventListener("mousemove", (e)=>{
   if(mouseDown) {console.log(e.clientX, e.clientY)}
})

