const btnHam=document.querySelector('.ham-btn');//nav bar button//
const btnTimes=document.querySelector('.times-btn');
const  navBar= document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
if (btnHam.className !=="")
{
    btnHam.style.display="none";
    btnTimes.style.display="block";
    navBar.classList.add("show-nav");//show nav bar//
}

})

btnTimes.addEventListener
('click', function(){
if(btnHam.className !==""){
this.style.display="none"
btnHam.style.display="block"
navBar.classList.remove("show-nav");//to hide nav bar//
}
})

document.getElementById("registration-form").addEventListener("submit", function(event) {
            var passwordInput = document.getElementById("password").value;
            var confirmPasswordInput = document.getElementById("confirm-password").value;
            var emailError = document.getElementById("email-error");
            var passwordError = document.getElementById("password-error");

            if (passwordInput !== confirmPasswordInput) {
                event.preventDefault();
                alert("enter correct password")
            } else {
                passwordError.textContent = "";
            }

    if (!isValidEmail) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    }    else {
    emailError.textContent = "";
}
});