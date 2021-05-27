function readToggle(event) {
    var button = event.srcElement;
    button.innerText = button.innerText == "Read more" ? "Read less" : "Read more";
    button.parentElement.firstElementChild.firstElementChild.innerText = button.parentElement.firstElementChild.firstElementChild.innerText == "..." ? " " : "...";
    button.parentElement.firstElementChild.lastChild.style.display = button.parentElement.firstElementChild.lastChild.style.display == "inline" ? "none" : "inline";
    "inline"
}