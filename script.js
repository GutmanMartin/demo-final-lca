const defaultColor = [".", ",", "-", "+", "*", "x", "X", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//const colorBig = "-.º*+xX0"
const colorBig = '.,|/_\\'
//const defaultColor = "123456789"

const CUADRICULA_2 = [
     [0, 0.1, 0.4, 0.6], [0.4, 0.6, 0.9, 1], 
]

const update1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
            for (let x = 0; x < this.WIDTH; x++) {
                let a = getSin(
                    x/16
                    + y/8 
                    + t / 100
                   // + getSin(x/50)
                    //- getSin(y/20 + t/100)
                ) 
                let color = returnColor(a, 50)

                this.plasma[y][x] = color
            }
        }
}

const update2 = function () {
    const w = this.WIDTH
    const h = this.HEIGHT
    for (let y = 0; y < h; y++) {
        by = returnEnvelope(y, [0, 0.2, 0.8, 1], h)// * 0.7

        for (let x = 0; x < w; x++) {
            
            let a = getSin((x-20)/5 * (y/5 + t/500) )            




            const color = returnColor(
                a   * returnEnvelope(x, [0, 0.2, 0.8, 1], w)
                    * by


                , 40
            )

            

            this.plasma[y][x] = color

        }
    }
}

const update3 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
 //               x/16
                + y/8 
                + t / 10
            ) 

            let b = 10
            let mix = x / this.WIDTH

            let color = returnColor(a, 50)

            this.plasma[y][x] = color
        }
    }
}

const update4 = function () {
    const w = this.WIDTH
    for (let y = 0; y < this.HEIGHT; y++) {
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(y /8,10) / getSin(x / 8 - y/5,10) * getSin(t/1000)

            

        

            const color = returnColor(a, 100)
            this.plasma[y][x] = color
        }
    }
}

const update5 = function () {
    const w = this.WIDTH
    for (let y = 0; y < this.HEIGHT; y++) {
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(y /8) 

            let b = getSin(x /2, 80)

            let d = getSin(y/2.5, 20)

            const c = //returnEnvelope(x, [-100, -40, 195, 1155]) *a
                        returnEnvelope(x, [0, 40, 95, 155]) *a
                        + returnEnvelope(x, [80, 120, 180, 200]) *b
                        //+ returnEnvelope(y, [40, 60, 95, 100]) *d

            const color = returnColor(c, 70)
            this.plasma[y][x] = color
        }
    }
}

const update6 = function () {

    const w = this.WIDTH
    const h = this.HEIGHT

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            let a = getSin(
                    x/40
                        + y/8 
                        + t / 1000
                        + getSin(x/30 + 1.5
                    , 24
                    )
                    //- getSin(y/20 + t/100)
                ) 

            let b = getSin(
                x/8
                + y/8 + t/1000
            )

            let c = x / w * 50 - t / 800

            let d = getSin(
                -x/8
                + y/8 + t/1000
            )
      
            const color = returnColor(
                a   * returnEnvelope(x, [0, 0, 0.4, 0.6], w)
                    * returnEnvelope(y, [0, 0, 0.4, 0.6], h) * 0.7 +

                b   * returnEnvelope(x, [0.4, 0.6, 1, 1], w)
                    * returnEnvelope(y, [0, 0, 0.4, 0.6], h) * 0.5 +

                c   * returnEnvelope(x, [0, 0, 0.7, 0.8], w)
                    * returnEnvelope(y, [0.4, 0.6, 1, 1], h) * 0.95 + 

                d   * returnEnvelope(x, [0.7, 0.8, 1, 1], w)
                    * returnEnvelope(y, [0.4, 0.6, 1, 1], h) * 0.5

                , 40
            )
            //const color = returnColor(d, 40)

            this.plasma[y][x] = color
        }
    
    }
}

const updateBig = function () {
    const w = this.WIDTH
    const h = this.HEIGHT

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            let a = getSin(x/10, 10)

            let b = getSin(y/10, 10)




            const color = returnColor(
                b*a, 50, colorBig
            )
            this.plasma[y][x] = color
        }
    }
}



// TODO: a function that recieves this.color, an x, and a max, and returns the color. Basically remake returnColor

// TODO: think of a way to redefine envelopes. If you are going for the portraits stuff, those envelopes need to be defined on top as constansts, so you can call them on updates. They cant recieve whis.WIDTH, so they must work with fractions of width



const domBody = document.querySelector("body")
const column1 = document.querySelector(".column1")
const column2 = document.querySelector(".column2")
const column3 = document.querySelector(".column3")


let t = 0

const cuadros = [
     new Plasma(200, 60, defaultColor, update2, column1, ["blue",]),
    new Plasma(1000, 300, defaultColor, update4, column2, ["green", "small"]),
    new Plasma(80, 24, colorBig , update1, column3, [, "big"]),
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

update()
draw()
setInterval(() => {
    update()
    draw()

}, 200)


