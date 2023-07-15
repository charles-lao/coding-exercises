async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1


//

// works only inside async functions
let value = await promise;
