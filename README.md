# verbose-adventure

Objective
Build practical experience with JavaScript functions by simplifying repetitive code and practicing the use of the `return` statement. Let's put into practice our GitHub and Markdown knowledge as well.

---

Exercise: Simplify a Song Using JavaScript Functions

Learn how to structure and reuse code with JavaScript functions by writing and simplifying a song.

---

Steps
Create a JS file, script.js
Import the JS file into your index.html file <script src="script.js"></script> 
Write a Song Using JavaScript
   - Choose a song with repetitive lines (e.g., a refrain).
   - Write a `printedSong()` function that uses `console.log()` to print the entire song line by line. Each line should have its own `console.log()` statement.
Example:

function printedSong() {
       console.log("Twinkle, twinkle, little star,\n");
       console.log("How I wonder what you are! \n");

       console.log("Up above the world so high, \n");
       console.log("Like a diamond in the sky. \n");

       console.log("Twinkle, twinkle, little star, \n");
       console.log("How I wonder what you are! \n");

}

3. Simplify Your Code with a Function
   - Identify the repeated lines in your song (e.g., the refrain).  
   - Create a separate `refrain()` function that uses `console.log()` to print the repeated lines.  
   - Update your `song()` function to call `refrain()` wherever the repeated lines occur instead of writing them multiple times.  

   Example:  
   
   function refrain() {
       console.log("Twinkle, twinkle, little star,");
       console.log("How I wonder what you are!");
   }

   function song() {
       refrain();
       console.log("Up above the world so high,");
       console.log("Like a diamond in the sky.");
       refrain();
   }

   song();
   

4. Refactor Using the `return` Statement
   - Make a second refrain function called `refactoredRefrain()` to use a `return` statement that returns the repeated lines as a single string, separated by the special `\n` character (for line breaks).  
   - Make a second song function called `refactoredSong()` function to call `refactoredRefrain()` and log the returned value.

   Example:  

   function refactoredRefrain() {
       return "Twinkle, twinkle, little star,\nHow I wonder what you are!";
   }

   function refactoredSong() {
       console.log(refrain());
       console.log("Up above the world so high,");
       console.log("Like a diamond in the sky.");
       console.log(refrain());
   }

   refactoredSong();
 ---

Submission Instructions
- Do not use the same song as I did.
- To do an extra check, copy and paste your final code into the Programiz JavaScript Online Compiler.  Verify that it runs without errors and outputs your complete song in the console.  
- Create a GitHub repository with a JS File inside, and add a README.md using Markdown to explain your code 
- Submit the GitHub repo link here.
