var x = 1; 
var y = 3; 
var list = {0:0, 1:0, 2:0};
x in list; //true 
y in list; //false 
1 in list; //true 
y in {3:0, 4:0, 5:0}; //true