export default function getTimeToRead(string) {
	const wordcount = string.split(" ").length;
	return Math.round(wordcount / 240);
}
