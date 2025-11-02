const defaultColor = [".", ",", "-", "+", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const numberColor = "123456789"


const update1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                let a = getSin(x + y) 
                this.plasma[y][x] = returnColor(a)
            }
        }
}

const update2 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                let a = getSin(x) /4
                let b = getSin(y) /4
                this.plasma[y][x] = returnColor(a+b)
            }
        }
}

const domBody = document.querySelector("body")
const column1 = document.querySelector(".column1")
const column2 = document.querySelector(".column2")



const cuadros = [
    new Plasma(80, 40, numberColor, update1, column1, ["red",]),
    new Plasma(32, 16, numberColor, update2, column2, ["blue", "big"])

]


function update() {
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


