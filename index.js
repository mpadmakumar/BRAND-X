
function validate(){
     
		let userName = document.getElementById('name').value;
		let Email = document.getElementById('email').value;
		let Password = document.getElementById('password').value;
		let cPassword = document.getElementById('Cpassword').value;
		//let PhoneNo = document.getElementById('phoneNo').value;
		var a = Password.length;
       
    	if(userName == ""){
    		alert("Enter Your User Name");
    		document.form.name.focus();
    		return false;
    	}
    	if(Password == ""){
      		 alert("Enter Your Password");
      		 document.form.password.focus();
      		 return false;
      	}
		if(Email == ""){
      		 alert("Enter Your Email Id");
      		 document.form.email.focus();
      		 return false;
      	}
		
    	if(a < 6){
    		alert("Enter Minimum 6 characters");
    		document.form.password.value="";
     		document.form.password.focus();
     		return false;
    	}
    	if(cPassword == ""){
     		 alert("Enter Your conform Password");
     		 document.form.Cpassword.focus();
     		 return false;
     	}
    	if(!isNaN(userName)){
    		alert("Enter a Alphabets only");
    		document.form.name.value="";
    		document.form.name.focus();
    		return false;
    	}
    	if(password != Cpassword){
    		 alert("check Your conform Password");
    		 document.form.Cpassword.focus();
    		 return false;
    	}
    	
       return true;
      
  }

  function hi(){
    alert("hi");
    console.log("hi");
  }