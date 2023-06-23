function addNum(a:number, b:number){
     return a + b;
}
console.log(addNum(5,8));

const checkNum = (a:number, b:number, c?:number):number =>{
    if(c){
        return a + b + c;
    }
    else{
        return a+b; 
    }
}
console.log(checkNum(5,8,6));