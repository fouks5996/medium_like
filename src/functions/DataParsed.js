export default function dataParsed(date, length) {
	return new Date(date).toLocaleDateString("en-GB", {
		month: length,
	});
}
