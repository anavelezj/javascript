//One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, 
//whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

let message = "Hello!";
let phrase = message;

//As a result we have two independent variables, each one storing the string "Hello!".

//Objects are not like that.
//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

let user = {
    name: "John"
  };

//The object is stored somewhere in memory , while the user variable has a “reference” to it.
//When we perform actions with the object, e.g. take a property user.name, 
//the JavaScript engine looks at what’s at that address and performs the operation on the actual object.

//When an object variable is copied, the reference is copied, but the object itself is not duplicated.
let user1 = { name: "John" };
let admin = user; // copy the reference
//Now we have two variables, each storing a reference to the same object:

admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

//It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. 
//Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.

//Comparison by reference

//Two objects are equal only if they are the same object.
//For instance, here a and b reference the same object, thus they are equal:
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//And here two independent objects are not equal, even though they look alike (both are empty):
let a1 = {};
let b1 = {}; // two independent objects

alert( a1 == b1 ); // false

//For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, objects are converted to primitives. 
//An important side effect of storing objects as references is that an object declared as const can be modified.

const user3 = {
    name: "John"
  };
  user3.name = "Pete"; // (*)
  alert(user3.name); // Pete

//In other words, the const user gives an error only if we try to set user=... as a whole.

//Cloning and merging, Object.assign

//So, copying an object variable creates one more reference to the same object.
//But what if we need to duplicate an object?
//We can create a new object and replicate the structure of the existing one, 
//by iterating over its properties and copying them on the primitive level.


let user4 = {
    name: "John",
    age: 30
  };
  
let clone = {}; // the new empty object
  
// let's copy all user properties into it
for (let key in user4) {
    clone[key] = user4[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
  
alert( user4.name ); // still John in the original object

//We can also use the method Object.assign.
//the syntax is:

Object.assign(dest, ...sources) //The first argument dest is a target object., 
//Further arguments is a list of source objects.

let user6 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user6, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user6.name); // John
alert(user6.canView); // true
alert(user6.canEdit); // true

//If the copied property name already exists, it gets overwritten:

//We also can use Object.assign to perform a simple object cloning:
let clone = Object.assign({}, user6);

alert(clone.name); // John
alert(clone.canView); // true

//Here it copies all properties of user into the empty object and returns it.
//There are also other methods of cloning an object, e.g. using the spread syntax clone = {...user}

//Nested cloning
//Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

let userC = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  alert( userC.sizes.height ); // 182

  //Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, 
  //and will be copied by reference, so clone and user will share the same sizes:

  let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

//To fix that and make user and clone truly separate objects, we should use a cloning loop that examines
// each value of user[key] and, if it’s an object, then replicate its structure as well.
// That is called a “deep cloning” or “structured cloning”. 
//There’s structuredClone method that implements deep cloning.

//The call structuredClone(object) clones the object with all nested properties.  ---duda!!!


let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related

//The structuredClone method can clone most data types, such as objects, arrays, primitive values.
//It also supports circular references, when an object property references the object itself 
//(directly or via a chain or references).


let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true

// clone.me references the clone, not the user! So the circular reference was cloned correctly as well.


//Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, 
//but a “reference” (address in memory) for the value. 
//So copying such a variable or passing it as a function argument copies that reference, not the object itself.

//All operations via copied references (like adding/removing properties) are performed on the same single object.

//To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” 
//(nested objects are copied by reference) or a “deep cloning” function structuredClone 
//or use a custom cloning implementation, such as _.cloneDeep(obj).