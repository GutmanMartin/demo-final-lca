const color = [".", ",", "-", "+", "*", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]


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

const update3 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
 //               x/16
                + y/8 
            ) 

            let b = 10
            let mix = x / this.WIDTH

            let c = Math.floor(
                map((a * mix + 39 * (1-mix)),
                    0, 40, 0, this.color.length
                )
            )
            console.log(c)
            this.plasma[y][x] = this.color[c]
        }
    }
}




const domBody = document.querySelector("body")
const column1 = document.querySelector(".column1")
const column2 = document.querySelector(".column2")
const column3 = document.querySelector(".column3")


let t = 0

const cuadros = [
    new Plasma(200, 100, color, update1, column1, ["green", "small"]),
    new Plasma(200, 100, color, update1, column2, ["blue",]),
    new Plasma(80, 40, "-.º*+xX0" , update3, column3, ["red", "big"]),
    //new Plasma(80, 40, "-.º*+xX0" , update3, column2, ["red",])
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

}, 2000)



function getSin(x) {
    return Math.floor((Math.sin(x) +1) * color.length/2)
}

function returnColor(n) {
    return color[map(n, 0, 255, 0, color.length)]
}

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
