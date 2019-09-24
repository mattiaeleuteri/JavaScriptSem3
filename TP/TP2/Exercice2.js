BoutonPlus.addEventListener("click", plus);
BoutonMoins.addEventListener("click", moins);
BoutonFois.addEventListener("click", fois);
BoutonDiviser.addEventListener("click", diviser);
BoutonReinitialiser.addEventListener("click", reinitialiser);

function plus() {
  if (testSaisies()) {
      console.warn("Champ de saisie vide ou pas un nombre");
      alert("Champ de saisie vide ou pas un nombre");
      resultat.innerHTML = "Champ de saisie vide ou pas un nombre";
  } else {
    resultat.innerHTML = parseInt(saisie1.value) + parseInt(saisie2.value);
  }
}
function moins() {
    if (testSaisies()) {
        console.warn("Champ de saisie vide ou pas un nombre");
        alert("Champ de saisie vide ou pas un nombre");
        resultat.innerHTML = "Champ de saisie vide ou pas un nombre";
    } else {
      resultat.innerHTML = parseInt(saisie1.value) - parseInt(saisie2.value);
    }
}
function fois() {
    if (testSaisies()) {
        console.alert("Champ de saisie vide ou pas un nombre");
        alert("Champ de saisie vide ou pas un nombre");
        resultat.innerHTML = "Champ de saisie vide ou pas un nombre";
    } else {
      resultat.innerHTML = parseInt(saisie1.value) * parseInt(saisie2.value);
    }
}
function diviser() {
    if (testSaisies()) {
        console.warn("Champ de saisie vide ou pas un nombre");
        alert("Champ de saisie vide ou pas un nombre");
        resultat.innerHTML = "Champ de saisie vide ou pas un nombre";
    } else if (divisionZero()) {
        console.warn("On ne peut pas diviser par zero");
        alert("On ne peut pas diviser par zero");
        resultat.innerHTML = "On ne peut pas diviser par zero";
    }
    else {
      resultat.innerHTML = parseInt(saisie1.value) / parseInt(saisie2.value);
    }
}
function reinitialiser() {
  saisie1.value = 0;
  saisie2.value = 0;
  resultat.innerHTML = "";
}

function testSaisies() {
  if (saisie1.value.length == 0 || saisie2.value.length == 0) {
    return true;
  }
  if (isNaN(saisie1.value) || isNaN(saisie2.value)) {
    return true;
  }
  return false;
}

function divisionZero() {
  if (saisie2.value == 0) {
    return true;
  }
  return false;
}
