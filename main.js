/* exercice 1
const a = 20;
for (let i = 20; i >= 0; i -= 2) {
console.log(i);
}

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
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
tab.length[i];
console.log(tab);
}*/
var result = '';
for (var i = 1; i < 11; i++) {
  for (var j = 1; j < 11; j++) {
    result += ' '.repeat(3 - (i * j).toString().length) + (i * j) + ' ';
  }
  result += '\n';
}
console.table(result);
