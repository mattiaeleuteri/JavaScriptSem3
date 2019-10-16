/* eslint-disable no-undef */
// définition du juste prix

let prix = Math.floor(Math.random() * 101);

// addEventListener sur les boutons

ok.addEventListener('click', guess);
annuler.addEventListener('click', finDeJeu);
reroll.addEventListener('click', relance);

// fonction des boutons

function guess() {
  if (saisie.value === prix) {
    resultat.innerHTML = `${resultat.innerHTML}<br> Bravo ! ${saisie.value} est le juste prix!`;
  } else if (saisie.value < prix) {
    resultat.innerHTML = `${resultat.innerHTML}<br> Votre proposition ${saisie.value} est plus petite!`;
  } else if (saisie.value > prix) {
    resultat.innerHTML = `${resultat.innerHTML}<br> Votre proposition ${saisie.value} est plus grande!`;
  }
}

function finDeJeu() {
  resultat.innerHTML = `${resultat.innerHTML}<br> Perdu ! Le prix était : ${prix}`;
}

function relance() {
  prix = Math.floor(Math.random() * 101);
  resultat.innerHTML = 'On recommence !';
}
