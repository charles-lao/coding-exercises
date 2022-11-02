const fibonacci = function(fibNum) {
    let fibArray = [1, 1,];

    if( fibNum > 0){

        for (let i = 2; i<fibNum; i++) {

            fibArray[i] = fibArray[i-1] + fibArray[i-2];

        }

    } else {
        return "OOPS";
    }
    
    return fibArray[--fibNum];

};

// Do not edit below this line
module.exports = fibonacci;
