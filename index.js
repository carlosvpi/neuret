var trainingCallback = require('./util/training_callback');

var L = L || require('./src/layer');

nn = L(3).concat(L(3)).concat(L(3));

console.log('Training: ' + nn);

nn.train([
	{input: [1,1,0], target: [1,1,1]},
	{input: [1,0,0], target: [1,1,0]},
	{input: [0,1,0], target: [0,1,1]}
	], undefined, undefined, trainingCallback);

console.log(nn.run([1,1,0]));
console.log(nn.run([1,0,0]));
console.log(nn.run([0,1,0]));
console.log('-------------');
console.log('');

var r = L(3).recurrentConcat(L(3));

console.log('Training: ' + r);

r.train([
	{input: [1,1,0], target: [1,1,1]},
	{input: [1,0,0], target: [1,1,0]},
	{input: [0,1,0], target: [0,1,1]}
	], undefined, undefined, trainingCallback);

console.log(r.run([1,1,0]));
console.log(r.run([1,0,0]));
console.log(r.run([0,1,0]));
console.log('-------------');
console.log('');

// var rs = L(3).rTo(L(5).to(L(3)));
// console.log('Training: ' + rs.toString());

// rs.trainSequence([
// 	[[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]]
// 	// [[1,0,0],[0,1,1],[0,0,0]]
// 	// [[0,1,1],[0,1,0],[1,1,1]],
// 	// [[0,0,0],[1,1,1],[1,0,0]]
// 	]);

// console.log(rs.runSequence(8));
// // console.log(rs.runSequence(2, [[1,0,0]]));

// console.log('-------------');
// console.log('');

// var snn = L(8).rTo(L(10).to(L(8)));
// console.log('Training: ' + snn);

// snn.trainSequence([
// 	'carlos',
// 	'vazquez',
// 	'perez',
// 	'inigo'
// 	]);

// console.log(snn.runSequence(6, 's'))