addEventListener("load", function () {

//set javascript variable names to the css ids for the container, main ticker and clone ticker divs
const tickerContainer = document.getElementById("tickerContainer");
const tickerMain = document.getElementById("tickerMain");
const tickerClone = document.getElementById("tickerClone");
//----------------------------------------------------------------------//
//get the length of the divs (in pixels) and assign them to javascript variables
const mainLength = tickerMain.offsetWidth;
const cloneLength = tickerClone.offsetWidth;
const containerLength = tickerContainer.offsetWidth;
console.log(cloneLength);
//----------------------------------------------------------------------//
// create a starting position variable for the main ticker relative to the width of the container
let posMain = 0;
//----------------------------------------------------------------------//
// create a staring position variable for the clone ticker relative to the width of the container + the length of the main container so that it is behind it
let posClone = mainLength;
//----------------------------------------------------------------------//
//call the setInterval method which calls the function moveText and sets the speed to 5 (milliseconds). Lower numbers are faster
setInterval(moveText,12);
//----------------------------------------------------------------------//
//display the clone which is hidden before the page loads

//----------------------------------------------------------------------//
//the moveText function that returns the position of the text every 5 milliseconds (depending on the speed set in the setInterval method above)
function moveText() {
  //if adding the value of the position of the main ticker + the it's length is greater than 0 then decrease the variable used to work out it's position by 1. Set the main tickers x position to the new value.
  if (posMain + mainLength > 0) {
    posMain--;
    tickerMain.style.left = posMain + "px";
    //if the position and it's length is not greater than 0 then it must be offscreen so set the value that we use to work out it's position to be where the clone's position is + the length of the clone object - this equals the end of the clone
  } else {
    posMain = posClone + cloneLength;
  }
  //do the same fot the clone object
  if (posClone + cloneLength > 0) {
    posClone--;
    tickerClone.style.left = posClone + "px";
  } else {
    posClone = posMain + mainLength;
  }
}

var vid = document.getElementById("myVideo");
vid.play(); 
});
//Note: if the ticker is shorter than half the container add more clones.

