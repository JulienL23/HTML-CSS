// alert('hi');

//L'opérateur de comparaison == signifie 'egal à'
//il permet de vérifier que les VALEURS de 2 variables sont identiques
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2);// retourne TRUE

//L'opérateur de comparaison === signifie 'strictement égal à'
//il permet de vérifier la VALEUR et le type
console.log(nb1 === nb2);// retourne FALSE

// -- l'opérateur != signifie 'différent de ... en VALEUR'
console.log(nb1 != nb2);//retourne FALSE

// -- L'opérateur !== signifie 'strictement différent de ... en VALEUR et en type'
console.log(nb1 !== nb2);// retourne TRUE



/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je doit saisir mon prénom et mon age pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */


// 1 -- Demander son prénom à l'utilisateur avec un prompt

// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)

// 2a. Si tout est ok, je continue la vérification avec l'âge

// 2a1. Demande a mon utilisateur son l'âge via un PROMPT

// 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.

// 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
//-----------------------------------------------------------------------

//base de données
var prenom, monAge;
prenom = "Julien";
monAge = 24;
mdp = "bibi";
mdp2 ="bibi2";
//1
var prenomLogin = prompt("Quel est votre prénom?");
//2
if (prenomLogin === prenom) {
    //2a , 2a1
    var ageLogin = parseInt(prompt("Votre âge ?"));
    //2a2
    if (ageLogin === monAge) {
        var mdpLogin = prompt("Quel est votre mot de passe ?");
        if (mdpLogin === mdp){
                var mdpLogin = prompt("Quel est votre deuxieme mdp ?");
                if(mdpLogin === mdp2){
                alert("Bienvenue" + prenomLogin);
            }else{
                alert("erreur deuxieme mdp");
            }
        }else {
            alert("erreur mot de passe");
        }
    } else {
    //2b
        alert("erreur d'âge");
        document.location.href = "https://media.giphy.com/media/3oKIPAXQ7WsnAILzkk/giphy.gif"
    }
} else {
    alert("Attention, prénom non reconnu");
    document.location.href = "https://media.giphy.com/media/3oKIPAXQ7WsnAILzkk/giphy.gif"
}
