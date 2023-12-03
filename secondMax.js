const arr1 = [57, 45, 33, 35, 46, 100, 200, 105]

const secondMax = (arr) => {
	if(arr.length < 2) {
		console.log('array minimum number not exist')
	}
	
	let max = -Infinity
	let secondMax = -Infinity
	
for(let i = 1; i < arr.length; i++) {
	if (arr[i] > max) {
		secondMax = max
		max = arr[i]
	} else if (arr[i] > secondMax && arr[i] !== max) {
		 secondMax = arr[i]
	}
}

return secondMax

	
}
console.log(secondMax(arr1))