var evenNumbers = [];
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (var num of array) {
	if (num % 2 === 0) {
		evenNumbers.push(num);
	}
}
console.log(evenNumbers);

