const strArray = 'Eaysin Arafar Eloquent Javascript ETo Teach'

function countBs (str, char) {
	let output = 0
	for(let i = 0; i < str.length; i++)
	if(str[i] == char) {
		output = output + 1
	}
	return output 
}

console.log(countBs(strArray, 'a'))