function checkPassMatch (){
    var pass1 = document.getElementById('pass').value;
    var pass2 = document.getElementById('confirm-pass').value;

    var alert = document.getElementById('alert');
    var submit = document.getElementById('create');

    if(pass1 != pass2){
        document.getElementById('pass').style.border = '2px solid red';
        document.getElementById('confirm-pass').style.border = '2px solid red';

        alert.textContent = "☒ Passwords don't match";
        alert.style.color = "red";

        submit.disabled = true;
        submit.style.backgroundColor = "#A0A0A0"; 
        submit.style.cursor = "not-allowed";

    }   else {
        document.getElementById('pass').style.border = '2px solid green';
        document.getElementById('confirm-pass').style.border = '2px solid green';
        // document.getElementById('create').disabled = false;

        alert.textContent = "🗹 Passwords matched!";
        alert.style.color = "green";
        
        submit.disabled = false;
        submit.style.backgroundColor = "#596D48"; // Change background color for enabled state
        submit.style.cursor = "pointer";
    }
}

const inputFieldsPass = document.querySelectorAll('.error');
inputFieldsPass.forEach(function(inputField){
    inputField.addEventListener('input', checkPassMatch);
});
