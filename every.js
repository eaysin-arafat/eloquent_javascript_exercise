function every (array, logic) {
	for(let element of array) {
	if(!logic(element)) 
		return false 
	}
	return true 
	
}

console.log(every([1,3,5,15], (n) => n < 10))