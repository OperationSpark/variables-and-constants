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

### Committing Things to Memory

We can argue that variables and constants are the building blocks of any application.  Variables and constants allow us to declare that an object of some type and value exists and will stay in memory until we no longer need it.

When we run an application, the _runtime_ reads and executes our code line by line, and when it comes across a variable or constant, it commits them to memory much in the same way that you and I might read a story and begin to put the characters into our working memory.

### Declaration and Initialization

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

###TODO 1 : Declare and Initialize a Variable

Let's create a few variables, open up the file at:

    app.js

...then create and initialize a variable called `me`, like so:

````javascript
// TODO 1 : Create and initialize a variable named me //
var me = "John";
console.log(me); // prints "John"
````

Passing our variable `me` to the `console.log()` function will cause the value of `me` to be printed to the command-line.

###TODO 2 : Declare But Do Not Initialize a Variable

Ok, while we're at it, let's declare a variable called `you`, but we will NOT initialize it to any value.  Find TODO 2 and enter the following code:

````javascript
// TODO 2 : Declare but DO NOT initialize a variable named you //
var you; 
console.log(you);
````

**Save and Run the App!**

For our exercise, we want to run our app in Node's _harmony_ mode, which will give us access to the features we're demonstrating, and to do so, we pass the `--harmony` flag to the node command.  So, to run our app:

A) **Select the bash tab (the command-line) in the Console View** in the bottom window-pane of Cloud9
B) **Enter the command** that follows **and press enter**:

    node --harmony app.js

Here's a screenshot of entering the command to run our app:

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/run-the-app.png">

Sweet, after entering the command `node --harmony app.js` and pressing enter, you should see the following output on the command-line:

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/first-run.png">

Great stuff!  We've initialized the variable to the String "John" and successfully printed that variable to the console, which outputted the String "John" on the command-line!

Next, we declared a variable called `you`, but we did not initialize it to any value, so when we asked `console.log()` to print the value of `you`, the value of `you` resolved to `undefined`, which was printed to the command-line!


###TODO 3 : Declare and Initialize a Constant

Unlike variables, because constants can never change, in strict mode you must initialize constants at declaration time.  In non-strict mode, you'd probably see a warning that your constant is being forever initialized to `undefined`, but it's best to avoid doing so.

Create a constant to represent your date of birth:

````javascript
// TODO 3 : Create a constant to represent your date of birth //
const dateOfBirth = "May 17, 1990";
console.log(dateOfBirth); // prints "May 17, 1990"
````

**Save and Run the App!**

This time, be superuser to run your app: Select the bash terminal again, and this time, use the `up-arrow` to cycle backwards through the list of previously executed commands to find the last time you executed `node --harmony app.js`.  Once you see the command appear at the $ prompt, simply press `enter` to execute our command to run our app:

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/print-const.png">

Alrighty, we created and used our constant - no reason for a birth date to change!

###TODO 4 : Attempt to Reassign the Value of a Constant

But, just for kicks, let's see what happens when we try to change the value of a constant.  Add the following code under TOOD 4:


````javascript
// TODO 4 Try try to reassign the dateOfBirth //
dateOfBirth = "January 1st, 1970";
console.log(dateOfBirth);
````

**Save and Run the App!**

Boom!

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/reassign-const-error.png">

Lesson learned!  You cannot reassign the value of a constant because by nature, constants are forever!

You will even notice in the image above the Cloud9 is trying to warn you before hand that you are **Attempting to override 'dateOfBirth' which is a constant**.  Cloud9 _no likey_!

In some runtime environments, like strict mode, you'll trip an error in attempting to overwrite the value of a constant; in others, the attempt will merely _silently fail_.

***
**IMPORTANT STEP : BEFORE WE CONTINUE > Remove the code from step 4, otherwise you'll continue to trip the error!**
***

### Primitives are Immutable Where Objects Are Mutable

Sometimes, it can be a bit confusing for those of us starting out in programming to understand that, in JavaScript, primitive values are immutable, where complex objects _are_ mutable.

Primitive values include the types `undefined`, `null`, `boolean`, `number`, and `string`.  They are immutable, they are never directly modified.  The number `2` is always the number `2`, and `null` is the one and only `null`.  Variables _assigned_ to primitive values can only be _reassigned_ to other values, primitive or complex.

Think about this, you never change the value of a number, you are only ever re-assigning a variable to the value of another number.  Same goes with strings, which might seem strange because strings are treated as arrays of characters, but any modifying operation on a string returns a _new_ string!  For example:

````javascript
var myString = 'Hello World';
console.log(myString.slice(0, myString.indexOf(' '))); // prints "Hello"
console.log(myString); // prints "Hello World"
````

Simply put, objects group together variables in one container.  Essentially, the name of the variable becomes the key by which we access its value.  By key, we can store any type of data in an object, including functions!  Check it out:

````javascript
var myObject = {
    someKey: "someValue",
    printValue: function() {
        console.log(this.someKey);
    }
};
console.log(myObject.someKey);  // prints "someValue"
myObject.printValue();          // prints "someValue"
````

Complex objects, including arrays and objects, _are_ mutable!  So when you add elements to an array or change properties within an object, you're mutating that object, itself - and all variables referencing that object will _feel_ those changes!

Let's look at what immutable and mutable mean when it comes to assignment of values to variables.

### TODO 5 : Create and Reassign Primitives

Create some variables assigned to primitive values, then reassign one of them:

````javascript
// TODO 5 : Create two variables assigned to primitive values and reassign the second variable to a new value //
var a = 1;
var b = a;
console.log("a: " + a);
console.log("b: " + b);
b = 2;
console.log("a: " + a);
console.log("b: " + b);
````

**Save and Run the App!**

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/reassign-primatives.png">

Even though `b` was initialized by assignment to `a`, the assignment expression evaluates and returns the _value_ of `a`, and does not point `b` to `a`.  Therefore the assignment of the new value `2` to `b` does not update the value of `a`.

Fine, let's try something similar with objects:

### TODO 6 : Mutate an Object

Create two references to the same object, then alter the second one:

````javascript
// TODO 6 : Create and mutate an Object //
var first = {key: "value"};
var second = first;
console.log("first: " + first.key);
console.log("second: " + second.key);
second.key = "new value";
console.log("first: " + first.key);
console.log("second: " + second.key);
````

**Save and Run the App!**

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/mutate-an-object.png">

Alrighty, so in this case, modifying the `second` variable also meant that the value of `first` was altered.  Why?  Because both `first` and `second` held references to the same instance of our object, which was originally initialized as `{key: "value"}`, but updated to `{key: "new value"}`

Finally, let's try one more experiment with variables.

### TODO 7 : Nullify a Reference

// TODO 7 : Nullify the reference held by the variable second //
second = null;
console.log("first: ", first);
console.log("second: " + second);

**Save and Run the App!**

<img src="https://raw.githubusercontent.com/OperationSpark/variables-and-constants/master/img/nullify-reference.png">

Ok, this time around, notice that when we set `second` to `null`, we are only dereferencing the value stored in the variable `second`, and we're not altering the value stored in `first` variable.  This is because both `first` and `second` both hold references to the same object.

Imagine that you and I are both looking at the same object, like a car: just because I stop looking at the car doesn't mean that it ceases to exist for you.  I've only removed my (visual) reference to the car.

Also, note that the `second` variable still exists, but its value is now `null`, meaning, its _empty_.

Nice work, we've come to the end of our lesson.  But wait, one last thing, I really want to hit home that when we use the keywords `var` and `const`, we are asking the runtime to keep in memory these names and the values to which these names may point.  We can still use values that we don't _pin_ or _commit_ to memory, you'll just have no way to ever get them back.

Notice in this next TODO, we're using the string value of `Good Bye`, but without storing it in a variable or constant, the value exists for a split second, and after that line is executed, exits no more:

### TODO 8 : Nullify a Reference

````javascript
// TODO 8 : Use a value for a split second //
console.log("Goodbye!");
````

**Save and Run the App!**

    Goodbye!
