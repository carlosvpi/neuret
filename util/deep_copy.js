const arrayConstructor = [].constructor;
const objectConstructor = {}.constructor;

function deepCopy(element) {
	var result;

	if (element.constructor === arrayConstructor) {
		const length = element.length;

		result = Array(length);

		for (var i = 0; i < length; i++) {
			result[i] = deepCopy(element[i]);
		}
	} else if (element.constructor === objectConstructor) {
		result = {};

		for (var i in element) {
			result[i] = deepCopy(element[i]);
		}
	} else {
		result = element;
	}

	return result;
}

module.exports = deepCopy;
