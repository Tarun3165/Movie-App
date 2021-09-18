
function addDetails() {

    var myForm = document.getElementById("myForm");
    var name = myForm.name.value;
    var contact = myForm.contact.value;
    var email = myForm.email.value;
    var password = myForm.password.value;

   if(name==""||contact==""||email==""||password=="")
   {
       alert("pls enter all details")
       return;
    }
    
    signUpInfo = {
        name,
        contact,
        email,
        password,
    }
  
    var arr=localStorage.getItem("signUp")
    if (arr == null)
        arr = [];
    else
        arr = JSON.parse(localStorage.getItem("signUp")) 
    arr.push(signUpInfo);

    localStorage.setItem("signUp", JSON.stringify(arr));
    
    window.location.href="home.html"
}