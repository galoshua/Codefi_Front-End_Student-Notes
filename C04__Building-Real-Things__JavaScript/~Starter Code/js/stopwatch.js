// * ========== HTML Element Selectors ========== * \\
const startButton =document.querySelector("[data-action='start']");
const stopButton =document.querySelector("[data-action='stop']");
const resetButton =document.querySelector("[data-action='reset']");
const minutesDisplay=  document.querySelector(".minutes");
const secondsDisplay=  document.querySelector(".seconds");




let currTime=0;
let isRunning=false;
let timerInterval;
// * ========== Function Declarations ========== * \\
// FUNCTION:
function startTimer(){
if(isRunning) return;

isRunning=true

    setInterval(()=>{
    currTime++;
    const {minutes,seconds}=getFormattedTime()
})
}
function stopTimer(){
if(!isRunning)return;
isRunning=false;
clearInterval
}
function resetTimer(){

}
// * ========== Event Listeners ========== * \\
// EVENT LISTENER:
startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
startButton.addEventListener("click",resetTimer);