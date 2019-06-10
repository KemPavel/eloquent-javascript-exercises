function every(arr, func) {
	let result = true;
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i]) === false) {
			result = false;
			break;
		}
	}
	return result;
}