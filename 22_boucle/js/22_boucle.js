// alert('hi')

/*
LES BOUCLES
*/

// -- La boucle FOR
//for (/*3 arguments*/) {
    /* ... code ...*/
//}
/*
1. initialise un compteur à partir de combien je compte (par defaut le compteur est la variable 'i')
2. la condition à vérifier qui doit donc être VRAI (TRUE)
3. le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++)
*/
for (var i = 0; i <= 10; i++) {
    document.write("<p>Instruction exécutée : " + i + "</p>");
}

// -- La boucle WHILE ( tant que )
// trés utilisée quand on ne connais pas le nombre de tours de boucles à l'avance
var j = 1;
while (j <=10) {
    document.write("<hr /><p>Instruction exécutée : " + j + "</p><hr />");
     j++;

}

/*---------------------------------------
j'ai 1000€sur mon compte
chaqe mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
----------------------------------------*/

var cpte = 1000;
var temps = 0;
while (cpte < 2000){
    cpte += 50;
    temps++;
}
document.write("<h3> Sous sur mon compte : " + cpte + "</h3>");
document.write("<h3> Jusqu'à 2000€, il me faut : " + temps + "mois</h3>");
document.write("<h3> Jusqu'à 2000€, il me faut : " + (temps/12) + "années</h3><br />");


//-----------avec boucle : FOR

var tps = 0;
for (var monCompte = 1000; monCompte < 2000; monCompte += 50) {
    document.write("<h4> Le mois suivant j'ai : " + monCompte + "</h4>");
    tps++;
}
document.write("<h4> Il aura fallu " + tps + "mois.</h4>");
