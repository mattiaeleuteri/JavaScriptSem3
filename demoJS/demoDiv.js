const pas = 1;
const delai = 3;
let tm;
setTimeout(_=>{
  alert('coucou')
}, 1000);

aDroite.addEventListener('click', _=>{
  // Stopper l'interval s'il existe
  clearInterval(tm);
  tm = setInterval(_=>{
    let pos = parseInt(maDiv.style.left) + pas;
    maDiv.style.left = pos;
    console.log(pos);
  }, delai)
})
aGauche.addEventListener('click', _=>{
  // Stopper l'interval s'il existe
  clearInterval(tm);
  tm = setInterval(_=>{
    let pos = parseInt(maDiv.style.left) - pas;
    maDiv.style.left = pos;
    console.log(pos);
  }, delai)
})

arreter.addEventListener('click',_=>{
  clearInterval(tm)
})
