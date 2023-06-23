type stringOrNumber = string | number 

type product= {
    id: stringOrNumber,
    names:string,
    onStock: boolean,
}
const minaCare:product={
    id: 'pro001',
    names: 'Shampoo',
    onStock: true,
}
function cosmetics(hairCare:product){
    return `We have ${hairCare.names} with id number ${hairCare.id} and is on stock: ${hairCare.onStock}`
}
console.log(cosmetics(minaCare));