for(let i = 1 ; i <= 100; i++) {
	let output = ''
		if (i % 3 === 0) {
		output += 'buzz'
	} 
	if (i % 5 === 0) {
		output += 'fizz'
	}
	console.log( output || i)
}

