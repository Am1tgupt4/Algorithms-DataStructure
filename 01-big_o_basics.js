// Lecture 1: Big O Notation // 

/*
Objectives:
- What is Big O notation?
- Simplify Big O notation?
- Define "time complexity" and "space complexity"
- Evaluate the TC and SC of different algorithms using
  Big O
- What is an Alogorithm
*/

/*
Idea:
Imagine we have 2 valid solution of a problem ,
How do we know which one is best?

- Would it not be nice if we have a system which
  we can use which code is good (A number)?
- Who cares about it? 
  - Useful in discussing tradeoffs.
  - when you debug your code, it helps to understand
    where the problem may arrive.
  - It comes in a interview a lot.
*/





// Lecture 2: Timing of your code. //
/*
Q. Suppose a code that sums 1 upto n numbers.
We have two solutions I and II.

What does better mean?
- Faster when runs?
- Less Memory-intensive?
- More readable?
- Brevity?


But first 2 are important.
- Faster
- Less Memory Intensive


Measure Time:
- use timing function to find which code runs faster.
  - We found that it changes even on the same machine.
    Manually timing codes is not efficient.
- The Problem with Time
  - Different machines will record different times.
  - The same machine will record different times.
  - For fast algorithms, speed measurements may not
    be precise enough?
*/

// Solution I
function addUpTo(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }

  return total
}

// Solution II
function addUpTo(n) {
  return (n * (1 + n)) / 2
}




// Lecture 3: Counting Operations //
/*
- Can we count number of operation involved inside of
  an algorithm? because it remains will constant.

- Counting Operations:
  Solution II have 1 multiplication, 1 addition, 1 division.
  3 operations.

  Solution II have n additions, n assignments, n additions and n assignments.

  But again counting is hard.

- Counting is hard but all we care here is about
 "general trend".
*/






// Lecture 4: Visualise Time Complexity //
/*
- https://rithmschool.github.io/function-timer-demo/
*/




// Lecture 5: Big O notation
/*
- A formalized fuzzy counting. It allows us to
talk formally about how runtime of an algorithm
grows as the inputs grow. we care about trends.

- The Algorithm is O(f(n)) if the number of simple
  operations the computer has to do is eventually
  less than a constant times f(n), as n increases.

- When we talk about Big O, we talk about worst
  cost scenario.
- we care about trend:
  * n + n ~ 2n ~ n ~ O(n)
"If input grows how runtime grows?"
*/



// Lecture 6: Simplifying Big O expressions
/*
Rules:
- Constants Don't matter.
O(2n) ~ O(n)
O(500) ~ O(1)

O(13n^2) ~ O(n^2)

- Smaller Terms don't matter.
O(n + 10) ~ O(n)
O(1000n + 50) ~ O(n)
O(n^2 + 5n + 8) ~ O(n^2)

 
Big O shortands:
1. Arithmetic operations are constant.
2. Variable assignment is constant.
3. Accessing elements in an array (by index)
or object (by key) is constant.
4. in a loop, the complexity is the length of the
 loop times the complexity of whatever happens
 inside of loop.

Example of Big O trends:
O(1)
O(log n)
O(n)
O(nlog n)
O(n^2)

*/




// Lecture 6: Space Complexity //
/*
Time Complexity:
 Analyzing the runtime of an algorithm as
 the size of the input increases.

Space Complexity: 
 How much additional memory we need to allocate in order
 to run the code in our algorithm.

What about the inputs?
* Auxiliary space complexity refers to space
  required by algirthm, not including space taken 
  up by the inputs.

* So when we talk about space complexity we technically
talk about auxiliary space complexity.


Rules of thumb:
- Most primitives (booleans, numbers, undefined, null)
are constant space.
- Strings require O(n) space (where n is the string len)
- Reference types are generally O(n), where n
is the length (for arrays) or number of keys (for Objects)

*/


// total and i ~ 2 variables ~ O(1) 
function sum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}


// array ~ O(n) + 1 for (i variable) ~ O(n)
function double(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }

    return newArr;
}



// Lecture 7: Logarithms //
/*
Logarithms is inverse of an exponential.
log(8) ~ 3

Base of log does not need to be 2, it can be anything.
Base: 2, 10, e etc

O(log n) is great, it is almost near to constant time complexity.

When it come up?
Searching algorithms.
Efficient sorting algorithms also have this.
Recursion also is logn.
*/
