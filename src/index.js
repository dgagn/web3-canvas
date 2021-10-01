const canvasElement = document.getElementById('game');
const ctx = canvasElement.getContext('2d');

const setSizeWindow = (el) =>
  (el.width = window.innerWidth) && (el.height = window.innerHeight);

setSizeWindow(canvasElement);
window.addEventListener('resize', () => setSizeWindow(canvasElement));

const createRotation = (deg) => {
  ctx.save();
  ctx.translate(canvasElement.width / 2, canvasElement.height / 2);
  ctx.rotate((deg * Math.PI) / 180);
};

const createHead = () => {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.arc(0, 0, 80, 0, 2 * Math.PI);
  ctx.stroke();
};

const createHat = () => {
  const y = -50;
  ctx.beginPath();
  ctx.moveTo(-100, y);
  ctx.lineTo(100, y);
  ctx.lineTo(0, y - Math.cos(Math.PI / 3) * 150);
  console.log(Math.cos(Math.PI / 3) * 150);
  ctx.fillStyle = '#f6a653';
  ctx.fill();
};

const createEye = (x) => {
  ctx.beginPath();
  ctx.arc(x, -15, 15, 0, Math.PI, true);
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#6477e8';
  ctx.stroke();
  ctx.lineWidth = 2;
};

const createMouth = () => {
  ctx.beginPath();
  ctx.arc(0, 45, 30, 0, Math.PI, true);
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#ec5f5f';
  ctx.stroke();
};

let deg = 0;
function animate() {
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  createRotation(deg);
  createHead();
  createHat();
  createEye(-25);
  createEye(25);
  createMouth();
  ctx.restore();
  deg++;
  requestAnimationFrame(animate);
}

window.onload = () => {
  animate();
};
