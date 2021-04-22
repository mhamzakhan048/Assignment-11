// chapter 26-30

// var num = +prompt("Enter your Number");
// var a = Math.floor(num);
// var c = Math.round(num);
// var b = Math.ceil(num);
// document.write("Number :" + num + "<br>" 
// + "Round Off value :" + c + "<br>" + "Floor Value :" + a + "<br>" + "Ceil value :" + b )


// var a = +prompt("enter your number");
// var b = Math.abs(a)
// document.write(b)

// var dice1 = +prompt("Value")
// var dice2 = Math.random();
// var a= Math.round(dice2)
// document.write("random dice value" + dice1)
// document.write("random dice value" + a)


// var b = Math.random()
// a = (b*2);
// c = Math.ceil(a);
// if (c === 2){
// document.write("This is head")
// } 
// else {
//     document.write("This is tail")
//     } 

// var num = Math.random()
// a = (num*99)
// b= Math.round(a)
// document.write("So this is my random Number " + b)

//      var  weight = prompt("Enter your weight");
//  document.write("<br>" + "The weight of user is "+ weight);

// var a = Math.random()
// b= (a*10)
// c = Math.round(b)
// var d = +prompt(" Enter Any Value  . value are only 1 to 10 ")
// if (d === c){
//     document.write("Yes Sir YOu Are Genius")
// }
// else {
//     document.write("Better Luck Next Time")
// }





// chapter 31-34

// var a = new Date();
// document.write(a)


// var a = ["jan" , "feb" , "mar", "April" ,"may" ," june"]
// var now = new Date();
// var b = now.getMonth();
// var cm = a[b];
// document.write( " Current Month : " +  cm)

// var a = ["sun" , "mon" , "tue", "wed" ,"thu" ," fri" ," sat "]
// var now = new Date();
// var b = now.getDay();
// var cd = a[b];
// document.write( " Today is " + cd)

// var date = new Date();
// var a = date.getDay();
// var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];

// if(a === 0 || a === 6){
//     document.write("<br>" + "It's fun day");
// }
// else{

//     document.write("<br>"+ "Today is " + days[a]);
// }


// var date = new Date();
// var today = date.getDate();
// if (today < 16){
//     document.write("<br>"+"First fifteen days of the month");
// }
// else{
//     document.write("<br>"+"Last days of the month");
// }


// var date = new Date();
// var unixTime = date.getTime();
// document.write("<br>" + "Current date: " + date);
// document.write("<br>" + "Elapsed milliseconds since January 1 , 1970 : " + unixTime);
// document.write("<br>" + "Elapsed minutes since January 1 , 1970 : " + unixTime/(1000*60*60));


// var date = new Date();
// var time= date.getHours();
// if(time < 12) {
//     document.write("It's AM")
// }
// else {
//     document.write("It's PM")
// }


// var laterDate = new Date(2020,11,31,00,00,00);
// document.write(laterDate);


// var firstRamdan = new Date("2020/4/24 0:0:0"); 
// var currentDate = new Date();
// var diffrence = currentDate.getTime() - firstRamdan.getTime();
// var daysPassed = diffrence / (1000*60*60*24);
// daysPassed = Math.floor(daysPassed);
// document.write(daysPassed + " days haved passed since 1st Ramadan, 2020");


// var currentDate = new Date();
// var givenDate = new Date("2021/01/01 00:00:00");
// var diffrence = currentDate.getTime() - givenDate.getTime();
// diffrence /= (1000*60);
// document.write("<br>" + "On reference date " + currentDate + " , " + "<br>" + Math.round(diffrence) + " seconds had passed since begining of 2021");


// var date = new Date();
// document.write("<br>" + "Current Date: " + date);
// var hour = date.getHours();
// hour--;
// date.setHours(hour);
// document.write("<br>" + " 1 hour ago, it was " + date);


// var date = new Date();
// document.write("<br>" + "Current Date: " + date);
// var year = date.getFullYear();
// year -= 100;
// date.setFullYear(year);
// document.write("<br>" + "100 year back, it   was " + date);

// var UserAge = parseInt(prompt("Enter your age"));
// var date = new Date();
// var currentYear = date.getFullYear();
// var birthYear = currentYear - UserAge;
// document.write("Your age is " + UserAge);
// document.write("<br>"+ "Your birth year is " + birthYear);


// document.write("<b> K-Electric Bill </b>" + "<br>" + "<br>");

// var na = " Hamza khan ";
// var month = "March";
// var num = Math.random()
// a = (num * 500)
// b = Math.round(a);

// var num = Math.random()
// x = (num=18)
// y = Math.round(x);

// document.write("Customer name : " + na + "<br>" + " Month : " + month)
// document.write("<br>" + "Numbers of units : " + b + "<br>" + " Charges per unit : "+y)

// var na = b*y;
// var late = 350;
// var ga = na+late ;
// document.write("<br>")
// document.write("<br>")
// document.write("Net amount Payable(witnin due date) : " + na +"<br>")
// document.write("Late payment surcharge : " + late + "<br>")
// document.write("Gross amount payable (after due date) : " + ga)






// chapter 35-38

//  var a = new Date();
//  alert(a)

// function a(){
//     alert(new Date)
// }

// a();



// function fulname(fn,ln){
// var fn = prompt("Enter Yoru First ANme")
// var ln = prompt("Enter Yoru surname ANme")
// var c = fn+ln;
// alert = (c)
// }
// fulname(fn,ln);


// var f = prompt("Enter your first name");
// var  l = prompt("Enter your last name");
// function a(fn,ln){
//     var fullName = fn.concat(ln);
//     document.write("<br>"  + fullName);
// }
// a(f,l);


// var a = +prompt("Input any number")
// var b = +prompt("Input any number")

// function  add(c,d){
//     var sum = c + d;
//     alert(sum)
// }
// add(a,b);

// var a = +prompt("Input any number")
// var b = +prompt("Input any number")
// var oper = prompt("Input any Operator")
// alert(abc(a,b,oper));
// function abc(ab,ba,cc){
//   if (cc === "+"){
//       return ab+ba;


// }
//   if (cc === "-"){
//     return ab-ba;
// }

//  if (cc ==="*"){
//     return ab*ba;
// }
//  if (cc === "/"){
//     return ab/ba;
// }
//  if (cc === "%"){
//    return ab%ba;
// }
// else {

//     alert("Invalid Operator")
// }
// }


// var number = Number(prompt("Enter number for Factorial"));

// var ans = factorial(number);
// document.write(" Factorial of "+ number + " is " + ans );
// function factorial(num) {
//     for (var i = num-1; i > 0; i--){
//         num *= i;
//     }
//     return num;
// }


// var startingPoint = Number(prompt("Enter starting point"));
// var endingPoint = Number(prompt("Enter ending point"));
// counting(startingPoint, endingPoint);

// function counting(spoint, epoint) {
//     for (var i = spoint; i <= epoint; i++) {
//         document.write("<br>" + i);
//     }
// }


// var perpendicular = Number(prompt("Enter perpendicular"));
// var base = Number(prompt("Enter base"));
// hypotenuse(perpendicular,base);

// function square(num){
//     return num**2;
// }

// function hypotenuse(per,bas){
//     var hyp = square(per) + square(bas);
//     document.write("<br>" + "Hypotenuse : " + square(hyp));
// }


// var width = Number(prompt("Enter width"));
// var height = Number(prompt("Enter height"));
// areaOfRectangle(width,height); //pass by variable
// areaOfRectangle(3,5); //pass by value

// function areaOfRectangle(a,b){
//     document.write("<br>" + "Area of rectangle is " + (a*b));
// }


// var string = prompt("Enter string");
// checkPalindrome(string);

// function checkPalindrome(str) {
//     var reverseString = "";

//     for (var i = (str.length - 1); i >= 0; i--) {
//         reverseString = reverseString.concat(str[i]);
//     }
//     if(str.toLowerCase() === reverseString.toLowerCase()){
//         document.write("<br>" + "The string is Palidrome");
//         document.write("<br>" + "User Input: " + str);
//         document.write("<br>" + "Reverse string: " + reverseString);
//     }
//     else{
//         document.write("<br>" + "The string is not Palidrome");
//     }
// }


// var string = prompt("Enter string");
// var afterConvertion = convertion(string);

// document.write("<br>" + "User input: " + string);
// document.write("<br>" + "After converstion: " + afterConvertion);

// function convertion(str){
//     copyStr = str[0].toUpperCase();
//     copyStr = copyStr.concat(str.slice(1));
//     return copyStr;
// }


// var string = "Web Development Tutoria";
// findLongestWord(string);

// function findLongestWord(str) {
//     var splitString = str.match(/\w[a-z]{0,}/gi);
//     var longestWord = splitString[0];

//     for (var i = 0; i < splitString.length; i++) {

//         if(longestWord.length < splitString[i].length){
//             longestWord = splitString[i];
//         }
//     }
//     document.write("<br>" + "Longest Word : " + longestWord);
// }


// function numberOfOccurance(string , character) {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i].toLowerCase() === "o"){
//             count++;
//         }
//     }
//     return count;
// }

// document.write("<br>" + "Number of occurance of 'o' is " + numberOfOccurance("JSResourceS.com","o"));



// function calcCircumference(rad){
//     document.write("<br>" + "The circumfrence of circle is " + (2*rad*3.142))
// }

// function calcArea(rad){
//     document.write("<br>" + "The area of the circle is " + (3.14 * rad**2));
// }

// let radius = Number(prompt("Enter radius"));
// calcCircumference(radius);
// calcArea(radius);




// chapter 38-42

// function calcPower(a,b){
//     return a**b;
// }

// var base = Number(prompt("Enter base value"));
// var power = Number(prompt("Enter power value"));

// document.write("<br>" + "The value of " + base + " raised to " + power + " is " + calcPower(base,power));


// var year = Number(prompt("Enter year"));
// check(year);
// function check(y){
//     if (y%4 === 0){
//         document.write("<br>"+ y + " is a leap year")
//     }
//     else{
//         document.write("<br>"+ y + " is not a leap year")
//     }
// }



// var S = function(x,y,z){
//     return (x+y+z)/2;
// }

// function areaOfTriangle(a,b,c){
//     var s = S(a,b,c);
//     var area = s*(s-a)*(s-b)*(s-c);
//     document.write("<br>" + "Area of Triangle is " + area);
// }

// var s1 = Number(prompt("Enter first side of triangle"));
// var s2 = Number(prompt("Enter second side of triangle"));
// var s3 = Number(prompt("Enter third side of triangle"));
// areaOfTriangle(s1,s2,s3);



// var subject1 = Number(prompt("Enter marks of subject 1"));
// var subject2 = Number(prompt("Enter marks of subject 2"));
// var subject3 = Number(prompt("Enter marks of subject 3"));

// mainFunction(subject1,subject2,subject3);

// function mainFunction(sub_1, sub_2, sub_3) {
//     var marksObtain = sub_1 + sub_2 + sub_3;
//     document.write("<br>" + "Marks of 1st subject is " + sub_1);
//     document.write("<br>" + "Marks of 2nd subject is " + sub_2);
//     document.write("<br>" + "Marks of 3rd subject is " + sub_3);
//     document.write("<br>" + "Average: " + calcAverage(marksObtain).toFixed(2));
//     document.write("<br>" + "Percentage: " + calcPercentage(marksObtain,300).toFixed(2) +"%");
// }
// function calcAverage(total) {
//     return total / 3;
// }
// function calcPercentage(marksObtain, totalMarks) {
//     return (marksObtain / totalMarks) * 100;
// }



// var string = prompt("Enter string");
// var character = prompt("Enter character");

// if (indexOf(string, character) === -1) {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + character + " is not in the string because indexOf function return " + indexOf(string, character));
// }
// else {
//     document.write("<br>" + "String: " + string);
//     document.write("<br>" + "Index of character \"" + character + "\" is " + indexOf(string, character));
// }

// function indexOf(str, char) {
//     var index = -1;
//     for (var i = 0; i < str.length; i++) {
//         if (char === str[i]) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// }



// let string = prompt("Enter string");
// document.write("<br>" + "String before operation:" + string);
// document.write("<br>" + "String after operation: " + removingVowel(string));
// function removingVowel(str) {
//     newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             continue;
//         }
//         newStr += str[i];
//     }
//     return newStr;
// }




// var string = prompt("Enter string");
// document.write("<br>" + "String before operation: \"" + string + "\"");
// document.write("<br>" + "Occurrences of any two vowels in succession in a line of text : " + occuranceOfDoubleVowel(string));

// function occuranceOfDoubleVowel(str) {
//     var array = [];

//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
//             if (str[i + 1].toLowerCase() === "a" || str[i + 1].toLowerCase() === "e" || str[i + 1].toLowerCase() === "i" || str[i + 1].toLowerCase() === "o" || str[i + 1].toLowerCase() === "u") {
//                 array.push(str.slice(i, i + 2));
//             }
//         }
//     }
//     return array;
// }


// var number = Number(prompt("Enter Distance ib-n kilometer"));
// inMeter(number);
// inFeet(number);
// inInch(number);
// inCentimeter(number);

// function inMeter(num) {
//     document.write("<br>" + "Distance in meter is " + (num * 1000));
// }
// function inFeet(num) {
//     document.write("<br>" + "Distance in feet is " + (num * 3281));
// }
// function inInch(num) { 
//     document.write("<br>" + "Distance in inch is " + (num * 39370));
// }
// function inCentimeter(num) {
//     document.write("<br>" + "Distance in centimeter is " + (num * 100000));
// }



// var overTimeHours = Number(prompt("Enter overTime hours"));
// var overTimePay = overTimeHours * 12;

// document.write("<br>" + "Overtime salary of employ is " + overTimePay + " RS");



// var note_10 = 10;
// var note_50 = 50;
// var note_100 = 100;

// function cashier(){

//   var cash_withdraw = 470;
//   document.write("You Will have " + Math.floor(cash_withdraw / 100) + " Hundred Notes ");
//   document.write(Math.floor(cash_withdraw % 100 / 50) + " Fifty Notes ");
//   document.write(Math.floor(((cash_withdraw % 100) % 50) / 10) + " Ten Notes.");
// }
// cashier();



// End