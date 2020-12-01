

function tableMultiplication()
{
    /// Saisie d'un multiplicateur ///
    multiplicateur = (window.prompt("Entrez un multiplicateur"));  
    
    /// Une boucle créé et affiche la table de multiplication, jusqu'à 10 itérations ///

    for (i=1; i<=10; i++)
    {
        result=i*multiplicateur;
        document.write(i + "x" + multiplicateur + " = " + result + "<br>");
    }
    return
}

tableMultiplication();