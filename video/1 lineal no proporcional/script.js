const update1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                
                this.plasma[y][x] = y%10
            }
        }
}

const domBody = document.querySelector("body")
const container = document.querySelector(".container")



const cuadros = [
    new Plasma(50, 20, update1, container, ["red",])
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


