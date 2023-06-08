const myDiv = document.querySelector("div#myDiv");

myDiv.addEventListener("click", function(e) {
    console.log("You clicked me!", e);
});

const array = [1,2,3,4];

array.forEach(callback);

function callback(arg) {
    console.log(arg*2);
}



// promise

new Promise(function(resolve, reject) {
    setTimeout(function() { resolve(10); }, 2000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2;})
.then(function(num) { console.log('last then: ', num); });



// other type of promise

const promise = fetch("data/dogs.json")
.then(resp => resp.json())
.then(data => console.log(data))

console.log("Our promise: ", promise);