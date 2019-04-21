const brain = require('brain.js');
const net = new brain.NeuralNetwork();

const exact = require('./trainingdata/exact/monitor1') ;
const notexact = require('./trainingdata/notexact/monito2') ;
const partial = require('./trainingdata/partial/monitor3') ;

net.train([{input: exact, output: { changedScript: 1 }},
           {input: notexact, output: { didNotChangeScript: 1 }},
           {input: partial, output: { didNotChangeScript: 1 }}]);

const output = net.run(exact);  // { white: 0.99, black: 0.002 }
console.log('output',output);