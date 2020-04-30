let arrayx = [3, 4, 5, 6];
console.log(arrayx.reverse());


function reverseArray(arr) {
    console.log(arr.reverse());

}

console.log(reverseArray([1, 2, 3, 4, 'a', 'b', 'ab']));

function f() {
    console.log(bar); //undefined
    var bar = "abc";
    console.log(bar); //abc
}


let reverseArrayInPlace = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        //Swap the elements
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }

    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
}


let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);


function init() {
    const name = "Mozilla";

    function displayName() {
        console.log(name);
    }

    displayName();
}

init();


// practice from slides for studying and revision

var x = 10;

function ma() {

    console.log("x1 is:" + x); // undefined
    x = 20;

    console.log("x2 is:" + x); //20

    if (x > 0) {
        var x = 30;
        console.log("x3 is:" + x);  //30
    }
    console.log("x4 is:" + x); //30

    var x = 40;
    var f = function (x) {
        console.log("x5 is:" + x);
        50
    };
    f(50);

    console.log("x6 is:" + x);  //50
}

ma();
console.log("x7 is:" + x); // 10

/*
x1 is:undefined
scope.js:28 x2 is:20
scope.js:32 x3 is:30
scope.js:34 x4 is:30
scope.js:38 x5 is:50
scope.js:41 x6 is:40
scope.js:45 x7 is:10
*/


//

function f() {
    var a = 1, b = 20, c;
    console.log(a + " first line " + b + " " + c);

    function g() {
        var b = 300, c = 4000;
        console.log(a + " second line  " + b + " " + c);

        a = a + b + c;
        console.log(a + " third line " + b + " " + c);
    }

    console.log(a + " four line " + b + " " + c);
    g();
    console.log(a + " five line " + b + " " + c);
}

f();