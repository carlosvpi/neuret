module.exports = function() {
	var s = '[';
	if (!this.next) {
		s += this.inputLayer.length;
	} else {
		s += this.previous.toString() + ', ' + this.next.toString();
	}
	return s + ']';
};
