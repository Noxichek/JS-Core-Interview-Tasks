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


"const a = 1;

function foo() {
   console.log(a);
}

function bar() {
   const a = 2;
   foo();
}

bar(); // ???"

"function closure() {
   return (function(){
       var arr = [];
       for(var i = 0; i < 10; i++){
           arr.push(function(){
               return i;
           });
       }
       return arr;
   })()
} 

closure()[3]() === 3 // ???"

"for (var i = 0; i < 10; i++){
 setTimeout(function(){
   console.log(i);
 }, 1000);
}
"

"var a = 1;

function b() {
    a = 10;
    return;
    function a() {}
}
b();

console.log(a); // что выведет и почему"

"function varTest() { 
    for (var i = 0; i < 3; i++) { 
        console.log(i); 
    } 

    console.log(i); 
} 

varTest();"

Контекст

"var a = {
       b: 5,
       getB: function() {
           return this.b;
       }
   };
console.log(a.getB())   //???
var fn = a.getB;
console.log(fn())          // ???
"

"var obj = {
    a: function(){
        console.log(this.prop);
    },
    prop: 1
};
 
obj.a.prop = 2; 
obj.a();               //?
var fn = obj.a;  
fn();                   //?
"


Прототипы

"vаr a = { b: 1 },
c = Object.create(а);
  
console.log(c.b); //?
delete с.b;
сonsole.log(c.b); //?
delete a.b;
сonsole.log(с.b); //?"

"var a = {aa: 5};
var b = Object.create(a);
delete b.aa;   
console.log(b.aa); // ???
delete a.aa;
console.log(b.aa); // ???
"

"var obj = {
    a: 5,
    b: {
        c: 10
    }
};

obj.proto = {
    a: 10,
    b: {
        c: 20
    }
};

delete obj.a;
console.log(obj.a);   // ???

delete obj.a;
console.log(obj.a);   // ???

delete obj.b;
console.log(obj.b.c); // ???

delete obj.b.c;
console.log(obj.b.c); // ???
"


Объекты

"var a = {};
function clear(a) {
  a.b = 2;
  a = null;
}
clear(a);

console.log(a);     //?
console.log(a.b);  //?"

"var arr = [1,2]
var brr = arr;
brr = [42,43]
arr[0]              //?"
"var arr = [1,2]
var brr = arr;
brr[0] = 42
arr[0]               //?"

"var a={};
b={key:'b'};                  
c={key:'c'};                
a[b]=123;             
a[c]=456;      
          
console.log(a[b]);         //???
"


Промисы

"1) 
p.then(()=>console.log(1))
.catch(()=>console.log(2));

2)   
p.catch(()=>console.log(2))
.then(()=>console.log(1));

В чем разница и как будет работать при resolve и reject?
"

"doSomething().then(function () {
   throw new Error();
})
.catch(() => {
   return  Promise().reject();
})
.then(finalHandler);

Объяснить порядок"

"Promise.reject('a')               
.catch(p => p + 'b')           
.catch(p => p + 'с')
.then(p => p + 'd')                
.finally(p => p + 'e')               
.then(p => console.log(p))    
console.log('f');

//Что выведет и в каком порядке?"


Остальное
"const a = '123';
const b = true;
b && a         // ??? и почему"

"const a = '123';
const b = false;
b || a         // ??? и почему
