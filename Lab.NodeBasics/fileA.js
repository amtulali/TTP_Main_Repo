// const exportsFromFileB = require('./fileB'); // note the relative file path
// console.log(exportsFromFileB);
// const exportsFromFileB = require('./fileB');
// exportsFromFileB();
// require('./fileB');
// require('./fileB'); // not a typo - actually require it twice!
//snippet 1......................

// const dogs = 'I love dogs!';
// const cats = 'I love cats!';

// module.exports.dogs = dogs;
// module.exports.cats = cats;
// console.log(dogs);
// console.log(cats);

//Snippet 2......................

// const dogs = 'I love dogs!';
// const cats = 'I love cats!';

// module.exports = {
//   dogs: dogs,
//   cats: cats,
// };

// console.log(dogs);

//Snippet 3........................
const dogs = 'I love dogs!';
const cats = 'I love cats!';

module.exports = dogs;
module.exports = cats;

console.log(dogs);
