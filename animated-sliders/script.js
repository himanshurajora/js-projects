
/**
 * Function to play progress bar animation
 */

function load(){
    var progressbar = document.getElementById("bar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame(){
        if(width >= 100){
            clearInterval(id);
            progressbar.innerHTML = "Full! 👍🏽";
        }
        else if(width > 40){
            width++;
            progressbar.innerHTML = width;
            progressbar.style.width = width + "%";
        }
        else{
            width++;
            progressbar.innerHTML = width;
            progressbar.style.width = width + "%";
        }
    }
}