module.exports = function getOrElse(path, object, defaultValue) {
	const length = path.length;
	var result = object;

	for (var i = 0; i < length && result !== undefined; i++) {
		result = result[i];
	}

	return result || defaultValue;
}