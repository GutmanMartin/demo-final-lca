const linear = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/16
                + y/8 
                + t / 20
            ) 
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}


const radial = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/16
                / (y+1) 
                + t / 20
            ) 
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const multiplication = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/50
                * (y/5) 
                + t / 20
            ) 
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const linearNegative = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/16
                - y/8 
                + t / 20
            ) * getSin(t/10, 1)

            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const turning = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/16 
                + t / 200
                *getSin(y/50)
            ) 
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const turning1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                (x + t + 60)/200
                
                *getSin(y/80 * x/-50)
                +t / 20
                
            ) 
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const ellipse = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/10 + t/200
                
                *getSin(y/10 + t/200)
            ) 
            
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const waves = function () {
    const w = this.WIDTH
    const h = this.HEIGHT
    for (let y = 0; y < h; y++) {
    let line = ""
        for (let x = 0; x < w; x++) {
            let b =  getSin(t/10, 1) / 30 - 1/60
            let a = getSin(
                (x)/20 + b
                
                *getSin(y/2 + b)
                 /*+ t / 20
*/            ) 
            
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const romboids = function () {
    let b =  getSin(t/6, 1) - 1/60
    const w = this.WIDTH
    const h = this.HEIGHT
    for (let y = 0; y < h; y++) {
    let line = ""
        for (let x = 0; x < w; x++) {
            let b = getSin(t/200, 2) / 30
            let a = getSin(
                (x)/2
                 + t / 2000
                , 20
            ) + getSin(y, 20) * getSin(x/100/b, 1)
            
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const romboids2 = function () {
    const w = this.WIDTH
    const h = this.HEIGHT
    let b =  getSin(t/6, 1) - 1/60
    for (let y = 0; y < h; y++) {
    let line = ""
        for (let x = 0; x < w; x++) {
            let b = getSin(t/200, 2) / 30
            let a = getSin(
                (x+y/10+ b*50)/2.5
                 
                , 20
            ) + getSin(y/2 + x/10, 20) 
            
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const pond = function () {
    const w = this.WIDTH
    const h = this.HEIGHT
    for (let y = 0; y < h; y++) {
    let line = ""
        for (let x = 0; x < w; x++) {
            let b = getSin(t/200, 2) / 30
            let a = getSin(
                x / 100
                 + t / 2000
                , 20
            ) * getSin(y/20, 20)
            
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const pond2 = function () {
    const w = this.WIDTH
    const h = this.HEIGHT
    for (let y = 0; y < h; y++) {
    let line = ""
        for (let x = 0; x < w; x++) {
            let b = getSin(t/200, 2) / 30
            let a = getSin(
                x / 100
                 
                , 20
            ) * getSin(y/10 + 1 + t / 200, 20)
            
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}

const biggerTurning1 = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/(4- t / 30)
                + t / (20-t/200)
                
                *getSin(y/(50+t/100),10)
            ) 

            a = a || 5;

            
            let color = returnColor(a, 50)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}