var age = 34;
alert(age);

var nationality = "Indian";
alert(nationality);

var status = true;
alert(status);

var a;
a=78;
console.log(a);

//---------------------------------------------------------------------------

var age = 34;
console.log(age);

age = 36;   //we update or change the value of variables
console.log(age);

//--------------------------------------------------------------------------

//Data type

//Variable for string, it can be single or double qoutes
var name = "Mark";
console.log(name);

name = "John";   //Just change the value of the string
console.log(name);

//------------------------------------------------------------------------

//Data Type Numbers
var count = 34;
count = 35;

var sum = 5+6;

var a = 5;
var b = 6;
var c = a+b;

//--------------------------------------------------------------------------

//Variable for Boolean
var status = true;

alert(status);
console.log(status);

//--------------------------------------------------------------------------

//Varible undefined
var name;
var age;

var name = "Mark";
name = undefined;   //Now varible name become undefined

//-----------------------------------------------------------------------

//Varible Null
var age = null;

var name = "Mark";
name = null;

//----------------------------------------------------------------------

//Difference between Undefined and null

//Undefined

var a;
console.log(a); //Undefined

a = "Hi";
console.log(a);

a = undefined;
console.log(a); //Undefined

//Null

var b = null;
console.log(b); //Null

b = "Hi";
console.log(b);

b = null;
console.log(b); //Null

//----------------------------------------------------------------

//Javascript Data Types are Dynamic, We can change the Data Type of Variable as per need

var age = 34;   //Number
console.log(age);

age = "Hi"; //String, we can't operate the Airthmatic Calculations as Data Type has Changed
console.log(age);

age = true; //Boolean
console.log(age);

//---------------------------------------------------------------

//Type of Operator, We can check The type of Data Type
var age = 34;
console.log(typeof age);    //Number

var name = "Hi";
console.log(typeof name);   //String

var status = true;
console.log(typeof status); //Boolean

status = 34;
console.log(typeof status); //Number

