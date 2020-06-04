

(function (){
    "use strict";

    let init = function(){
        document.getElementById("start").onclick =start;
    };

    let bicyclePrototye , mountainBikePrototype;
    const createBicyclePrototye  = function () {
        return {
            speed: 2,
            applyBrake: function (increment) {
                this.speed += increment
            },
            speedUP: function (decrement) {
                this.speed -= decrement
            }
        }
    };
    let createMountainBikeProtoype = function (proto) {
            var obj = Object.create(proto);
            obj.gear = 1;
            obj.setGear = function (val) {
                this.gear = val;
            };
            return obj;
        };

    let start = function () {
            bicyclePrototye = createBicyclePrototye();
            mountainBikePrototype = createMountainBikeProtoype(bicyclePrototye);
            mountainBikePrototype.isPrototypeOf(createMountainBikeProtoype)
            console.log(mountainBikePrototype.speed);
            console.log(mountainBikePrototype.speedUP(0));
            console.log(bicyclePrototye.speed);
            bicyclePrototye.applyBrake(5);
            bicyclePrototye.speedUP(5);
            console.log(bicyclePrototye.speed);
           console.log(mountainBikePrototype.speed);

        };
        window.onload = init;


    })();
