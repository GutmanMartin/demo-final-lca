const textos = Array.from(document.querySelectorAll('.texto'));

// parámetro de zoom virtual
let z = 0;          // podés empezar en 0 o donde quieras
const zoomStep = 0.1;  // cuánto cambia z por “pasito” de scroll

function actualizarEscalas() {
  textos.forEach(el => {
    const nivel = parseFloat(el.dataset.z); // data-z
    const expo = z - nivel;

    // 2^(z - nivel) → si z < nivel, el texto es microscópico
    const scale = Math.pow(2, expo);

    el.style.transform = `translate(-50%, -50%) scale(${scale})`;
  });
}

// zoom con wheel (podés cambiar por pinch, teclas, etc.)
window.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (e.deltaY < 0) {
    // zoom in
    z += zoomStep;
  } else {
    // zoom out
    z -= zoomStep;
  }

  actualizarEscalas();
}, { passive: false });

actualizarEscalas();

function actualizarEscalas() {
  textos.forEach(el => {
    const nivel = parseFloat(el.dataset.z);
    const expo = z - nivel;
    const scale = Math.pow(2, expo);

    // escala
    el.style.transform = `translate(-50%, -50%) scale(${scale})`;

    // opacidad según “lo cerca” que está del nivel
    const dist = Math.abs(expo); // si expo = 0 → “en foco”
    let alpha = 1 - dist * 0.050;  // ajusta este 0.5 a gusto
    if (alpha < 0) alpha = 0;

    el.style.opacity = alpha;
  });
}



let lastY = null;
let lastDist = null;

function distTouches(t1, t2) {
  const dx = t2.clientX - t1.clientX;
  const dy = t2.clientY - t1.clientY;
  return Math.hypot(dx, dy);
}

viewport.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    lastY = e.touches[0].clientY;
    lastDist = null;
  } else if (e.touches.length === 2) {
    lastDist = distTouches(e.touches[0], e.touches[1]);
    lastY = null;
  }
}, { passive: false });

viewport.addEventListener('touchmove', (e) => {
  e.preventDefault();

  // 1 dedo: arrastrar verticalmente para hacer zoom
  if (e.touches.length === 1) {
    const y = e.touches[0].clientY;
    if (lastY != null) {
      const dy = lastY - y; // hacia arriba = zoom in
      const factor = 0.002; // sensibilidad móvil 1 dedo
      z += dy * factor;
      actualizarEscalas();
    }
    lastY = y;
  }

  // 2 dedos: pinch
  else if (e.touches.length === 2) {
    const d = distTouches(e.touches[0], e.touches[1]);
    if (lastDist != null) {
      const dd = d - lastDist; // >0 separan → zoom in
      const factor = 0.002;    // sensibilidad pinch
      z += dd * factor;
      actualizarEscalas();
    }
    lastDist = d;
  }
}, { passive: false });

viewport.addEventListener('touchend', () => {
  lastY = null;
  lastDist = null;
}, { passive: false });

actualizarEscalas();
