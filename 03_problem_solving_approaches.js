// Section 4: Problem solving approach, Notes: https://cs.slides.com/colt_steele/problem-solving-patterns

// Lecture 1: Algorithms and Problem solving patterns
/*
# We face some challenge and we don't know how to solve it.

# Objects:
 - what is an algorithms
 - devise a plan to solve a problem
 - compare and contrast problem solving patterns including frequency
 counters, two pointer problems and divide and conquer.

# What is an Algorithm?
 A process or set of steps to accomplish a certain task.


# How do you improve?
- Devise a plan for solving problems.
- Master common problem solving patterns.


# Problem solving Strategies:
- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and Refactor
*/


// Lecture 2: Understand the Problem
/*
How to solve new problem?
- Understand the Problem
  - Ask these questions to you or interviewer
    - Can I restate the problem in my own words?
    - What are the inputs that go into the problem?
    - What are the outputs that should comes from the
      solutions to the problem?
    - Can the outputs be determined from inputs?
      In other words, do I have enough information to
      solve the problem? (You may not be able to answer this
      question until you set about solving the problem. That's
      okay; it's still worth considering the question at
      this early stage.)
    - How should I label the important pieces of data that
      are part of a problem?

*/


// write a function which takes two numbers and returns the sum.
// check the image: problem-solving1.png



// Lecture 3: Explore concrete examples
/*
 - Complete up with examples can help you understand the problem better.
 - Examples also provide sanity checks that your eventual
   solution works how it should.
   - User stories talk about how a prodcut would be.
   - Unit Tests talk about what a certain smaller feature would be.


Steps:
- Start with simple Examples (write 2 or 3 examples )
- Progress to More Complex Examples.
- Explore Examples with empty inputs. [Egde cases]
- Explore Examples with invalid inputs [Edge cases]
*/


// Write a function which takes in a string and returns count
// of each character in the string.

function charCount(){};


// Coming with simple examples
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1,e:1,l:2,o:1}

// Progress to more complex example
// Are we considering space?
// Are we considering numbers? special chars?
// Are we considering uppercase and lowercase chars?
charCount("my phone number is 18646");
charCount("Hello hi");


// Explore examples with empty inputs
charCount(); // should we return : {} or null or error?


// When user passes edge cases
charCount(""); // what it should return?


// Lecture 4: Break it down
/*
 STEPS:
 -  Explicitly write out the steps you need to take.
 (this force you to think about the code you'll write
 before you write it, and helps you catch any lingering
 conceptual issues or misunderstandings before you dive in and
 have to worry about details as well.)
 - 
*/

// Same problem from before

function charCount(str) {
    // make object to return at end
    // loop over the string
       // for each character...
       // if the char is number/letter AND a key in object, add one to count
       // if the char is number/letter AND not in object, add it object and set value to 1.
       // if character is something else (escape, period etc) don't do anything.
    // return object at end
}


// Lecture 5: Solve or Simplify
/*
Solve/Simplify
- Solve the problem if you can't Solve a simpler problem.

STEPS:
- find the core difficulty in what you're trying to do.
- Temporarily ignore that difficulty
- Write a simplified solution.
- Then incorporate that difficulty back in.
*/


// Same example


// Lecture 6: Look back and Refactor
/*
It is about improving the code.becoming a good coder.
Refactoring or Look back questions:
- Can you check the result?
- Can you derive result differently? [Different approaches]
- Can you understand it at a glance? [ Intitutiveness ]
- Can you use the result or method for some 
  other problem? [Spider Sense for other problems]
- Can you improve the performance of your solution? [Time/Space Complexity]
- Can you think of other ways to refactor? [Style guide, companys guideline, standards]
- How have other people solved this problem? [Worth looking at other implementation of same problems, even looking into other languages]
*/


// Check Pic 2: problem-solving2.png
// questions:
/*
 - I'd avoid using for-loop. (Aesthetics, not performance thing)
 - Simplify if-else statement with || operator.
 - Thinking about regex performance, we can use charAt() ?
   check image: problem-solving3.png
 - Check if we can weed out variables. 
   check pic: problem-solving4.png
*/


// Lecture 7: Recap the interview strategies
/*
- Understand the problem. Ask questions to interviewers, think about it
- undertstand input, output, edge cases etc
- Break the problem down into pseudocode or just comments.
- Solve and Simplify, avoid difficult parts and add it later.
- Look back and Refactor.
*/
