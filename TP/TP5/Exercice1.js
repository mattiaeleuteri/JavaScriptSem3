/* eslint-disable no-undef */
document.getElementById('ajouter').addEventListener('click', _ => {
  const elementAAjouter = document.createElement('li')
  if (document.getElementById('article').value !== '') {
    const texteElement = document.createTextNode(document.getElementById('article').value)
    elementAAjouter.appendChild(texteElement)
    document.getElementById('panier').appendChild(elementAAjouter)
  }
})
