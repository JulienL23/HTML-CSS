// alert("hi")

var jour = prompt("Quel jours ?")


if(jour === "lundi"){
    document.write("Demain nous serons mardi...")
} else if (jour === "mardi") {
    document.write("Demain nous serons mercredi...")
} else if (jour === "mercredi") {
    document.write("Demain nous serons jeudi...")
} else if (jour === "jeudi") {
    document.write("Demain nous serons vendredi...")
} else if (jour === "vendredi") {
    document.write("Demain nous serons samedi...")
} else if (jour === "samedi") {
    document.write("Demain nous serons dimanche...")
} else if (jour === "dimanche") {
    document.write("Demain nous serons lundi...")
} else {
    document.write("Ce jour n'existe pas ! ")
}
