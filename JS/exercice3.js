/// Initialisation d'un tableau comprenant 10 prénoms; un prénom est saisi par l'utilisateur et l'indice de ce prénom est recherché ///

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom = window.prompt("Saisissez un prénom");
var indice = tab.indexOf(prenom);
console.log(tab);
console.log(prenom);
console.log(indice);
console.log(tab.length);

/// L'indice du prénom saisi n'est pas - 1: Le prénom est présent dans le tableau, il est supprimé, une case est créé à la fin du tableau ///

if (indice>-1)
{
    tab.splice(indice, 1);
    tab.splice(tab.length, 1, "");
    document.write("<br>Tableau rectifié<br>"+ tab);
    console.log(tab);
}

/// L'indice du prénom saisi est - 1: Le prénom n'est pas présent dans le tableau, un message d'erreur s'affiche ///

else
{
    alert("Erreur: prénom inexistant dans le tableau");
}
