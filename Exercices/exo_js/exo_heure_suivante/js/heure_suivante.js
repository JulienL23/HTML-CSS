var heure = parseInt(prompt("Ecrivez : L'heure :"));
var minute = parseInt(prompt("Ecrivez : Les minutes :"));
var seconde = parseInt(prompt("Ecrivez : Les secondes :"));

if((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)){
    seconde++; // on incrémente les secondes
    if(seconde === 60){
        // on met les secondes à 0 et passe à la minute suivante
        seconde = 0;
        minute++;
        if(minute === 60){
            //on met les minutes à 0 et passe l'heure suivante
            minute = 0;
            heure++;
            if(heure === 24){
                // l'heure suivante est minuit
                heure = 0;
            }
        }
    }
    document.write("<h3>Dans une seconde il sera " + heure + " h " + minute + " m " + seconde + " s</h3>");
} else {
    document.write("error! ");
}
