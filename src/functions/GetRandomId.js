export function getRandomArbitrary(min, max) {
	let number = Math.random() * (max - min) + min;
	return Math.round(number);
}
