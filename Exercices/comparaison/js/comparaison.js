// alert('hi')

var nb1 = parseInt(prompt("Taper votre premier nombre ! "));
var nb2 = parseInt(prompt("Taper votre deuxieme nombre ! "));

if ((!isNaN(nb1)) && (!isNaN(nb2))) {
    if(nb1 < nb2){
        document.write("Votre 1er nombre : " + nb1 + " est plus petit que votre 2nd : " + nb2);
    } else if (nb1 > nb2) {
        document.write("Votre 1er nombre : " + nb1 + " est plus grand que votre 2nd : " + nb2);
    } else {
        document.write("Votre 1er nombre : " + nb1 + " est égale à votre 2nd : " + nb2);
    }
} else {
    alert('Vous n\'avez pas saisie de chiffre(s)');
}
