let date = new Date();
const horlogeHTML = document.getElementById('horloge');
let dateHeures = date.getHours();
let dateMinutes = date.getMinutes();
let dateSecondes = date.getSeconds();

horlogeHTML.innerHTML = `${dateHeures}h${dateMinutes}m${dateSecondes}s`;

setInterval(() => {
  date = new Date();
  dateHeures = date.getHours();
  dateMinutes = date.getMinutes();
  dateSecondes = date.getSeconds();
  horlogeHTML.innerHTML = `${dateHeures}h${dateMinutes}m${dateSecondes}s`;
}, 1000);
