

function detailclick(){

    var username = document.getElementById("MailID").value;
    var password = document.getElementById("Password").value;
		var date=document.getElementById("Date").value;
		var mobileno=document.getElementById("Number").value;

    if ( username.length == 0 || password.length == 0 || date.length==0 || mobileno.length==0) {
        alert ("Some Fields are Empty.Make Sure all details are filled");
        return false;
    }
		else if(mobileno.length>0 && mobileno.length<10){
			alert("Invalid Mobile Number");
			return False;
		}
    else{
			alert("Register Successfully");
		}
}
