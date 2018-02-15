function reverseNumber(n) {
	let a=n.toString();
	let b=a.split('').reverse().join('');
	let c=parseInt(b);
	if (n<0) return -c;
	return c;
}