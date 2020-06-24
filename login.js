function log(){
    document.getElementById("c1").setAttribute("style","display:block");
    document.getElementById("c2").setAttribute("style","display:none");
    document.getElementById("bl").setAttribute("style","background-color:#007bff")
    document.getElementById("br").setAttribute("style","background-color:#fff")
}

function reg(){
    document.getElementById("c2").setAttribute("style","display:block");
    document.getElementById("c1").setAttribute("style","display:none");
    document.getElementById("br").setAttribute("style","background-color:#007bff")
    document.getElementById("bl").setAttribute("style","background-color:#fff")
}


document.getElementById("bl").addEventListener('click',log);
document.getElementById("br").addEventListener('click',reg);

// validation   //

function validate(){

    var n=document.getElementById("name").value;
    var e=document.getElementById("email").value;
    var pno=document.getElementById("phone").value;
    var p=document.getElementById("password").value;
    var cp=document.getElementById("cpassword").value;

    if(n=='')
    {
        document.getElementById("uname").innerHTML="***Enter name";
        return false;
    }
    else if(n==NaN)
    {
        document.getElementById("uname").innerHTML="***Invalid name";
        return false;
    }
    else if(email=='')
    {
        document.getElementById("uemail").innerHTML="***Enter Email";
        return false;
    }
    else if(e.charAt(e.length-4)!='.' || e.indexOf('@')<=0)
    {
        document.getElementById("uemail").innerHTML="***Invalid Entty....";
        return false;
    }
    else if(pno=='')
    {
        document.getElementById("uphone").innerHTML="****Enter Phone Number.....";
        return false;
    }
    else if(pno==NaN || pno.length!=10)
    {
        document.getElementById("uphone").innerHTML="***Invalid Entry...."
    }

    else if(p=='')
    {
        document.getElementById("upass").innerHTML="***Enter password...."
        return false;
    }
    else if(cp!=p)
    {
        document.getElementById("ucpass").innerHTML="****Incorrect password....";
        return false;
    }



}

