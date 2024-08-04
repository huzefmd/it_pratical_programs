function validation(){
    var username=document.forms["regesteration"]["username"].value;
    var email=document.forms["regesteration"]["Email"].value;
    var password=document.forms["regesteration"]["password"].value;


    if (username ===""|| email ===""|| password===""){
        alert("all feilds must be filled out");
        return false;
    } 

    var re =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!re.test(email)){
        alert("invalid email format");
        return false;
    }

    if (password.length<6){
        alert("password must be atleast more than 6 charecters");
        return false;
    }
    alert('regestration Succesfull');
    return true;
}

