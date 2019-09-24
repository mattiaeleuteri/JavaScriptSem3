// définition du juste prix et du compteur

let prix = Math.floor(Math.random() * 101);
let compteur = 0;

// addEventListener sur les boutons

ok.addEventListener("click", guess);
annuler.addEventListener("click", finDeJeu);
reroll.addEventListener("click", relance);

// fonction des boutons

function guess() {
  if (saisie.value == prix) {
    compteur += 1;
    resultat.innerHTML =
      resultat.innerHTML +
      "<br> Bravo ! " +
      saisie.value +
      " est le juste prix! <br> Tentative n°" +
      compteur +
      "<br>";
  } else if (saisie.value < prix) {
    compteur += 1;
    resultat.innerHTML =
      resultat.innerHTML +
      "<br> Votre proposition " +
      saisie.value +
      " est plus petite! <br> Tentative n°" +
      compteur;
  } else if (saisie.value > prix) {
    compteur += 1;
    resultat.innerHTML =
      resultat.innerHTML +
      "<br> Votre proposition " +
      saisie.value +
      " est plus grande! <br> Tentative n°" +
      compteur;
  }
}

function finDeJeu() {
  saisie;
  resultat.innerHTML =
    resultat.innerHTML +
    "<br> Perdu ! Le prix était : " +
    prix +
    " <br> Tentative n°" +
    compteur +
    "<br>";
}

function relance() {
  prix = Math.floor(Math.random() * 101);
  compteur = 0;
  resultat.innerHTML = "On recommence !";
}
