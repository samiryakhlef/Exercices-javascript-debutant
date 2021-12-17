/* exercice 1
const a = 20;
for (let i = 20; i >= 0; i -= 2) {
console.log(i);
}*/

// exercice 2
function premier(nbr) {
    for (let i = 2; i < nbr; i++) {
        if (nbr % i === 0) {
            return false;
        }
    }
    console.log(nbr);
    return nbr;
}
for (let nbr = 1; nbr <= 100; nbr++) {
    premier(nbr);
}

// exercice 3