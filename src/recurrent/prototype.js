module.exports = {
	run: require('./run'),
	backpropagation: require('./backpropagation'),
	toString: require('./to_string'),
	concat: require('../common/concat'),
	recurrentConcat: require('../common/recurrent_concat'),
	train: require('../common/train'),
	copy: require('../common/copy')
};
