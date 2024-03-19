"use strict";
function storeCarInfo(make, model, options) {
    let car = { make, model, ...options };
    return car;
}
console.log(storeCarInfo('Honda', 'civic', { arbitrary_number: 1111, color: "every", gear_transmission: 'auto' }));
console.log(storeCarInfo('Daihatsu', 'mira', { arbitrary_number: 1112 }));
console.log(storeCarInfo('Daihatsu', 'mira'));
