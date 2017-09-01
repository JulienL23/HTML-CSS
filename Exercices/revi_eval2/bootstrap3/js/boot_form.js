$(".btnsubmit").on("click",function(){//je cible mon bouton .btnsubmit, puis je pose mon écouteur d'évènement .on sur le "click" et ensuite je code ma fonction
    var nom = $("#oblignom").val();
    // je stocke dans ma variable "nom" la valeur de l'élèment HTML qui à l'iD #oblignom
    var message = $('#msg');
    if(nom === ""){// si le nom est vide / pas remplit
        // on manipule des classes de Bootstrap ici : je vais rajouter la classe .has-error de Bootstrap3 à la div ayant la classe form-group la plus proche parente de l'élément #oblignom => résultat si le champ n'est pas rempli son cadre devient rouge
        $("#oblignom").closest('div.form-group').addClass("has-error");
        // je rajoute ensuite la class prévue dans mon css .error sur la div#msg
        message.addClass('error');
        //je stocke das une variable le message d'erreur que je veux afficher
        var pasDeNom = $(".error");//ici je cible une class et comme en JS par défaut il renvoi l'information dans un tableau [0, 1, 2, ...]
        var msgPasDeNom = "Vous n'avez pas renseigné votre nom !";
        pasDeNom[0].innerHTML = msgPasDeNom;
    }//fin du if de vérification du nom

    // si le formulaire est rempli sur tous les champs que je rend obligatoires alors je remplace le formulaire par un message de réussite
    var selection = $(".selection").val();
    var prenom = $("#obligprenom").val();
    var adresse = $("#obligadresse").val();
    var cp = $("#obligcp").val();
    var telephone = $("#telephone").val();
    if (nom !== "" && prenom !== "" && adresse !== "" && cp !== "" && telephone !== "" && selection !== "Pays") {
        var formulaireOK = $("form");
        formulaireOK.addClass('valid');
        var msgOK = "Votre formulaire est validé ;-) !";
        formulaireOK[0].innerHTML = msgOK;
    }


    if(prenom === ""){
        $("#obligprenom").closest('div.form-group').addClass("has-error");

        message.addClass('error');

        var pasDePrenom = $(".error");

        var msgPasDePrenom = "Vous n'avez pas renseigné votre Prénom !";
        pasDePrenom[0].innerHTML = msgPasDePrenom;
    }
    if(adresse === ""){
        $("#obligadresse").closest('div.form-group').addClass("has-error");

        message.addClass('error');

        var pasDeAdresse = $(".error");

        var msgPasDeAdresse = "Vous n'avez pas renseigné votre adresse !";
        pasDeAdresse[0].innerHTML = msgPasDeAdresse;
    }
    if(cp === ""){
        $("#obligcp").closest('div.form-group').addClass("has-error");

        message.addClass('error');

        var pasDeCp = $(".error");

        var msgPasDeCp = "Vous n'avez pas renseigné votre Code Postal !";
        pasDeCp[0].innerHTML = msgPasDeCp;
    }
    if(telephone === ""){
        $("#telephone").closest('div.form-group').addClass("has-error");

        message.addClass('error');

        var pasDeTelephone = $(".error");

        var msgPasDeTelephone = "Vous n'avez pas renseigné votre téléphone !";
        pasDeTelephone[0].innerHTML = msgPasDeTelephone;
    }
    if(selection === "Pays"){
        $(".selection").closest('div.form-group').addClass("has-error");

        message.addClass('error');

        var pasDeSelection = $(".error");

        var msgPasDeSelection = "Vous n'avez pas renseigné votre pays !";
        pasDeSelection[0].innerHTML = msgPasDeSelection;
    }

});
