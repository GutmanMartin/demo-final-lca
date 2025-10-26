const update4 = function () {
    // nice patterns, but lacks getColor, so it returns gibberish and overflows
    const w = this.WIDTH
    for (let y = 0; y < this.HEIGHT; y++) {
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                + y/8 
            ) 

            let b = 10

            

            this.plasma[y][x] = Math.floor(
                returnEnvelope([0, 20, 40, 50], x) * a
               // + returnEnvelope()
            )


        }
    }
}