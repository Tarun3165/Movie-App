
function checkData() {
    var flag = 0;
    var myForm = document.getElementById("myForm"); 
    var email = myForm.email.value;
    var password = myForm.password.value;
   
    var arr = localStorage.getItem("signUp")
    
    if(arr==null)
    {
        arr = [];
    }
    else {
        arr=JSON.parse(localStorage.getItem("signUp"))
    }
    
    for (let i = 0; i < arr.length;i++)
    {  
        if(arr[i].email==email&&arr[i].password==password)
        {
            flag = 1;
            window.location.href="home.html"
        }
        
    }
   if(flag==0)
     alert(`invalid Credentials`)
        
       
}