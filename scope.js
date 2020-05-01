
/*
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


//list

function arrayToList(array) {
    var list = null;

    for (i = array.length - 1; i >= 0; i--)
        list = {value: array[i], rest: list};

    return list;
}

function listToArray(list) {
    var array = [];

    for (var node = list; node; node = node.rest)
        array.push(node.value);

    return array;
}

function prepend(value, rest) {
    return {value: value, rest: rest};
}

function nth(list, n) {

    if (n === 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}

// equal


function deepEqual(obj1, obj2) {
    // Check if both values are equivalent
    if (obj1 === obj2) return true;

    if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") return false;

    var propsObj1 = 0, propsObj2 = 0;

    for (var prop in obj1)
        propsObj1++;

    for (var prop in obj2) {
        propsObj2++;

        if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
            return false;
    }

    return propsObj1 === propsObj2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

// → true


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

x1 is:undefined
scope.js:28 x2 is:20
scope.js:32 x3 is:30
scope.js:34 x4 is:30
scope.js:38 x5 is:50
scope.js:41 x6 is:40
scope.js:45 x7 is:10





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




x = 1;
var a = 5;
var b = 10;

var c = function (a, b, c) {
    document.write(x);
    document.write(x);
    var f = function (a, b, c) {
        b = a;
        document.write(b);
        b = c;
        var x = 5;
    }
    f(a,b,c);
    document.write(b);
    var x = 10;
}
c(8,9,0);
document.write(b);
document.write(x);
}



var x = 9 ;
function myFunction() {
    return x * x;
}
document.write(myFunction());
x= 5;
document.write(myFunction());

*/

//var foo =1 ;
var x= 10;
function bar(){
  //  alert(!10);

    if(!x){
        var x =10 ;
    }
    alert(x);
}
bar();