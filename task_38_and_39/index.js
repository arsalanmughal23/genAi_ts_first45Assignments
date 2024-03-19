"use strict";
// Task 38
console.log('> Task 38');
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi');
describe_city('Islamabad');
describe_city('Gaza', 'Palestine');
// Task 39
console.log('\n> Task 39');
function city_country(city, country = 'Pakistan') {
    return `${city}, ${country}`;
}
console.log(city_country('Lahore'));
console.log(city_country('Karachi'));
console.log(city_country('Tokyo', 'Japan'));
