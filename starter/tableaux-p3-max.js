/*
TABLEAUX - PRÉPA 3 : Maximum d'un tableau
1. Initialisez un tableau qui contient les nombres 3, 11, 7, 2, 9 et 10 ;
2. Affichez-le ;
3. Calculez et affichez ensuite la plus grande valeur présente dans le tableau
	(précédé du message "La plus grande valeur de mon tableau est …")
4. Changez quelques valeurs dans le tableau (par exemple le 9 en 90) et retestez ;

*/
const tableaux = [3, 11, 7, 2, 90, 10]

let max = tableaux.reduce(function(a,b) {
    return Math.max(a, b);
});

console.log(max);

/*
---
À ne lire que si vous n'y arrivez pas seul…
---
Aide :
	- On initialise une variable max avec le 1er élément du tableau
	- On parcourt le tableau à la recherche d'un nombre plus grand que celui-là
		en commençant au 2e élément du tableau :
		si la valeur courante est supérieur au maximum actuel,
		elle devient le nouveau maximum
	- On affiche
*/
