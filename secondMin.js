const arr1 = [57, 45, 33, 35, 46, 100, 200, 105]

const secondMin = (arr) => {
	if(arr.length < 2) {
		console.log('array minimum number not exist')
	}
	
	let min = Infinity
	let secondMinimun = Infinity 
	
for(let i = 0; i < arr.length; i++) {
	if (arr[i] < min) {
		secondMinimun = min
		min = arr[i]
	} else if (arr[i] < secondMinimun && arr[i] !== min) {
		 secondMinimun = arr[i]
	}
}

return secondMinimun

	
}
console.log(secondMin(arr1))