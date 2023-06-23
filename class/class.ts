class Human{
    name:string;
    age:number;
    isAvailable:boolean;

    constructor(name:string,age:number, isAvailable:boolean){
        this.name = name; this.age = age; this.isAvailable = isAvailable;
    }
   person(){
        return `My name is ${this.name} and I am ${this.age} years old and am I taller than Jery? ${this.isAvailable}`
    }
}

class City extends Human{
        constructor(LGA:string,postalCode:number, University:boolean){
            super(LGA,postalCode,University)
        }
        user(){
            return`Welcome to ${this.name}, the postal code number is ${this.age}, and does it have a university? ${this.isAvailable}`
        }
}

let User = new Human('John', 28, false);
console.log(User.person());
let placeInfo = new City('Accra', 553441, true);
console.table(placeInfo.user());