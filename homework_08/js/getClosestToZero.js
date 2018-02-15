function getClosestToZero() {
	let k=undefined;
	for (let i = 0; i < arguments.length; i++) {
		if (k===undefined || Math.abs(arguments[i])<=Math.abs(k)) {
			k = arguments[i];
		} 
	}
	return k;
}