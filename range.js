function range (a, b, c = 1) {
	let arr = []
	
	for (let i = a; i <= b; i+=c) {
		arr.push(i)
	}
	return arr
}



function sum (arr) {
	let result = 0
	
	for (let i = 0; i <= arr.length; i++) {
		result += i
	}
	
	return result
}

console.log(sum(range(1, 10, 1)))