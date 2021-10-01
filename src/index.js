const canvasElement = document.getElementById('game');
const ctx = canvasElement.getContext('2d');

function animate() {
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  ctx.beginPath();
  ctx.arc(
      canvasElement.width / 2,
      canvasElement.width / 2,
      100,
      0,
      2 * Math.PI,
  );
  ctx.stroke();
  requestAnimationFrame(animate);
}

window.onload = () => {
  animate();
};
