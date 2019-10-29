const listeHTML = document.getElementById('liste');

setTimeout(() => {
  const tm = setInterval(() => {
    if (listeHTML.hasChildNodes()) {
      listeHTML.removeChild(listeHTML.lastChild);
    } else {
      clearInterval(tm);
    }
  }, 1000);
}, 5000);
