parseInt(0.5);      // => 0
parseInt(0.05);     // => 0
parseInt(0.005);    // => 0
parseInt(0.0005);   // => 0
parseInt(0.00005);  // => 0
parseInt(0.000005); // => 0


String(0.5);      // => '0.5'
String(0.05);     // => '0.05'
String(0.005);    // => '0.005'
String(0.0005);   // => '0.0005' 
String(0.00005);  // => '0.00005'
String(0.000005); // => '0.000005'
String(0.0000005); // => '5e-7'


parseInt(0.0000005); // => 5
// same as
parseInt(5e-7);      // => 5
// same as
parseInt('5e-7');    // => 5



Math.floor(0.5);      // => 0
Math.floor(0.05);     // => 0
Math.floor(0.005);    // => 0
Math.floor(0.0005);   // => 0
Math.floor(0.00005);  // => 0
Math.floor(0.000005); // => 0
Math.floor(0.0000005); // => 0



Math.floor(-0.00005) //-> -1
Math.trunc(-0.00005) //-> -0

Unlike the other three Math methods: Math.floor(), Math.ceil() and Math.round(), the way Math.trunc() works is very simple. 
It truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.