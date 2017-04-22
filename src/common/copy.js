var deepCopy = require('../../util/deep_copy')

module.exports = function copy() {
	return deepCopy(this);
};
