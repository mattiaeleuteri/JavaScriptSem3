/* eslint-disable radix */
const violetHTML = document.getElementById('violet');
const vertHTML = document.getElementById('vert');
const orangeHTML = document.getElementById('orange');

let x;
let y;
let margeX;
let margeY;
let modeDeplacementViolet = false;
let modeDeplacementVert = false;
let modeDeplacementOrange = false;

violetHTML.addEventListener('mousedown', () => {
  margeX = x - parseInt(violetHTML.style.left);
  margeY = y - parseInt(violetHTML.style.top);
  modeDeplacementViolet = true;
});
orangeHTML.addEventListener('mousedown', () => {
  margeX = x - parseInt(orangeHTML.style.left);
  margeY = y - parseInt(orangeHTML.style.top);
  modeDeplacementOrange = true;
});
vertHTML.addEventListener('mousedown', () => {
  margeX = x - parseInt(vertHTML.style.left);
  margeY = y - parseInt(vertHTML.style.top);
  modeDeplacementVert = true;
});

violetHTML.addEventListener('mouseup', () => {
  modeDeplacementViolet = false;
});
vertHTML.addEventListener('mouseup', () => {
  modeDeplacementVert = false;
});
orangeHTML.addEventListener('mouseup', () => {
  modeDeplacementOrange = false;
});

document.addEventListener('mousemove', (evt) => {
  x = evt.clientX;
  y = evt.clientY;

  if (modeDeplacementViolet) {
    violetHTML.style.left = `${evt.clientX - margeX}px`;
    violetHTML.style.top = `${evt.clientY - margeY}px`;
  }
  if (modeDeplacementVert) {
    vertHTML.style.left = `${evt.clientX - margeX}px`;
    vertHTML.style.top = `${evt.clientY - margeY}px`;
  }
  if (modeDeplacementOrange) {
    orangeHTML.style.left = `${evt.clientX - margeX}px`;
    orangeHTML.style.top = `${evt.clientY - margeY}px`;
  }
});
