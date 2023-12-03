function zeroPad (number, width) {
	let string = String(number)
	
	while (string.length < width) {
		string = '0' + string
	}
	return string
}

function print (cows, pigs) {
	console.log(zeroPad(cows, 3))
	console.log(zeroPad(pigs, 3))
}

print(7, 16)