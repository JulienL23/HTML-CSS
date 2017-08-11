// alert("hi")
/*
1- VARIABLES qui stockent un élément du DOM(document object model)
*/
// cible le bouton afficher / cacher dans le document
var bouton = document.getElementById("toggle-rectangle");

// cible le rectangle dans le document
var rectangle = document.querySelector(".rectangle");


/*
2- FONCTIONS
*/

/*
2.a- fonction au click sur le bouton
*/

// La méthode ou fonction .toggle() va ajouter ou supprimer la class CSS (comme un interrupteur)
function surClickBouton(){
    rectangle.classList.toggle('hide');// correspond à .hide en css qui a la propriété display : none;
}
/*
2.b- fonction au survol
*/
function auSurvolRectangle(){
    rectangle.classList.add('important');// correspond à .hide en css qui a la propriété display : none;
}
/*
2.c-
*/
function aSortieRectangle(){
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');//permet d'éviter que le rectangle garde la couleur verte aprés le double click lorsqu'on ressort du rectangle
}
/*
2.d
*/
function doubleClick(){
    rectangle.classList.toggle('good');
}
/*
3- ECOUTEUR D'EVENEMENT
*/

/*
L'écouteur prend 2 paramètres écouteur (paramètre_1, paramètre_2)
en 1er => l'évènement
en 2nd => la fonction à éxécuter à cet évènement
*/

/*
3.a- installe un gestionnaire d'évènement au clic sur le bouton ciblé dans ma variable BUTTON*/
bouton.addEventListener('click', surClickBouton);
/*
3.b- installe mon écouteur au survol sur le rectangle
*/
rectangle.addEventListener('mouseover', auSurvolRectangle);
/*
3.c-installe l'écouteur sur la sortie de la souris
*/
rectangle.addEventListener('mouseout', aSortieRectangle);
/*
3.d-écouteur au double click
*/
rectangle.addEventListener('dblclick', doubleClick);
