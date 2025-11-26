const defaultColor = [".", ",", "-", "+", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const numberColor = "123456789"

let t = 0


const update1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                let a = getSin(x / (y+1)+ t/10) * getSin(x/10)/10

                this.plasma[y][x] = returnColor(a, 50)
            }
        }
}

const domBody = document.querySelector("body")
const column1 = document.querySelector(".column1")



const cuadros = [
    new Plasma(80, 40, numberColor, update1, column1, ["red",])
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

update()
draw()
setInterval(() => {
    update()
    draw()

}, 200)


