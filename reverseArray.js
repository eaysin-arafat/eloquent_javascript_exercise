let array = [3,4,5,6,7,8,9]

function inverseArray (arr) {
	let array = []
	for (let i = arr.length - 1; i >= 0; i--) {
		array.push(arr[i])
	}
	
	return array
}

console.log(inverseArray(array))
