const a = 1;
const b = true;
const c = '123str';

console.log(c + b);
console.log(c + a);
console.log(a + b);

console.log(c * b);
console.log(c * a);
console.log(a * b);

console.log(c / b);
console.log(c / a);
console.log(a / b);

console.log(String(a)); 
console.log(String(b)); 

console.log(Number(b)); 
console.log(Number(c)); 

console.log(Boolean(a)); 
console.log(Boolean(c)); 

var str = 'abracadabraamtrbacd';
var str2=[{'a':'b'}, {'a':'b'};
for(let i = 0; i< str.length; i++ ){
    if(str[i] == 'a'){
        str2 = str2.concat('b');
    }
    else if (str[i] == 'b'){
        str2 = str2.concat('c');
    }
    else if (str[i] == 'c'){
        str2 = str2.concat('a');
    }
    else{
        str2 = str2.concat(str[i]);
    }
}
console.log("f", str);
console.log("f", str2);

str = str.replace(/a/g, '*')
.replace(/b/g, '+')
.replace(/c/g, '-');
console.log("f", str);
str = str.replace(/\*/g, 'b')
.replace(/\+/g, 'c')
.replace(/-/g, 'a');
console.log("f", str);

