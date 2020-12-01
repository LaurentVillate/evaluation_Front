/// Initialisation d'un tableau avec 10 prénoms ///

var tableau = [" Audrey", " Aurélien", " Flavien", " Jérémy", " Laurent", " Melik", " Nouara", " Salem", " Samuel", " Stéphane"];

/// L'utilisateur saisit un prénom de son choix ///

var prenom = window.prompt("Saisissez un prénom");
document.write("<br>Le prénom saisi est : " + prenom);
console.log(prenom);

/// L'indice du prénom trouvé est stocké dans une variable ///

var indice = tableau.findIndex(prenom);
console.log(tableau.findIndex(prenom));

/// L'indice du prénom n'est pas - 1: le prénom est présent dans le tableau est supprimé, la case vide reporté à la fin du tableau ///

if (indice>-1)
{
    tab.splice(indice, 1);
    tab.splice(tab.length, 1, "");
    document.write("<br>"+ tab);
}

/// L'indice du prénom saisi est - 1: Le prénom n'est pas présent dans le tableau, un message d'erreur s'affiche ///

else
{
    alert("Erreur: prénom inexistant dans le tableau");
}

/// tab.splice(tab.length, 1, "")///

