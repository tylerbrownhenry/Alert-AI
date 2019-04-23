const NaturalSynaptic = require('natural-synaptic');
const classifier = new NaturalSynaptic();
const data = require('./trainingdata/validation/data');
const randomData = require('./trainingdata/random/data');

for (let index = 0; index < data.length; index++) {
    classifier.addDocument(data[index],'validationError');
    classifier.addDocument(randomData[index],'random');
}

classifier.train();

console.log(classifier.classify('did the tests pass?')); 
console.log(classifier.classify('did you buy a new drive?')); 
console.log(classifier.classify('What is the capacity?')); 
console.log(classifier.classify('Lets meet tomorrow?')); 
console.log(classifier.classify('Can you play some stuff?')); 
console.log(classifier.classify('wrong password')); 
console.log(classifier.classify('invalid password'));
