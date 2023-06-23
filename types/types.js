var minaCare = {
    id: 'pro001',
    names: 'Shampoo',
    onStock: true,
};
function cosmetics(hairCare) {
    return "We have ".concat(hairCare.names, " with id number ").concat(hairCare.id, " and is on stock: ").concat(hairCare.onStock);
}
console.log(cosmetics(minaCare));
