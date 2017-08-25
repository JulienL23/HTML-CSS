// alert('hi')

/* 1- ciblé l'élément textarea et l'id #counterBlock */

var textarea = document.getElementById('tweetContent');
var blockCount = document.getElementById('counterBlock');

//2- je créé ma fonction qui
function count(){
//=> calcule la longueur de la chaîne de caractères contenue dans le textarea
    var count = 140 - textarea.value.length;
//=> affiche cette valeur dans la balise #counterBlock grâce à innerHTML
    blockCount.innerHTML = count;
//=> si le nombre de caractères descend sous 0 on ajoute la class red à #counterBlock
    if (count < 0){
        blockCount.classList.add("red");
    } else if (count >= 0){
        blockCount.classList.remove("red");
    }
}
/* 3- écouteur d'évènement KEYUP sur le textarea => on déclenche la fonction quand on tape au clavier et au chargement de la page */
textarea.addEventListener('keyup', count);
count();
