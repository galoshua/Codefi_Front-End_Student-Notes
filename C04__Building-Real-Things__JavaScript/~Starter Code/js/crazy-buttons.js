// * ========== HTML Element Selectors ========== * \\
const crazyButton = document.querySelector(".crazy-button");
// * ========== Function Declarations ========== * \\
// gets a random posititon 
function goBtnWild(){
const offsetTop= Math.random()*(window.innerHeight-crazyButton.clientHeight);
const offsetLeft= MAth.random()*(window.innerWidth-crazyButton.clientWidth);

crazyButton.style.top=`${offsetTop}px`;
crazyButton.style.left=`${offseetLeft}px`;
}
// * ========== Event Listeners ========== * \\
// EVENT LISTENER: listens for the mouse to hover and calls my function
crazyButton.addEventListener("mouseenter",goBtnWild);