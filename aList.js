function arrayToObject (array) {
	let object = null
	
	for(let i = array.length - 1; i >= 0; i--) {
		object = { value : array[i], rest: object}
	}
	return object
}

function objectToArray (object) {
	let array = []
	
	for(let node = object; node; node = node.rest) {
		array.push(node.value)
	}
	return array
}

const obj = {
  "value": 10,
  "rest": {
    "value": 20,
    "rest": null
  }
}

console.log(arrayToObject([10]))
console.log(objectToArray(obj))