/* hard
Counting Anagrams
Have the function CountingAnagrams(str) take the str parameter and determine how many anagrams exist in the string. 
An anagram is a new word that is produced from rearranging the characters in a different word, for example: cars and arcs are anagrams. 
Your program should determine how many anagrams exist in a given string and return the total number. 
For example: if str is "aa aa odg dog gdo" then your program should return 2 because "dog" and "gdo" are anagrams of "odg". 
The word "aa" occurs twice in the string but it isn't an anagram because it is the same word just repeated. 
The string will contain only spaces and lowercase letters, no punctuation, numbers, or uppercase letters.

Examples
Input: "aa aa odg dog gdo"
Output: 2
Input: "a c b c run urn urn"
Output: 1

Tags
array hash table searching cache  */

// let str = "aa aa odg dog gdo";

function CountingAnagrams(str) {
  // code goes here 
    let str1 = str.split(" ").sort();                          // 1. Convert str to string of words.  console.log(strA);   // ['aa', 'aa', 'dog', 'gdo', 'odg']
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j < str1.length; j++) {
      if (str1[i] === str1[j]) {                               // 2. If repeated words are encountered, then break the loop.
        break;
      }
      if (str1[i].split("").sort().join("") === str1[j].split("").sort().join("")) {  // 3. If a word is equal to rearranging letters of another word.
        count++;                                               // 4. Then update the count.
        break;                                                 // 5. Then break the loop again.
      }
    }
  }
  return count;                                                // 6. Return count.
}
console.log(CountingAnagrams(str));

// keep this function call here
//   console.log(CountingAnagrams(readline()));
