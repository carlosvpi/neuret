module.exports = function copyArray(array, target) {
	for(var i = 0, length = array.length; i < length; i++) {
		target[i] = array[i];
	}
	return target;
};
