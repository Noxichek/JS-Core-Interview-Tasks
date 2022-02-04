const a = {};

function clear(a) {
a.a = 10;
a = null;
}

clear(a); 
console.log(a); //?

///

const obj1 = {}

function withName(obj, name) {
obj.name = name;
return obj;
}

const obj2 = withName(obj1, 'Max');
console.log(obj2.name);
console.log(obj1.name);
console.log(obj1 === obj2);


///

let a = 10;
a.b = 10;
console.log(a);


///

var x = 10;

function foo() {
console.log(x);
}

function bar(funArg) {
var x = 20;
funArg();
}

bar(foo)


///


var generator = createGenerator([1,2,5]);
generator.next(); //1
generator.next(); //2
generator.next(); //5
generator.next(); // complete!
generator.next(); // complete!


///


let a = 1;

function b() {
a = 10;

return 20;

function a() {}
}

b();

console.log(a); // ?


///


function Animal() {
// ...
}

Animal.prototype.eat = function() {
// ...
}

function Rabbit() {
// ...
}

var rabbit = new Rabbit();
rabbit.eat(); // <-- rabbit.eat is not a function


///


var obj = {
a: function () {
console.log(this.prop);
},
prop: 1
};

obj.a.prop = 2;
obj.a(); //?
var fn = obj.a;
fn(); //?


///


class A {
constructor () {
this.name = 'Viktor';
}

logName () {
console.log(this.name);
}
}

const a = new A();

const btn = document.getElementById('btn');
btn.addEventListener('click', a.logName.bind(a));


///


const wait = time => new Promise(
res => setTimeout(() => res(), time)
);

wait(200)
.then(() => new Promise(res => res('foo')))
.then(a => a)
.then(b => console.log(b))
.then(() => null)
.then(c => console.log(c))
.then(() => {throw new Error('foo');})
.then(
d => console.log(d: ${ d }),
e => console.log(e))
.then(f => console.log(f: ${ f }))
.catch(e => console.log(e))
.then(() => { throw new Error('bar'); })
.then(g => console.log(g: ${ g }))
.catch(h => console.log(h));


///


Promise.resolve('foo')
.then(Promise.resolve('bar'))
.then(result => console.log(result)); // ?


///


Promise.reject(10)
.then(value => console.log(value))
.then(value => console.log(value))
.then(
value => console.log(value),
value => 10 + 10
)
.then(value => console.log(This is ${value}))
.catch(err => console.log(Err is ${err}))


///


var a = 1;

var fn = function() {
setTimeout(function timeout() {
console.log(a ${a});
a = 2;
}, 0);

var p = new Promise(function(resolve, reject) {
console.log(b ${a});
a = 3;
resolve();
})

p.then(function() {
console.log(c ${a});
a = 4;
}).catch(function() {
console.log(d ${a});
a = 5;
}).then(function() {
console.log(e ${a});
a = 6;
})

console.log(f ${a});
}

fn();


///


