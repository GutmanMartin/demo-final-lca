let last = performance.now();
const interval = 200; // milisegundos

const defaultColor = [".", ",", "-", "+", "*", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


const colorWithWhites = [" ", " "," "," "," ", ".", ",", "-", "+", "*", "x", "X"]

const palettes = [
  [" ", " "," "," ",".", ":", "-", "=", "+", "*", "#", "%", "@"],

  [" "," ", ".", "’", ":", "~", "*", "=", "o", "O", "0", "#", "@"],
  [" "," ", ".", "’", ":", "~", "*", "=", "o", "O", "0", "#", "@"],

  [" ", ".", "’", ":", "~", "*", "=", "o", "O", "0", "#", "@"],


  [" ", "`", "·", "°", "•", "*", "✶", "✷", "✸", "✹", "✺"],

  [" ", ".", ",", "-", "_", "~", "=", "I", "H", "M", "W", "@"],

  [" ", ".", ":", "|", "!", "/", "\\", "(", ")", "#", "@"],

  [" "," "," ", ".", "^", "*", "+", "x", "X", "%", "$", "#", "@"],

  [" ", ".", "-", "~", "=", "+", "*", "o", "O", "0", "@"],

  [ "░", "▒", "▓", "█"],

  [ ".", "'", "`", "^", "°", "¯", "~", "=", "≡", "≣"],

  [ ".", ":", ".", ":", "*", "8", "&", "%", "#", "@"],

  [" ", ".", ":", "*", "o", "O", "0", "Q", "@"]
];

function randomPalette() {
    return palettes[Math.floor(Math.random() * palettes.length)];
}



const domBody = document.querySelector("body")
const columns = document.querySelectorAll(".container")




let t = 0

const cuadros = [
    // first row
    /*new Plasma(40, 20, defaultColor, linear, columns[0],),
    new Plasma(40, 20, defaultColor, radial, columns[1],),
    new Plasma(40, 20, defaultColor, multiplication, columns[2],),
    new Plasma(40, 20, defaultColor, linearNegative, columns[3],),
    // second row
    new Plasma(40, 20, defaultColor, turning, columns[4],),
    new Plasma(40, 20, defaultColor, turning1, columns[5],),
    new Plasma(40, 20, defaultColor, ellipse, columns[6],),
    new Plasma(40, 20, defaultColor, waves, columns[7],),
    // third row
        //column
    new Plasma(40, 20, defaultColor, romboids, columns[8],),
    new Plasma(40, 20, defaultColor, romboids2, columns[9],),
        // big one
    new Plasma(80, 40, defaultColor, pond, columns[10],),
        //column
    
    new Plasma(40, 20, defaultColor, pond2, columns[11],),
    new Plasma(40, 20, defaultColor, pond, columns[12],),*/

    // first row
    new Plasma(40, 20, colorWithWhites, linear,           columns[0]),
    new Plasma(40, 20, colorWithWhites, radial,           columns[1]),
    new Plasma(40, 20, colorWithWhites, makeRandomUpdate(), columns[2]),
    new Plasma(40, 20, randomPalette(), makeRandomUpdate(), columns[3]),
    // second row
    new Plasma(40, 20, randomPalette(), turning,          columns[4]),
    new Plasma(40, 20, randomPalette(), makeRandomUpdate(), columns[5]),
    new Plasma(40, 20, randomPalette(), ellipse,          columns[6]),
    new Plasma(40, 20, randomPalette(), makeRandomUpdate(), columns[7]),
    // third row
    new Plasma(40, 20, randomPalette(), romboids,         columns[8]),
    new Plasma(40, 20, randomPalette(), romboids2,        columns[9]),
    // big one
    new Plasma(80, 40, defaultColor, makeRandomUpdate(), columns[10]),
    // column
    new Plasma(40, 20, defaultColor, pond2,            columns[11]),
    new Plasma(40, 20, defaultColor, makeRandomUpdate(), columns[12]),
];



function update() {
    t++
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].update();
        cuadros[i].draw();
    }
}




function tick(now) {
  const dt = now - last;

  if (dt >= interval) {
    last = now - (dt % interval);  
    update();
  }

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);