let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
for(x in z) {
    console.log(z[x]);
}

const age = 100;
const people = ['Nando', 'Sita'];

const fullNames = people.map(name => `${name} Hidayat`);

for(const person of people) {
    console.log(person);
}