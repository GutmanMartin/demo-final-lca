
function getSin(x, gain = 50) {
    // recieves an x and a gain, returns sin(x) * gain
    return (Math.sin(x) +1) * gain/2
}

function returnColor(x, gain = 50, palette = defaultColor) {
    // gain is inverse, when its smaller it saturates most, when higher it saturates less
    let i = map(x, 0, gain, 0, palette.length) 
    i = Math.floor(i)
    return palette[i % palette.length]
}

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

let a = [10, 20, 30, 40]

function returnEnvelope(p, x) {
    // recieves an array with 4 values and a x value. returns f(x) where f is a function that returns 0 before params[0], raises to 1 between params[0] and params[1], 1 between params[1] and params[2], falls till params[3] and 0 afterwards
    let params = p.map( x => x)
    
    if (x <= params[0]) {
        return 0

    } else if (x < params[1]) {
        const a = params[1] - params[0]
        const b = x - params[0]
        return b/a

    } else if (x <= params[2]) {
        return 1

    } else if (x < params[3]) {
        const a = params[3] - params[2] 
        const b = x - params[2]
        return 1 - b/a

    } else {
        return 0
    }
}