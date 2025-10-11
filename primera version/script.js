const color = [".", ",", "-", "+", "*", "<", ">", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

const plasma = []
//const pLines = document.querySelectorAll(".pLine")
const pLines = []

const domBody = document.querySelector("body")

let t = 0

const WIDTH = 20
const HEIGHT = 20



for (let y = 0; y < HEIGHT; y++) {
    plasma.push([])
    for (let x = 0; x < WIDTH; x++) {
        plasma[y].push(0)
    }
    const p = document.createElement("p")
    p.classList.add("pLine")
    domBody.appendChild(p)
    pLines.push(p)
}


function update() {
    t++
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            let a = getSin(
                x/16
                + y/8 
                + t / 10ED C
                //+ getSin(x/50)
                //- getSin(y/20 + t/100)
            ) 
            plasma[y][x] = color[a]

        }
    }
}

function draw() {
    for (let y = 0; y < HEIGHT; y++) {
        let line = ""
        for (let x = 0; x < WIDTH; x++) {
            line += plasma[y][x]
        }
        pLines[y].textContent = line
    }
}

setInterval(() => {
    update()
    draw()

}, 200)



function getSin(x) {
    return Math.floor((Math.sin(x) +1) * color.length/2)
}

function returnColor(n) {
    return color[map(n, 0, 255, 0, color.length)]
}

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
