class Plasma {
    constructor(w, h, c, upd, container) {

        this.plasma = []
        this.pLines = []
        this.WIDTH = w
        this.HEIGHT = h
        this.update = upd
        this.color = c
    
        for (let y = 0; y < this.HEIGHT; y++) {
            this.plasma.push([])
            for (let x = 0; x < this.HEIGHT; x++) {
                this.plasma[y].push(0)
            }
            const p = document.createElement("p")
            p.classList.add("pLine")
            container.appendChild(p)
            this.pLines.push(p)
        }
    }

    draw() {
        for (let y = 0; y < this.HEIGHT; y++) {
            let line = ""
            for (let x = 0; x < this.WIDTH; x++) {
                line += this.plasma[y][x]
            }
            this.pLines[y].textContent = line
        }
    }
}