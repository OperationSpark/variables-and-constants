Variables and Constants in JavaScript
=======================

A coding exercise to get your groove on with variables and constants...

# Installation

### On Cloud9

Create a new Cloud9 workspace:

1. From your Cloud9 Dashboard, find in the upper left corner and click the green button, "Create New Workspace".
Select "Clone From URL".
2. In the "Source URL" form input, copy and paste in the following URL:

        https://github.com/OperationSpark/variables-and-constants.git

3. In the environment selection box, select "Node".
4. Finally, click the green button "Create".
5. Once the workspace is completed (while spooling up, you'll see a spinning gear on the newly created workspace in the sidebar), click the green button, "Start Editing".

Nice, you're in business...

---

### Commiting Things to Memory

We can argue that variables and constants are the building blocks of any application.  Variables and constants allow us to declare that an object of some type and value exists and will stay in memory until we no longer need it.

When we run an application, the _runtime_ reads and executes our code line by line, and when it comes across a variable or constant, it commits them to memory much in the same way that you and I might read a story and begin to put the characters into our working memory.


````javascript
var person = {name: "John",
              gender: "Male",
              currentCity: "New Orleans",
              ambition: "World Class Jazz Musician"};
````

In JavaScript, we declare variables and constants using the `var` and `const` keywords, followed by a _name_ for the variable or constant:

````javascript
var city = "New Orleans";
const cityOfBirth = "North Bay";
````

In the case of variables, we can optionally choose to initialize the variable to a value at declaration time using the `=` operator, followed by the value being assigned to the variable.  We can also choose to wait to initialize the variable at a later time:

````javascript
var name = "John";  // Here, we've initialized the variable to the String "John" //
console.log(name); // prints "John"

var person; // Here, we've declared a person variable, but have left it undefined
console.log(person); // prints "undefined"
````

**TODO 1**

Let's create a few variables, open up the file at:

    app.js

...then create and initialize a variable called `me`, like so:

````javascript
// TODO 1 : Create and initialize a variable named me //
var me = "John";
console.log(me); // prints "John"
````

Passing our variable `me` to the `console.log()` function will cause the value of `me` to be printed to the command-line.

**TODO 2**

Ok, while we're at it, let's declare a variable called `you`, but we will NOT initialize it to any value.  Find TODO 2 and enter the following code:

````javascript
// TODO 2 : Declare but DO NOT initialize a variable named you //
var you; 
console.log(you);
````

**Run the App!**

For our exercise, we want to run our app in Node's _harmony_ mode, which will give us access to the features we're demonstrating, and to do so, we pass the `--harmony` flag to the node command.  So, to run our app:

A) **Select the bash tab in the Console View** in the bottom window-pane of Cloud9
B) **Enter the command** that follows **and press enter**:

    node --harmony app.js

Here's a screenshot of entering the command to run our app:

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/run-the-app.png">

Sweet, after entering the command `node --harmony app.js` and pressing enter, you should see the following output on the command-line:

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/first-run.png">

Great stuff, we've initialized the variable to the String "John" and successfully printed that variable to the console, which outputted the String "John" on the command-line!



Unlike variables, because constants can never change, in strict mode you must initialize constants at declaration time.  In non-strict mode, you'd probably see a warning that your constant is being forever initialized to `undefined`!

````javascript
const dateOfBirth = "May 17, 1990";
console.log(dateOfBirth); // prints "May 17, 1990"

// Here, we try to reassign the dateOfBirth - without luck //
dateOfBirth = "January 1st, 1970";
console.log(dateOfBirth); // prints "May 17, 1990"
````

Strictly speaking, this won't work:

````javascript
p = "potato";
console.log(p);
````

In non-strict mode, this will fly with a warning, but it strict mode, not so much, you'll trip a runtime error:

````
/home/ubuntu/workspace/app.js:14
p = "j";
  ^
ReferenceError: p is not defined
````

You also cannot declare constants witout initializing them too, as that would sort of be silly.  In strict mode, you'll also trip an error in trying to do this:

````javascript
const dob;
dob = 1970;
console.log(dob);
````


