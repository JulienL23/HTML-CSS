// alert('hi')
var mois = parseInt(prompt("Saisie le numéro du mois de ton choix."));

    if((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)){
        document.write("Il y a 31 jours le " + mois + "eme mois");
    } else if((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
        document.write("Il y a 30 jours au mois de " + mois + "eme mois");
    } else if (mois === 2){
        document.write("Il y a 28 jours au mois de " + mois + "eme mois");
    } else {
        document.write("Error !");
    }
