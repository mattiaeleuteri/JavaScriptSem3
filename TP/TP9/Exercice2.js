const boutonDessin = document.getElementById('dessin');
const canvasHTML = document.getElementById('monCanvas');
const ctx = canvasHTML.getContext('2d');

boutonDessin.addEventListener('click', () => {
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(100, 100, 50, 50);
  ctx.arc(200, 200, 50, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.moveTo(300, 300);
  ctx.lineTo(350, 350);
  ctx.lineTo(250, 350);
  ctx.lineTo(300, 300);
  ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
  ctx.stroke();
  ctx.fill();
});
