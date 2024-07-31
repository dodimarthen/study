let array = [0, 1, 2, 3, 4];
// expected output [1, 2, 3, 4, 5]

for (let index = 0; index < array.length; index++) {
  array[index] += 1;
}
console.log(array);
// add 1 to each element
