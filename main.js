

        function nextpage() {
            var username =document.getElementById('username').value;
            var email =document.getElementById('email').value;
            var password =document.getElementById('password').value;
            if(username=="Adeel" && email=="abc@gmail.com" && password=="A@123"){
            window.location.assign("dashboard.html");
            alert("Login Successfull");
            return false;
            }
            else{

return;
            }
        }
