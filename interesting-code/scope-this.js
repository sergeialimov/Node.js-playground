function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  // Частный метод, видимый только из этого конструктора 
  function calcFullName() {
     return firstName + " " + lastName;    
  }

  // Публичный метод, доступный каждому 
  this.sayHello = function () {
      alert(calcFullName());
  }

}
//Использование:
var person1 = new Person("Bob", "Loblaw");
person1.sayHello();

// Так не получится, поскольку метод не виден из этой области
alert(person1.calcFullName());