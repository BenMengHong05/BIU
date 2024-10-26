
function alertjs(){
    alert("hello Wellcome in class rom");
    //or window.alert("write");
}


function confirmjs(){
   var  h = confirm("your can delete game ");
   alert(h);
}

function promptjs(){
    // prompt("comment " , "your can write information for your" );
    var h =prompt("comment");
    if(h != null){
        //alert("Value is:" + h);
        document.write("value is:" + h);
    }
}