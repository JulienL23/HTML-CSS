// alert('hi')
var choix = parseInt(prompt("Choisis un nombre :"));
for (var i = 1; i <= 10; i++){
    var res = choix * i;
    document.write(choix + " x " + i + " = " + res + "<br />");
}


// -------------------
document.write('<hr />');
document.write('<hr />');
// -------------------

var choice = parseInt(prompt("Choisis un nombre entre 2 et 9 :"));
if((choice >= 2) && (choice <= 9)){
    for (var y = 1; y <= 10; y++){
        var resultat = choice * y;
        document.write(choice + " x " + y + " = " + resultat + "<br />");
    }
} else {
    document.write("<h4>Le chiffre doit être entre 2 et 9!</h4>");
}
