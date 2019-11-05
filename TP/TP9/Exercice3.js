const canvasHTML = document.getElementById('monCanvas');
const ctx = canvasHTML.getContext('2d');

ctx.moveTo(0, 0);
ctx.lineTo(50, 0);
ctx.lineTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(100, 100);
ctx.lineTo(150, 100);
ctx.lineTo(150, 150);
ctx.lineTo(200, 150);
ctx.lineTo(200, 200);
ctx.lineTo(250, 200);
ctx.lineTo(250, 250);
ctx.lineTo(300, 250);
ctx.lineTo(300, 300);
ctx.stroke();
