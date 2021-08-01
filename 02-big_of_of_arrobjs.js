// Section 3: Analayzing Performance of Arrays and Objects
/*
https://cs.slides.com/colt_steele/built-in-data-structures-25
https://cs.slides.com/colt_steele/built-in-data-structures-30
*/

// Lecture 1: Section Introduction
/*
 - Big O of Arrays and Objects
 - Which methods are slower
 - Why adding elements to the beginning of an array
   is costly.
- Compare and contrast the runtime for arrays and
  object, as well as build-in methods.

*/

// Lecture 2: Big of Objects
/*
 When to use Objects?
 - When we don't need order
 - When we need fast access/insertion and removal.

Things to do on Object: 
Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(1)

Methods:
Object.keys() - O(n)
Objects.values() - O(n)
Objects.entries() - O(n)
hasOwnProperty - O(1)

* Hash tables
* Searching means checking if given information have value
somewhere.
*/
let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favouriteNumbers: [1, 2, 3],
}

// Lecture 3: When are array slow?
/*
 - Arrays are ordered , it is useful sometimes.
 - Use it when you need order.
 - When you need fast access/insertion and removal
   are costly


Things to do on Object: 
Insertion - It depends where we are inserting
  push - fast O(1)
  shift - reindexing happens and it's costly. O(n)
Removal - It depends 
  unshift - removing from begining is also costly. O(n)
  pop - fast. O(1)
Searching - O(n)
  potential optimisation :depends if array is sorted or not.
Access - O(1)

*/

let names = ['Micheal', 'Melissa', 'Andrea']
let values = [true, {}, [], 2, 'awesome']


// Lecture 4: Big O of Array Methods
/*
 push - O(1)
 pop - O(1)
 shift - O(n)
 unshift - O(n)
 concat - O(n) (O(m + n + ...))
 slice - O(n)
 splice - O(n)
 sort - O(n logn)
 forEach/map/filter/reduce etc - O(n)
*/
