// alert('hi');

// -- Strucuture de base IF

if (true){/* par defaut la condition à vérifier le IF verifie si elle est vrai
    /* ... code ... */
}

var nb1 = 10;
if (nb1 < 50) {
    console.log("nb1 est bien inférieur à 50");
}

if (true){
    /* ... code si VRAI ... */
} else {
    /* ... code si FAUX ...*/
}

if (nb1 > 50) {
    console.log("nb1 est bien supérieur à 50");
} else {
    console.log("nb1 n'est pas supérieur à 50");
}

/*
EXERCICE
On utlise le IF pour vérifier l'age de l'internaute.
=>s'il est mineur je [1]lui signale et [2]le renvoie vers un autre site
*/

// 1 -- je déclare la majorité légale
var MajoriteFR =18;
// 2 -- demander l'age en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Indiquez votre age"));
// 3 -- je vérifie si mon internaute est majeur
if (age >= MajoriteFR) {
    //bienvenue si vrai
    alert("Bienvenue, vous êtes majeur");
} else {
    //s'il est mineur je lui signale
    alert("Allez casse toi...");
    //et ensuite je le redirige vers Darty
    document.location.href = "http://www.darty.com/"
}
