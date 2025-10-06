const plasma = []
//const pLines = document.querySelectorAll(".pLine")
const pLines = []

const domBody = document.querySelector("body")

let t = 0

const WIDTH = 20
const HEIGTH = 20



for (let y = 0; y < HEIGTH; y++) {
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
    for (let y = 0; y < HEIGTH; y++) {
        for (let x = 0; x < WIDTH; x++) {
            plasma[y][x] = getSin(
                x/16
                + y/8 
                + t / 10
                + getSin(x/50)
                - getSin(y/20 + t/100)
            ) % 10

        }
    }
}

function draw() {
    for (let y = 0; y < HEIGTH; y++) {
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
    return Math.floor((Math.sin(x) +1) * 5)
}

