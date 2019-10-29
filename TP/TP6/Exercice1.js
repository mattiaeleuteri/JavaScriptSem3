const nomHTML = document.getElementById('nom');
const npaHTML = document.getElementById('npa');

if (localStorage.getItem('nomCache') && localStorage.getItem('npaCache')) {
  nomHTML.value = localStorage.getItem('nomCache');
  npaHTML.value = localStorage.getItem('npaCache');
}

nomHTML.addEventListener('change', () => {
  localStorage.setItem('nomCache', nomHTML.value);
});
npaHTML.addEventListener('change', () => {
  localStorage.setItem('npaCache', npaHTML.value);
});
