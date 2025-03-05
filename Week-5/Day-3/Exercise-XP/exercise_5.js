class Dog {
    constructor(name) {
      this.name = name;
    }
  };
    
// 1 -- Missing the 'super' required keyword

// class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };

// 3 -- Missing the required paramater 'name' in the constructor function
//
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };

// 4 -- the parameter 'name' should be initialized via the super-class,
// not via the subclass Labrador
//
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };

// 2 -- the correct option
//
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };