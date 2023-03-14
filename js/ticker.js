var canvasDiv;
var width;
let tItems = ['Confidential brand innovation project', '6 month experience design project advising the development of a large scale transformation project', 'Defining how digital technology creates opportunities for an enhanced future visitor experience',''];//always keep an empty string at the end to allow for a space to be added to the end
let spacer = '      ';
let tickerString,tickerString2;
let counter=0;

function setup() {
    canvasDiv = document.getElementById('ticker');
    width = canvasDiv.offsetWidth;
    var sketchCanvas = createCanvas(width, 48);
    sketchCanvas.parent("ticker");
    textAlign(LEFT, CENTER);
    textSize(16);
    fill(255);
    noStroke();
    tickerString = join(tItems, spacer);
    tickerString2 = tickerString;
}
function draw() {
    background(0);
    text(tickerString, 0-counter, 24); // item 1
  
    let sWidth = textWidth(tickerString);
    text(tickerString2, sWidth-counter, 24); // item 2
    stroke(100);
    line(sWidth-counter, 0, sWidth-counter, 100);
    if (counter > sWidth) {
        counter = 0;
    } else {
        counter++;
    }
}


//resize window
function windowResized() {
    resizeCanvas(width, 48);
}


//------character width example
// let aString = 'p5.js';
// let sWidth = textWidth(aString);
// text(aString, 0, 85);
// line(sWidth, 50, sWidth, 100);