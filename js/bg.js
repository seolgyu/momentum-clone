const body = document.querySelector("body");

const IMG_NUMBER = 6;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
   
}

function genRendom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRendom();
    paintImage(randomNumber)
}

init();