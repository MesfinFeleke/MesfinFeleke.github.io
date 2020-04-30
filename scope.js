
let arrayx = [3,4,5,6];
console.log(arrayx.reverse());


function reverseArray(arr) {
    console.log(arr.reverse());

}
console.log(reverseArray([1,2,3,4,'a','b','ab']));

function f(){
    console.log(bar); //undefined
    var bar = "abc";
    console.log(bar); //abc
}






function f() {
    var a = 1, b = 20, c;
    console.log(a + " " + b + " " + c);
    function g() {
        var b = 300, c = 4000;
        console.log(a + " " + b + " " + c);
        a = a + b + c;
        console.log(a + " " + b + " " + c); }
    console.log(a + " " + b + " " + c);
    g();
    console.log(a + " " + b + " " + c);
} f();