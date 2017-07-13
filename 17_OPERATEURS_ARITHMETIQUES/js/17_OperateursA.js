//alert("hi");

// -- 1.Addition
// -- INFO -- Je peux déclarer plusieurs variables à la SuitePhrase
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;
// -- Addition avec l'opérateur "+"
resultat = nb1 + nb2;
// -- Affichage de la console
console.log(resultat);

// -- 2. Soustraction
// -- Soustraction avec l'opérateur "-"
resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplication
// -- Multiplication avec l'opérateur "*"
resultat = nb1 * nb2;
console.log(resultat);

// -- 4. Division
// -- Division avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// -- Le Modulo retourne le reste d'une Division
// -- modulo de nb1 % nb2 avec l'opérateur "%"
resultat = nb1 % nb2;
console.log(resultat);

// -- et maintenant je ré-affecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);

/*
LES ECRITURES SIMPLIFIEES
*/
nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 10;//nb1 lui même + quelque chose
console.log(nb1);

// Le raccourci est le même avec les autres opérateurs +, -, /, *, %
