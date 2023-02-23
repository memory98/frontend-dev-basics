/**
    Function.prototype.call
    Function.prototype.apply
    Function.prototype.bind
 */

var MyObject = {
    v: 'me',
    f1: function () {
        console.log(this.v);
    },
    f2: function (param1, param2) {
        console.log(param1 + " " + this.v + " " + param2 ? param2 : "");
    }
}

// 일반적인 객체의 함수 호출
MyObject.f1();

var yourObject = {
    v: 'you'
}

// apply : 호출되는 함수의 this 파라미터로 전달된 객체로 바꾼다.
MyObject.f1.apply(yourObject);
MyObject.f2("hello", "again");
// call : 호출되는 함수의 this 파라미터로 전달된 객체로 바꾼다. + 다른 파라미터도 전달할 수 있다. 
MyObject.f2.call(yourObject, "hello");
MyObject.f2.call(yourObject, "hello", "again");

// bind : 호출되기 전에 함수의 this를 파라미터로 전달된 객체로 세팅한다.
var f3 = function () {
    console.log(this.v);
}.bind(MyObject);

f3();