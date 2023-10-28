/* hard
Array Rotation
Have the function ArrayRotation(arr) take the arr parameter being passed which will be an array of non-negative integers and circularly rotate the array starting from the Nth element where N is equal to the first integer in the array.
For example: if arr is [2, 3, 4, 1, 6, 10] then your program should rotate the array starting from the 2nd position because the first element in the array is 2. 
The final array will therefore be [4, 1, 6, 10, 2, 3], and your program should return the new array as a string, so for this example your program would return 4161023.
The first element in the array will always be an integer greater than or equal to 0 and less than the size of the array.

Examples
Input: [3,2,1,6]
Output: 6321
Input: [4,3,4,3,1,2]
Output: 124343

Tags
array  */

     /*  Hint: the position of the integer at index 0 always ends up at the index array.length minus the value at index 0. 
          
    Notes:
    1. The concat() method concatenates (joins) two or more arrays. The concat() method returns a new array, containing the joined arrays.
       The concat() method does not change the existing arrays.

    2. The splice() method lets us to change the content of array by removing or replacing existing elements with new ones.  */
        
     /*  Given Statement: array starting from the Nth element where N is equal to the first integer in the array.
        1. example: given array ----> arr = [4,3,4,3,1,2]  and the first integer in the given array ----> arr[0] = 4  
        2. Use arr.splice() method ----> arr.splice(existing element, new element) ----> we will replace first integer 0 with integer 1( index 4 of array).
        3. then rotate array starting from the Nth element(arr[4]) where arr[4] = 1 and so rotating will start from 1.
        4. So arr.splice(0, arr[0]) become arr.splice(0,4) then joined array by using arr.concat() method.
           and rejoin element by using arr.join("").    */

function ArrayRotation(arr) { 

  // code goes here  
  return arr.concat(arr.splice(0, arr[0])).join('');   
}
   
// keep this function call here 
console.log(ArrayRotation(readline()));


// Alternative Method using For Loop:

function ArrayRotation(arr) { 
   
 for (let i=0; i < arr[0]; i++) {
          arr.push( arr[i] );
      }
     return arr.splice(arr[0]).join("");
     
     // keep this function call here 
console.log(ArrayRotation(readline()));

