module.exports = function toString() {
	if (!this.next) {
		return '(' + this.inputLayer.length + ')';
	} else {
		return '(' + this.previous.toString() + ', ' + this.next.toString() + ')';
	}
};
