/*function avg(end, html,js,php){
    var total = end + html +js + php;

    return total / 4;
}
var end = Number(prompt("your input score end number :",0));
var html = Number(prompt("your input score html number :",0));
var js = Number(prompt("your input score js number :",0));
var php = Number(prompt("your input score php number :",0));


var a = avg(end,html,js,php);
if(a < 50){
    document.write("your got grede F  average :" + a);
}else if(a >= 50 && a<=60){
    document.write("your got grade E average :" + a);
}else if(a >=60 && a<=70){
    document.write("your got grade C average :" + a);
}else if(a >=70 && a <= 80){
    document.write("your got grede B average :" + a);
}else if(a >= 80 && a <=90){
    document.write("your got grede A average :" + a)
}else{
    document.write("Try again ......" + a);
}
*/


/*
var myname = "MengHong";
if(myname == "MengHong")
alert(myname.toUpperCase);
*/

// var txt = "Hello welcome in web page dynamic!"
// alert(txt.length)

/*
var txt = prompt("your input name :");

if(txt.length > 8){
    document.write("your got name");
}else{
    document.write("your tri agin");
}
    */

/*
   var newDate =new Date();
   alert(newDate.getFullYear())
   
  */
//    how to rk error code

/*
try{
    var txt = prompt("enter yout numer" ,0);
}catch(exception){
    alert("error" + (exception))
}finally{
    alert("MengHong")
}

*/

function js(){
    total();
    document.getElementById("inputNumber").innerHTML = "Input Number " + total();
    document.getElementById("inputNumber").innerHTML = "Input Number " + total();
}

function total(){
    var n1 =num1();
    var n2 =num2();
    return n1 + n2;
}
function n1(){
    return input[0].value;
    
}
function n2(){
    return input[1].value;
    
}


var input = document.querySelectorAll("input");
var btn = document.querySelector("button")
btn.addEventListener("clike", js)
