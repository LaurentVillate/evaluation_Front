/// Saisie de âges successifs ///
var jeune = 0;
var moyen = 0;
var mature = 0;
var i = 0

///Une boucle demande d'entrer un age à l'utilisateur, puis range cet âge dans 3 variables ///

while (i>=0)
{
var age = window.prompt("Saisissez un âge");

if (age<20)
{
    jeune++;
}

else if (age>=20 && age<=40)
{
    moyen++;
}

else 
{
    mature++;

/// Si âge est >= 100, la boucle s'arrête, mais l'âge en question est compté, car cette condition supplémentaire se trouve à l'intérieur de la condition "else" ///
    
    if (age>=100)
    {
    break;
    }
}
i++
}

/// Affiche des résultats dans la page html ///

document.write("Les jeunes: " + jeune);
document.write("<br>Entre deux ages: " + moyen);
document.write("<br>Les matures; " + mature);


