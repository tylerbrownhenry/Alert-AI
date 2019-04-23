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
//     validationError: 0, // no more error
//     scriptChangedLastRun: 0, //script was not changed
// },
// {
//     statusIsError: 0, 
//     htmlChangedSinceErrorBegan: 0,
//     validationError: 0,
//     scriptChangedLastRun: 0,
// }];

// module.exports = [
//     1,
//     2,
//     1,
//     1]2;
let arr = [];

    // const resultMap = {
    //     1241: 1,
    //     2241: 1,
    //     1242: .75,
    //     1211: 0
    // };
    
    
    for (let index = 0; index < 100000; index++) {
    //    arr.push([1211,[resultMap[1211]]]);
       arr.push([
        [1,2,1,1],[0]
        ]);
    }
    
    module.exports = arr;
    