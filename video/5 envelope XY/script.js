const defaultColor = [".", ",", "-", "+", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const numberColor = "123456789"


const update1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                let a = getSin(y*5 - 20,16)
                let b = getSin((x-y),16)

                let envelope1 = [0, 0, 30, 40]
                let envelope2 = [30, 40, 80, 80]
                
                let c = (
                      a * returnEnvelope(x, envelope1) * returnEnvelope(y, envelope2)
                    + b * returnEnvelope(y, envelope1) * returnEnvelope(x, envelope2)
                )
                this.plasma[y][x] = returnColor(c)
                
            }
        }
}

const domBody = document.querySelector("body")
const column1 = document.querySelector(".column1")



const cuadros = [
    new Plasma(80, 60, numberColor, update1, column1, ["red",])
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
/*setInterval(() => {
    update()
    draw()

}, 200)
*/

