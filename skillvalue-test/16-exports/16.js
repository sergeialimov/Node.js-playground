/**
 * What's the difference between two exports
 * 
 * The answer example is an instance and Example is a class
 */

 class Example {
  constructor(incomming) {
    console.log('called');
    this.param = incomming;
  }
}

module.exports.example = new Example(1);
module.exports.Example = Example;
