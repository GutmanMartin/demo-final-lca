class Plasma {
    constructor(w, h, c, upd, container, classes = []) {

        this.plasma = []
        this.pLines = []
        this.WIDTH = w
        this.HEIGHT = h
        this.update = upd
        this.color = c
    
        for (let y = 0; y < this.HEIGHT; y++) {
            this.plasma.push("")
            
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
            this.pLines[y].innerHTML = this.plasma[y]
        }
    }
}