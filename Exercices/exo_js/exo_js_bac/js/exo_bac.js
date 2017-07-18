
var moyenne = parseInt(prompt("Ecris ta moyenne ! "));

    if ((moyenne >= 12) && (moyenne <=20)) {
        document.write("Avec " + moyenne + " points félicitation tu as ton BAC avec mention !");
    } else if (moyenne < 10){
        document.write("Avec " + moyenne + " points retourne réviser ");
    } else if ((moyenne >= 10) && (moyenne < 12)) {
        document.write("Avec " + moyenne + " points félicitation tu as ton BAC ");
    } else {
        document.write("Mais de quoi tu parle !");
    }


// La j'ai une boite de dialogue qui s'ouvre.
// Puis qui me demande de rentrer ma moyenne.
// Si ma moyenne est entre 12 et 20 compris j'ai une mention.
// Si ma moyenne est entre 10 et 12 j'ai mon BAC.
// Si ma moyenne est inférieur à 10 j'ai pas mon BAC.
