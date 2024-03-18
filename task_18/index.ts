let places:string[] = ['kashmir', 'abbottabad', 'maldives', 'skardu', 'disney-land'];
console.log("Original order:", places);

console.log("\nAlphabetical order:", [...places].sort());
console.log("Original order:", places);

console.log("\nReverse Alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);

places.reverse();
console.log("\nReverse Alphabetical order & saved:", places);
places.reverse();
console.log("\Reverse Again Alphabetical order & saved:", places);

places.sort();
console.log("\nAlphabetical order:", places);

places.reverse();
console.log("Reverse Alphabetical order:", places);
