if (localStorage.getItem('nbVisites')) {
  const txtCompteur = document.createTextNode(
    localStorage.getItem('nbVisites'),
  );
  document.getElementById('compteur').appendChild(txtCompteur);
}

if (!localStorage.getItem('nbVisites')) {
  localStorage.setItem('nbVisites', 1);
} else {
  localStorage.setItem(
    'nbVisites',
    parseInt(localStorage.getItem('nbVisites')) + 1,
  );
}
