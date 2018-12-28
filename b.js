// b.js

// What things would you want to export???
//

/**
 * Configuration Object
 * module.exports = {}
 *
 * Collection of functions
 * module.exports = {}
 *
 * lodash
 */

/**
 * Export class
 * module.exports = Person
 */

class Person {
  hi() {
    console.log('Helloo');
  }
}


/**
 * Singleton
 * 
 */
console.log("Creating a new person");
// module.exports = new Person();

/**
 *
 */

module.exports = function() {
  return Math.random();
}










