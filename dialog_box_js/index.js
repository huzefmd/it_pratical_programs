function subscribenewletter(){
    alert("welcome to our website we offer day to day newspaper");

    var subscribe=confirm("would you like read news paper and if u want to subscibe to our channel?");

    if(subscribe){
        var email=prompt("please enter your valid email id for subcibing our channel:","");

        if (email){
            alert("thanks you will recive an confirmation eamail at" +email+".");

        }
        else{
            alert("you did not provide any email addres so subsciption is done")
        }
    }
    else{
        alert("no problem u can subscibe latter");
    }

   
}    
        

