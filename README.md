# JS-Core-Interview-Tasks

const a = {};

function clear(a) {
a.a = 10;
a = null;
}

clear(a); 
console.log(a); //?



const obj1 = {}

function withName(obj, name) {
obj.name = name;
return obj;
}

const obj2 = withName(obj1, 'Max');
console.log(obj2.name);
console.log(obj1.name);
console.log(obj1 === obj2);
