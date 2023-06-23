var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age, isAvailable) {
        this.name = name;
        this.age = age;
        this.isAvailable = isAvailable;
    }
    Human.prototype.person = function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old and am I taller than Jery? ").concat(this.isAvailable);
    };
    return Human;
}());
var City = /** @class */ (function (_super) {
    __extends(City, _super);
    function City(LGA, postalCode, University) {
        return _super.call(this, LGA, postalCode, University) || this;
    }
    City.prototype.user = function () {
        return "Welcome to ".concat(this.name, ", the postal code number is ").concat(this.age, ", and does it have a university? ").concat(this.isAvailable);
    };
    return City;
}(Human));
var User = new Human('John', 28, false);
console.log(User.person());
var placeInfo = new City('Accra', 553441, true);
console.table(placeInfo.user());
