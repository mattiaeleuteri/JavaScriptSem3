const marquesListe = {
  fiat: ['punto', 'uno'],
  renault: ['megane', 'clio'],
  peugeot: ['301', '302', '303'],
};
const marqueHTML = document.getElementById('marques');
const modelesHTML = document.getElementById('modeles');

marqueHTML.addEventListener('change', (_) => {
  while (modelesHTML.hasChildNodes()) {
    modelesHTML.removeChild(modelesHTML.firstChild);
  }
  if (marqueHTML.value.length > 0) {
    marquesListe[marqueHTML.value].forEach((mod) => {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(mod));
      modelesHTML.appendChild(option);
    });
  }
});
