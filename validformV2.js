document.getElementById('mdp2').addEventListener('input', function() {
var paraErreur = document.getElementById('erreur')
if (this.value != document.getElementById('mdp').value){
    paraErreur .innerHTML = 'Les 2 mot de passes sont différents';
}else{
    paraErreur.innerHTML = ' '

}

    });

document.getElementById("inscription").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var erreur;
    
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value){
            erreur='Veuillez remplir tous les champs';
        }
    }
    
    
    if (erreur) {
    e.preventDefault();
    document.getElementById('erreur').innerHTML = erreur;
    return false;

    } else {
    alert('Formulaire envoyé !');
}
    
});