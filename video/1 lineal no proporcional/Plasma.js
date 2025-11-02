class Plasma {
    constructor(w, h, upd, container, classes = []) {

        this.plasma = []
        this.pLines = []
        this.WIDTH = w
        this.HEIGHT = h
        this.update = upd
    
        for (let y = 0; y < this.HEIGHT; y++) {
            this.plasma.push([])
            for (let x = 0; x < this.HEIGHT; x++) {
                this.plasma[y].push(0)
            }
            const p = document.createElement("p")
            p.classList.add("pLine")
            for (let i = 0; i < classes.length; i++) {
                p.classList.add(classes[i]);
                
            }
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