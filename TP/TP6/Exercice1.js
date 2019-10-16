/* eslint-disable no-undef */
const nomHTML = document.getElementById('nom');
const npaHTML = document.getElementById('npa');

if (localStorage.getItem('nomCache') && localStorage.getItem('npaCache')) {
  nomHTML.value = localStorage.getItem('nomCache');
  npaHTML.value = localStorage.getItem('npaCache');
}

nomHTML.addEventListener('change', (_) => {
  localStorage.setItem('nomCache', nomHTML.value);
});
npaHTML.addEventListener('change', (_) => {
  localStorage.setItem('npaCache', npaHTML.value);
});
