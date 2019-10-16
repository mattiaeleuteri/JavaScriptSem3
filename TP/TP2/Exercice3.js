// EventListener sur les boutons de la calculatrice

boutonPlus.addEventListener('click', plus);
boutonMoins.addEventListener('click', moins);
boutonFois.addEventListener('click', fois);
boutonDiviser.addEventListener('click', diviser);
boutonCos.addEventListener('click', cos);
boutonSin.addEventListener('click', sin);
boutonTan.addEventListener('click', tan);
boutonModulo.addEventListener('click', modulo);
boutonReinitialiser.addEventListener('click', reinitialiser);

// Fonctions des EventListener

function plus() {
  if (testSaisies()) {
    console.warn('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else {
    resultat.innerHTML = parseInt(saisie1.value) + parseInt(saisie2.value);
  }
}
function moins() {
  if (testSaisies()) {
    console.warn('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else {
    resultat.innerHTML = parseInt(saisie1.value) - parseInt(saisie2.value);
  }
}
function fois() {
  if (testSaisies()) {
    console.alert('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else {
    resultat.innerHTML = parseInt(saisie1.value) * parseInt(saisie2.value);
  }
}
function diviser() {
  if (testSaisies()) {
    console.warn('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else if (divisionZero()) {
    console.warn('On ne peut pas diviser par zero');
    alert('On ne peut pas diviser par zero');
    resultat.innerHTML = 'On ne peut pas diviser par zero';
  } else {
    resultat.innerHTML = parseInt(saisie1.value) / parseInt(saisie2.value);
  }
}
function cos() {
  if (testSaisie1()) {
    console.warn('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else {
    resultat.innerHTML = Math.cos(parseInt(saisie1.value));
  }
}
function sin() {
  if (testSaisie1()) {
    console.warn('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else {
    resultat.innerHTML = Math.sin(parseInt(saisie1.value));
  }
}
function tan() {
  if (testSaisie1()) {
    console.warn('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else {
    resultat.innerHTML = Math.tan(parseInt(saisie1.value));
  }
}
function modulo() {
  if (testSaisies()) {
    console.warn('Champ de saisie vide ou pas un nombre');
    alert('Champ de saisie vide ou pas un nombre');
    resultat.innerHTML = 'Champ de saisie vide ou pas un nombre';
  } else if (divisionZero()) {
    console.warn('On ne peut pas diviser par zero');
    alert('On ne peut pas diviser par zero');
    resultat.innerHTML = 'On ne peut pas diviser par zero';
  } else {
    resultat.innerHTML = parseInt(saisie1.value) % parseInt(saisie2.value);
  }
}
function reinitialiser() {
  saisie1.value = 0;
  saisie2.value = 0;
  resultat.innerHTML = '';
}

// Fonction de tests

function testSaisies() {
  if (saisie1.value.length === 0 || saisie2.value.length === 0) {
    return true;
  }
  if (isNaN(saisie1.value) || isNaN(saisie2.value)) {
    return true;
  }
  return false;
}

function testSaisie1() {
  if (saisie1.value.length === 0) {
    return true;
  }
  if (isNaN(saisie1.value)) {
    return true;
  }
  return false;
}

function divisionZero() {
  if (saisie2.value === 0) {
    return true;
  }
  return false;
}
