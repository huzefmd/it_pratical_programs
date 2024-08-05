function Operations(){
    var num1=parseFloat(document.getElementById("number1").value);
    var num2=parseFloat(document.getElementById("number2").value);


    
    

    document.getElementById("add").innerHTML="Addition:"+(num1+num2);
    document.getElementById("sub").innerHTML="subtraction:"+(num1-num2);
    document.getElementById("mul").innerHTML="multiplication:"+(num1*num2);
    document.getElementById("div").innerHTML="division:"+(num1/num2);   
}