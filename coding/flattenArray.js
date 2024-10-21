const arr = [1, 2, [3, 4, [5]]];

// using methods
const flatarr = arr.flat().flat();
console.log(flatarr);

// using reduce and concat methods
const flatArr1 = arr.reduce(
  (acc, current) => acc.concat(Array.isArray(current) ? current : [current]),
  []
);
console.log(flatArr1);
