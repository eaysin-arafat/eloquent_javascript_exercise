function isEven (n) {
	if (Number.isInteger(n / 2)) {
		return true
	}
	return false
}

console.log(isEven(-1))