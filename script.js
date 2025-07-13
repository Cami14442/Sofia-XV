// Burbujas animadas en el fondo

const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
resize();
window.addEventListener('resize', resize);

class Bubble {
  constructor() {
    this.x = Math.random() * width;
    this.y = height + Math.random() * 100;
    this.radius = 5 + Math.random() * 20;
    this.speed = 0.5 + Math.random();
    this.opacity = 0.3 + Math.random() * 0.5;
  }
  update() {
    this.y -= this.speed;
    if (this.y + this.radius < 0) {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 100;
      this.radius = 5 + Math.random() * 20;
      this.speed = 0.5 + Math.random();
      this.opacity = 0.3 + Math.random() * 0.5;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(173,216,230,0.5)';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const bubbles = [];
for(let i=0; i<50; i++){
  bubbles.push(new Bubble());
}

function animate(){
  ctx.clearRect(0,0,width,height);
  bubbles.forEach(bubble => {
    bubble.update();
    bubble.draw();
  });
  requestAnimationFrame(animate);
}
animate();


// Manejo formulario RSVP

const form = document.getElementById('rsvpForm');
const mensaje = document.getElementById('mensaje');

if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const guests = form.guests.value;

    if(name && email){
      mensaje.textContent = `Gracias, ${name}, por confirmar tu asistencia!`;
      form.reset();
    } else {
      mensaje.textContent = 'Por favor llena todos los campos.';
    }
  });
}
