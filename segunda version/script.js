class Plasma {
    constructor(w, h, c, upd, container) {

        this.plasma = []
        this.pLines = []
        this.WIDTH = w
        this.HEIGHT = h
        this.update = upd
        this.color = c
    
        for (let y = 0; y < this.HEIGHT; y++) {
            this.plasma.push([])
            for (let x = 0; x < this.HEIGHT; x++) {
                this.plasma[y].push(0)
            }
            const p = document.createElement("p")
            p.classList.add("pLine")
            container.appendChild(p)
            this.pLines.push(p)
        }
    }

    draw() {
        for (let y = 0; y < this.HEIGHT; y++) {
            let line = ""
            for (let x = 0; x < this.WIDTH; x++) {
                line += this.plasma[y][x]
            }
            this.pLines[y].textContent = line
        }
    }

}


const color = [".", ",", "-", "+", "*", "<", ">", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]


const update1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                let a = getSin(
                    x/16
                    + y/8 
                    + t / 10
                    //+ getSin(x/50)
                    //- getSin(y/20 + t/100)
                ) 
                this.plasma[y][x] = this.color[a]

            }
        }
}

const update2 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                let a = getSin(
                    x/16
                    + y/8 
                    + t / 10
                    + getSin(x/50)
                    //- getSin(y/20 + t/100)
                ) 
                this.plasma[y][x] = this.color[a]

            }
        }
}


//const pLines = document.querySelectorAll(".pLine")

const domBody = document.querySelector("body")

const column1 = document.querySelector(".column1")
const column2 = document.querySelector(".column2")


let t = 0

const cuadros = [
    new Plasma(20, 20, color, update1, column1),
    new Plasma(40, 30, color, update2, column2)
]


function update() {
    t++
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].update();
        
    }
    
    
}

function draw() {
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].draw();
        
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
