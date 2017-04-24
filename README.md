# Neuret: Neural Networks in NodeJS

## Install

`npm install neuret --save`
`yarn install neuret --save`

## Create a Neural Network

Start by creating the layers. Function `Layer` takes the number of neurons in the layer.

Layer(number of neurons[, inputFormat, outputFormat])
- number of neurons: number of neurons of the layer
- inputFormat: function that formats the input. Defaults to `d => d`
- outputFormat: function that formats the output. Defaults to `d => d`

Example:
```javascript
var Layer = require('neuret/src/layer');
var layer1 = Layer(8);
var layer2 = Layer(16);
var layer3 = Layer(8);
```

A layer is already a neural network.

To build larger neural networks, concatenate them (so the output of one is the input of the next) with:
- concat: concatenates neural networks.
- recurrentConcat: concatenates neural networks so that the second one is recurrent (AKA, it's output is part of its input).

/Neural Network 1/.concat(/Neural Network 2/ [, weights])
- /Neural Network 1/: input neural network
- /Neural Network 2/: output neural network
- weights: array of weights to connect /Neural Network 1/ with /Neural Network 2/. Defaults to random.

Example:
```javascript
var feedForward = layer1.concat(layer2).conact(layer3);
var recurrent1 = layer1.recurrentConcat(layer2).concat(layer3);
var recurrent2 = layer1.recurrentConcat(layer2.concat(layer3));
var recurrent3 = layer1.recurrentConcat(layer2).recurrentConcat(layer3);
var recurrent4 = layer1.recurrentConcat(layer2.recurrentConcat(layer3));
```

## Run a Neural Network

Call method `run`:
/Neural Network/.run([input])
- /Neural Network/: neural network to run
- input: input for the neural network. If `undefined`, the neural network runs on whatever the value of its input layer.

Example
```javascript
var result = feedForward.run([1, 1, 1, 0, 0, 0, 1, 0]);
```

## train a Neural Network

### Unit train

Train a neural network to learn a function F: input -> output.
/Neural Network/.train(samples[, threshold, alpha, callback])
- /Neural Network/: neural network to train. Weights and values will change
- threshold: Error value to reach. Defaults to 0.05
- alpha: training constant. Defaults to 0.05
- callback: logging function that takes totalError, the timestamp at the beginning of the computation, the number of iterations (passes through all the samples) and the threshold.

Example
```javascript
var sampleSet = [
    { input: [0, 0, 0, 0, 0, 0, 0, 0], output: [0, 0, 0, 1, 0, 0, 0, 1] },
    { input: [0, 0, 0, 0, 0, 0, 1, 0], output: [1, 1, 0, 1, 1, 0, 0, 1] }
];
feedForward.train(sampleSet);
```

### Sequence train

*Comming soon*

Train a neural network to learn a function: [input] -> [output].
/Neural Network/.trainSequence(samples[, threshold, alpha, callback])
- /Neural Network/: neural network to train. Weights and values will change
- threshold: Error value to reach. Defaults to 0.05
- alpha: training constant. Defaults to 0.05
- callback: logging function that takes totalError, the timestamp at the beginning of the computation, the number of iterations (passes through all the samples) and the threshold.

Example
```javascript
var sequenceSet = [
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 1]
    ]
];
feedForward.train(sequenceSet);
```
