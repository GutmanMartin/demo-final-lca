
function getSin(x, gain = 50) {
    // recieves an x and a gain, returns sin(x) * gain
    // gain is direct, higher gain is more saturation
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

function returnEnvelope(x, p, total = 1) {
    // recieves an array with 4 values and a x value. returns f(x) where f is a function that returns 0 before params[0], raises to 1 between params[0] and params[1], 1 between params[1] and params[2], falls till params[3] and 0 afterwards
    // total is there to work with proportions. You can send a Plasma.width, for example, to return in proportions to that width. Leave blanck to work with absolute pixels
    // for example: returnEnvelope(x, [0.0, 0.1, 0.4, 0.5], this.WIDTH)
    //          or: returnEnvelope(x, [0, 40, 100, 110])
    //* hay un bug donde, si p[0] = p[1] entonces f(0) = 0, pero si p[2] = p[3] entonces f(0) =/=nmj  0
    let params = p.map((a) => a * total)
    
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

function surroundChars(str, char, startWrap, endWrap) {
   // Escape regex metacharacters in the target character
  const escapedChar = char.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  // Regex capturing consecutive runs of that character
  const regex = new RegExp(`(${escapedChar}+)`, "g");

  // Surround each run with the wrappers
  return str.replace(regex, startWrap + "$1" + endWrap);
}