// module.exports = [{
//     statusIsError: 0,
//     htmlChangedSinceErrorBegan: 0,
//     validationError: 0,
//     scriptChangedLastRun: 0,
// },
// {
//     statusIsError: 0,
//     htmlChangedSinceErrorBegan: 0,
//     validationError: 1, //error thrown
//     scriptChangedLastRun: 0,
// },
// {
//     statusIsError: 0,
//     htmlChangedSinceErrorBegan: 0,
//     validationError: 1, // no more error
//     scriptChangedLastRun: 1, //script was change
// },
// {
//     statusIsError: 0, 
//     htmlChangedSinceErrorBegan: 0,
//     validationError: 1,
//     scriptChangedLastRun: 0,
// }]

// module.exports = [
//     1, // All Good
//     2, // Error
//     3, // All Good, after  change
//     2] // Error
let arr = [];
    // const resultMap = {
    //     1241: 1,
    //     2241: 1,
    //     1242: .5,
    //     1211: 0
    // };
    
    
    // for (let index = 0; index < 100000; index++) {
    //    arr.push([1242,[resultMap[1242]]]);
    // }

    for (let index = 0; index < 100000; index++) {
        //    arr.push([1211,[resultMap[1211]]]);
            arr.push([
                [1,2,4,2],[0.5]
            ]);
    }

    // for (let index = 0; index < 100000; index++) {
    //     //    arr.push([1211,[resultMap[1211]]]);
    //         arr.push([
    //             [1,0],[0.5]
    //         ]);
    // }

module.exports = arr;
    