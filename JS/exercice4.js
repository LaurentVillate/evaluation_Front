var pu = window.prompt("Saisssez un prix");
var qtecom = window.prompt("Saisissez une quantité");

/// fonction pour calculer le prix total initial ///

function totalbrut()
{
    tot = pu*qtecom;
    console.log(pu + "x" + qtecom + "=" + tot);
    return tot;
}

/// fonction pour calculer la remise éventuel, avec les conditions ///

function remises()
{
    rem = 0;
if (tot>=100 && tot<=200)
    {
    rem = tot - (tot*0.05);
    console.log("avec remise 5% " + rem);
    }

else if (tot>200)
    {
    rem = tot - (tot*0.10);
    console.log("avec remise 10% " +rem);
    }

else
    {
    rem = tot;
    console.log("sans remise " + rem);
    }
    return rem;
}

/// fonction pour calculer le montant du port, selon conditions, et le prix final ///

function livraison()
{
    totalfin = 0;
    port = rem*0.02;
    console.log(port);
    if (port<6)
    {
    totalfin = rem + 6;
    console.log("portA " + totalfin)
    }

    else if (rem > 500)
    {
        totalfin = rem;
        console.log("portB " + totalfin);
    }
    
    else
    {
    totalfin = rem + port;
    console.log("portC " + totalfin);
    }
}

/// Appel successif des foncions et affichage des prix jusqu'au prix final ///

totalbrut()
document.write("<br>Prix avant remises : " + tot);
remises()
document.write("<br>prix après remise ; " + rem);
livraison()
document.write("<br>Prix total port compris : " + totalfin.toFixed(2));
