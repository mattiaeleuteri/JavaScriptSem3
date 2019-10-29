let modeDeplacement = false;
let x;
let y;
let margeX;
let margeY;

maDiv.addEventListener('mousedown', () => {
  margeX = x - parseInt(maDiv.style.left);
  margeY = y - parseInt(maDiv.style.top);
  modeDeplacement = true;
});

maDiv.addEventListener('mouseup', () => {
  modeDeplacement = false;
});

document.addEventListener('mousemove', (evt) => {
  x = evt.clientX;
  y = evt.clientY;
  leX.innerHTML = evt.clientX;
  leY.innerHTML = evt.clientY;

  if (modeDeplacement) {
    maDiv.style.left = evt.clientX - margeX;
    maDiv.style.top = evt.clientY - margeY;
  }

  console.log(evt.clientX, evt.clientY);
});
