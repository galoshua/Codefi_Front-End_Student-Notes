// * Inline HTML * \\

// * JavaScript button onclick properties * \\
// const multipleBtns = document.querySelectorAll('.btn_onClick');
// multipleBtns.forEach((button)=>{
//     button.onClick=function(){
//         document.body.style.backgroundColor
//     }
// })
// * JavaScript Event listener * \\
const buttonFive = document.querySelector(".btn_event-listener");

function changeColor(){
    const randomColor= Math.floor(math.random()*16777215).toString(16);
    document.body.style.backgroundColor=`#${randomColor}`;
}
buttonFive.addEventListener("click",changColor)