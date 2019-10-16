/* eslint-disable no-undef */

// Bouton ajouter
document.getElementById('ajouter').addEventListener('click', (_) => {
  const elementAAjouter = document.createElement('li');
  if (document.getElementById('article').value !== '') {
    const texteElement = document.createTextNode(
      document.getElementById('article').value,
    );
    elementAAjouter.appendChild(texteElement);
    document.getElementById('panier').appendChild(elementAAjouter);
  }
});

// Bouton supprimerDernier
document.getElementById('supprimerDernier').addEventListener('click', (_) => {
  const panier = document.getElementById('panier');
  panier.removeChild(panier.lastChild);
});

// Bouton supprimerPremier
document.getElementById('supprimerPremier').addEventListener('click', (_) => {
  const panier = document.getElementById('panier');
  panier.removeChild(panier.firstChild);
});

// Bouton supprimerTous
document.getElementById('supprimerTous').addEventListener('click', (_) => {
  const panier = document.getElementById('panier');
  while (panier.hasChildNodes()) {
    panier.removeChild(panier.lastChild);
  }
});
