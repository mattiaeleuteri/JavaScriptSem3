BoutonPlus.addEventListener("click", plus);
    BoutonMoins.addEventListener("click", moins);
    BoutonFois.addEventListener("click", fois);
    BoutonDiviser.addEventListener("click", diviser);
    BoutonReinitialiser.addEventListener("click", reinitialiser);

    function plus() {
        resultat.innerHTML = parseInt(saisie1.value) + parseInt(saisie2.value);
    }
    function moins() {
        resultat.innerHTML = parseInt(saisie1.value) - parseInt(saisie2.value);
    }
    function fois() {
        resultat.innerHTML = parseInt(saisie1.value) * parseint(saisie2.value);
    }
    function diviser() {
        resultat.innerHTML = parseInt(saisie1.value) / parseInt(saisie2.value);
    }
    function reinitialiser(){
        saisie1.value = 0;
        saisie2.value = 0;
        resultat.innerHTML = "";
    }