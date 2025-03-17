
// Login form start
document.querySelector(".individualTab").onclick = function () {
    document.querySelector("#individualForm").style.display = "block";
    document.querySelector("#businessForm").style.display = "none";
    document.querySelector(".individualTab").classList.add("tabActive");
    document.querySelector(".businessTab").classList.remove("tabActive")
}
document.querySelector(".businessTab").onclick = function () {
    document.querySelector("#individualForm").style.display = "none";
    document.querySelector("#businessForm").style.display = "block";
    document.querySelector(".individualTab").classList.remove("tabActive");
    document.querySelector(".businessTab").classList.add("tabActive")
}
// Form validation start
// individual form
function individualFormValidation() {
    var individualEmail = document.getElementById('individualEmail').value;
    var individualEmailBorderChange = document.getElementById('individualEmail');
    var individualPasswordBorderChange = document.getElementById('individualPassword');
    var individualPassword = document.getElementById('individualPassword').value;
    var individualEmailLabel = document.getElementById('individualEmailLabel');
    var individualPasswordLabel = document.getElementById('individualPasswordLabel');

    

    if (individualEmail === '') {
        individualEmailLabel.style.color = '#ff827a';
        individualEmailBorderChange.style.borderColor = '#ff827a';
        individualEmailLabel.textContent = 'Email can’t be empty';
    } else {
        individualEmailLabel.style.color = 'white';
        individualEmailBorderChange.style.borderColor = 'unset';
        individualEmailLabel.textContent = 'Your email';
    }

    if (individualPassword === '') {
        individualPasswordLabel.style.color = '#ff827a';
        individualPasswordBorderChange.style.borderColor = '#ff827a';
        individualPasswordLabel.textContent = 'Password can’t be empty';
    } else {
        individualPasswordLabel.style.color = 'white';
        individualPasswordBorderChange.style.borderColor = '#ff827a';
        individualPasswordLabel.textContent = 'Password';
    }
}

// Business form
function businessLoginFormValidation() {
    var businessEmail = document.getElementById('businessEmail').value;
    var businessEmailBorder = document.getElementById('businessEmail');
    var businessPassword = document.getElementById('businessPassword').value;
    var businessPasswordBorder = document.getElementById('businessPassword');
    var businessEmailLabel = document.getElementById('businessEmailLabel');
    var businessPasswordLabel = document.getElementById('businessPasswordLabel');

    if (businessEmail === '') {
        businessEmailLabel.style.color = '#ff827a';
        businessEmailBorder.style.borderColor = '#ff827a';
        businessEmailLabel.textContent = 'Business Email can’t be empty';
    } else {
        businessEmailLabel.style.color = 'white';
        businessEmailBorder.style.borderColor = 'unset';
        businessEmailLabel.textContent = 'Your email';
    }

    if (businessPassword === '') {
        businessPasswordLabel.style.color = '#ff827a';
        businessPasswordBorder.style.borderColor = '#ff827a';
        businessPasswordLabel.textContent = 'Password can’t be empty';
    } else {
        businessPasswordLabel.style.color = 'white';
        businessPasswordBorder.style.borderColor = 'unset';
        businessPasswordLabel.textContent = 'Password';
    }
}
// Login form close




