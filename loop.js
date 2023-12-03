const loop = (start, end, update, body) => {
	
	for(let value = start; end(value); value = update(value)) {
		body(value)
	}
}

loop(5, n => n > 0, n => n - 1, console.log)