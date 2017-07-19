// alert('hi')

/* 1 -- boucle WHILE */
var manege = 0;
while(manege < 10){
    manege++;
    document.write("C'est le tour n°" + manege + "<br /");
}


/* 1 -- boucle FOR */
document.write("<hr /");

for (var i = 1; i <= 10; i++){
    document.write("c'est le tour n°" + i + "<br />");
}

document.write("<hr />");
document.write("<hr />");

/* 2 -- Boucle While */
var question = parseInt(prompt("Combien de tours ?"));
var compteur = 0;
while (compteur < question) {
    document.write("c'est le tour n°" + compteur + "<br />");
    compteur++;
}

document.write("<hr />");
document.write("<hr />");

/* 2 -- Boucle FOR */
var nbTours = parseInt(prompt("Combien de tours ?"));
for (var tour = 1; tour <= nbTours; tour++){
    document.write("c'est le tour n°" + tour + "<br />");
}
