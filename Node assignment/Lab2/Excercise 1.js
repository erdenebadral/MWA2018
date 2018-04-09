Array.prototype.even = function(){
    return this.filter(val=>{
        return val%2===0;
    });
};
Array.prototype.odd = function(){
    return this.filter(val=>{
        return val%2!==0;
    });
};
let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray.even());
console.log(myArray.odd());