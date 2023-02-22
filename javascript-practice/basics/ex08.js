/*
    자바스크립트 객체 3 - 확장
*/

var o = {
    name: 'dooly',
    age: 10 
}

var f = function() {
    console.log('Hello world');
}

console.log("=== 확장 =====");
o.another = {
    name: 'michol',
    age: 20,
    print:function() {
        console.log(this.name+":"+this.age);
    } 
}


console.log(o);
o.another.print();
console.log("=== 확장(function 타입) =====");
f.another = {
    name: 'michol',
    age: 20,
    print:function() {
        console.log(this.name+":"+this.age);
    } 
}

console.log(f);
f.another.print();

console.log("=== 확장 : 기본타입(primitive type)은 학장 되지 않는다. ===");
var i1= 10;
var i2 = new Number(10);

console.log(i1+":"+i2+(i1+i2));

i2.another = {
    name: 'michol',
    age: 20
}

console.log(i2);

