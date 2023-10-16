/* Bracket Combinations
Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses.
For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()).
There are 5 total combinations when the input is 3, so your program should return 5.

Examples
Input: 3
Output: 5
Input: 2
Output: 2

Tags

combinatorics Google free */

// Note: If you have solved Brackets Matcher and  Multiple Brackets medium challenges, you can solve this challenge. For me, after reading discussions from coderbyte blog, can solve this challenge.

function BracketCombinations(num) { 

  // code goes here  
  let stack = [];                               // 1. Initiate a stack(empty array) to store bracket(of parentheses)combinations.

function parentheses(left, right, str) {        /* 2. Create a helper function with three parameters( left bracket, right bracket and combined string).
                                                      (a) First left brackets to be start adding. 
                                                      (b) right brackets can be added only after adding a left bracket.  
                                                      (c) str will be final balanced string. */
  
  if (left > 0) {                               // 3. If there is a left bracket left, then add it to str and update function.
                                                          
    parentheses(left-1, right+1, str+"(");
  }
  
  if (right > 0) {                              // 4. If there is a rightt bracket left, then add it to str and update function.
    parentheses(left, right-1, str+")"); 
  }
  
  if (left === 0 && right === 0) {             // 5. If there is no more left and right brackets to be added, then add final balanced string to stack using arr.push() method.
    stack.push(str);
  }
  
}

  parentheses(num, 0, "");                      /* 6. Call helper function parentheses with num, 0 and empty string "". 
                                                      num === first argument as given by challenge, 0 === second argument because we can not add right bracket before left bracket.
                                                      "" === third argument because initially there is no complete brackets . */ 
  return stack.length;                         // 7. After helper function call, just return stack using arr.length() method to find out number of bracket combination.
}  
// keep this function call here 
console.log(BracketCombinations(readline()));
