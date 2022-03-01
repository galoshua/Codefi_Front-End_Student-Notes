const colorChangeButton = document.querySelector(".colorChangeButton");

//Function needs to change the background and text color
function randomColors() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=`#${randomColor}`
    document.body.style.text
}