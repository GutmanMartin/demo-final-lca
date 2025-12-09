const linear = function () {
    for (let y = 0; y < this.HEIGHT; y++) {
    let line = ""
        for (let x = 0; x < this.WIDTH; x++) {
            let a = getSin(
                x/16
                + y/8 
                + t / 20
            ) 
            let color = returnColor(a, 50, this.color)

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
            let color = returnColor(a, 50, this.color)

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
            let color = returnColor(a, 50, this.color)

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

            let color = returnColor(a, 50, this.color)

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
            let color = returnColor(a, 50, this.color)

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
            let color = returnColor(a, 50, this.color)

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
            
            let color = returnColor(a, 50, this.color)

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
            
            let color = returnColor(a, 50, this.color)

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
            
            let color = returnColor(a, 50, this.color)

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
            
            let color = returnColor(a, 50, this.color)

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
            
            let color = returnColor(a, 50, this.color)

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
            
            let color = returnColor(a, 50, this.color)

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

            
            let color = returnColor(a, 50, this.color)

            line = `${line}${color}`
        }
        this.plasma[y] = line
    }
}



// ---------- BLOQUES BÁSICOS DE PATRONES ----------
// Todos reciben (x, y, t, self) y devuelven un número "a" (intensidad)

const patternBlocks = [
  // parecido a linear
  function (x, y, t, self) {
    return getSin(
      x / 16 +
      y / 8 +
      t / 20,
      50
    );
  },

  // lineal solo en x con oscilación en el tiempo
  function (x, y, t, self) {
    return getSin(
      x / 10 +
      getSin(t / 40, 10),
      50
    );
  },

  // lineal solo en y
  function (x, y, t, self) {
    return getSin(
      y / 10 +
      t / 30,
      50
    );
  },

  // radial alrededor del centro, inspirado en "radial"
  function (x, y, t, self) {
    const cx = self.WIDTH / 2;
    const cy = self.HEIGHT / 2;
    const dx = x - cx;
    const dy = y - cy;
    const r = Math.sqrt(dx * dx + dy * dy);
    return getSin(
      r / 4 +
      t / 25,
      50
    );
  },

  // tipo “ondas diagonales”
  function (x, y, t, self) {
    return getSin(
      (x + y) / 8 +
      t / 35,
      50
    );
  },

  // producto de senos (tipo "multiplication"/"waves")
  function (x, y, t, self) {
    const a = getSin(x / 12 + t / 40, 25);
    const b = getSin(y / 12 - t / 50, 25);
    return a * b / 50; // normalizo un poco
  },

  // anillos concéntricos “respirando”
  function (x, y, t, self) {
    const cx = self.WIDTH / 2;
    const cy = self.HEIGHT / 2;
    const dx = x - cx;
    const dy = y - cy;
    const r = Math.sqrt(dx * dx + dy * dy);
    const wobble = getSin(t / 60, 5);
    return getSin(
      r / (4 + wobble) +
      t / 40,
      50
    );
  },

  // patrón tipo rombo / ajedrezado suave
  function (x, y, t, self) {
    return getSin(
      x / 4 +
      y / 4 +
      getSin(t / 50, 5),
      50
    ) * getSin(
      (x - y) / 10 +
      t / 60,
      5
    );
  }
];


// ---------- GENERADOR DE FUNCIONES DE UPDATE ALEATORIAS ----------

function makeRandomUpdate() {
  // cuántos bloques mezclo (1 a 3)
  const count = 1 + Math.floor(Math.random() * 3);

  // elijo bloques al azar
  const chosenBlocks = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * patternBlocks.length);
    chosenBlocks.push(patternBlocks[idx]);
  }

  // ganancia para returnColor (cuánto "aplasta" el rango de a)
  const colorGain = 30 + Math.random() * 40; // entre 30 y 70

  // devuelvo una función compatible con Plasma.update
  return function () {
    const w = this.WIDTH;
    const h = this.HEIGHT;

    for (let y = 0; y < h; y++) {
      let line = "";
      for (let x = 0; x < w; x++) {
        let a = 0;

        // sumo contribuciones de cada bloque
        for (let k = 0; k < chosenBlocks.length; k++) {
          a += chosenBlocks[k](x, y, t, this);
        }

        // si querés, podés normalizar un poco:
        // a = a / chosenBlocks.length;

        const color = returnColor(a, colorGain);
        line += color;
      }
      this.plasma[y] = line;
    }
  };
}
