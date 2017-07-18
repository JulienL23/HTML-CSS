var myn = parseInt(prompt("Ecris ta moyenne ! "));

    if (myn >= 12) {
        document.write("Avec " + myn + " points félicitation tu as ton BAC avec mention !");
    } else if (myn < 10) {
        document.write("Avec " + myn + " points retourne réviser ");
    } else {
        document.write("Avec " + myn + " points félicitation tu as ton BAC ");
    }
