const synaptic = require('synaptic'); // this line is not needed in the browser
const Neuron = synaptic.Neuron;
const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;
const Architect = synaptic.Architect;
    
const inputLayer = new Layer(8);
const hiddenLayer = new Layer(16);
const outputLayer = new Layer(8);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

let patterns = {
    success: [0,0,0,0],
    error: [0,0,1,0],
    successChange: [0,0,0,1],
    errorChange: [0,0,1,1],
};

let paths = {
    normal: [{
            input:  patterns.success.concat(patterns.success),
            output: patterns.success.concat(patterns.success),
        },
        {
            input:  patterns.success.concat(patterns.success),
            output: patterns.success.concat(patterns.success),
        },
        {
            input:  patterns.success.concat(patterns.success),
            output: patterns.success.concat(patterns.success),
        }],
    ideal: [{
            input:  patterns.success.concat(patterns.error),
            output: patterns.successChange.concat(patterns.success),
        },
        {
            input:  patterns.error.concat(patterns.error),
            output: patterns.successChange.concat(patterns.success),
        },
        {
            input:  patterns.errorChange.concat(patterns.error),
            output: patterns.successChange.concat(patterns.success),
        }],
    inconclusive: [{
            input:  patterns.success.concat(patterns.error),
            output: patterns.errorChange.concat(patterns.success),
        },
        {
            input:  patterns.error.concat(patterns.error),
            output: patterns.successChange.concat(patterns.error),
        },
        {
            input:  patterns.success.concat(patterns.error),
            output: patterns.successChange.concat(patterns.error),
        }],
    inaccurate: [{
            input:  patterns.success.concat(patterns.error),
            output: patterns.errorChange.concat(patterns.error),
        },
        {
            input:  patterns.error.concat(patterns.error),
            output: patterns.errorChange.concat(patterns.error),
        },
        {
            input:  patterns.error.concat(patterns.success),
            output: patterns.errorChange.concat(patterns.error),
        }]
}

let keys = ['normal','ideal','inconclusive','inaccurate'];

var min=0; 
var max=keys.length; 

const randomNumer = (max, min)=>{
    return Math.floor(Math.random() * (+max - +min)) + +min; 
}

let learningRate = .01;
let arr = [];
const errorOccurance = randomNumer(0,3);

const chances = {
    normal: 1000,
    ideal:70,
    inconclusive: 10,
    inaccurate: 10
};

let changes = [];
let chancesTotal = 0;
for (let i = 0; i < keys.length + 1; i++) {
    for (let e = 0; e < chances[keys[i]]; e++) {
        changes.push(keys[i]);
        chancesTotal++;
    }
}

for (let i = 0; i < 10000000; i++) {
    const idx = randomNumer(0,3);
    const key = changes[randomNumer(0,chancesTotal)];
    let path = paths[key][idx];
    myNetwork.activate(path.input);
    myNetwork.propagate(learningRate, path.output);
}

const calcNum = (num)=>{
    // return Math.round(((num) * 10).toFixed(2) / 10);
    return (num);
}

const resultLog = (label,res)=>{
    // console.log(label,'(0 ->', calcNum(res[2]) < 0.1, ') (1 ->', Math.round(calcNum(res[3])) === 1, ')');
    console.log(label,'(0 ->', calcNum(res[2]), ') (1 ->', (calcNum(res[3])), ')');
};

resultLog('ideal',myNetwork.activate(paths.ideal[0].input));  // 1
resultLog('inaccurate',myNetwork.activate(paths.inaccurate[1].input));  // 1
resultLog('inclusive',myNetwork.activate(paths.inconclusive[1].input));  // 1
resultLog('normal',myNetwork.activate(paths.normal[0].input));  // 1