
// Login form start
document.querySelector(".reg_individualTab").onclick = function () {
    document.querySelector("#reg_individualForm").style.display = "block";
    document.querySelector("#reg_businessForm").style.display = "none";
    document.querySelector(".reg_individualTab").classList.add("tabActive");
    document.querySelector(".reg_businessTab").classList.remove("tabActive")
}
document.querySelector(".reg_businessTab").onclick = function () {
    document.querySelector("#reg_individualForm").style.display = "none";
    document.querySelector("#reg_businessForm").style.display = "block";
    document.querySelector(".reg_individualTab").classList.remove("tabActive");
    document.querySelector(".reg_businessTab").classList.add("tabActive")
}
// Form validation start
// individual form
function reg_individualFormValidation() {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Custom error messages for required fields
    const errorMessages = {
        fName_individual: "First name is required",
        lName_individual: "Last name is required",
        reg_individualEmail: "Email is required",
        reg_createPassword: "Password is required",
        iAgree_individual: "You must agree to the terms"
    };

    // Fields to validate (promo code and phone are excluded here)
    const requiredFields = [
        "fName_individual",
        "lName_individual",
        "reg_individualEmail",
        "reg_createPassword",
        "iAgree_individual"
    ];

    requiredFields.forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        const label = document.querySelector(`label[for=${fieldId}]`); // Target corresponding label

        // Validate required fields (text, email, password)
        if ((field.type === "text" || field.type === "email" || field.type === "password") && field.value.trim() === "") {
            isValid = false;
            label.textContent = errorMessages[fieldId]; // Show custom error message
            label.style.color = "#ff827a"; // Highlight label in red
            field.style.border = "1px solid #ff827a"; // Highlight input border
        } else if (field.type === "checkbox" && !field.checked) {
            isValid = false;
            const errorSpan = document.querySelector(".iAgreeErrorMessage");
            errorSpan.style.display = "inline"; // Show checkbox error
            errorSpan.style.color = "#ff827a";
        } else {
            // Reset styling if input is valid
            if (field.type !== "checkbox") {
                label.textContent = label.textContent.replace(/ is required$/, ""); // Reset label text
                label.style.color = ""; // Reset label color
                field.style.border = ""; // Reset input border
            } else {
                const errorSpan = document.querySelector(".iAgreeErrorMessage");
                errorSpan.style.display = "none"; // Hide checkbox error
            }
        }

        // Add event listener to reset styles and label on user input
        field.addEventListener("input", function () {
            if (field.type !== "checkbox" && field.value.trim() !== "") {
                label.textContent = label.textContent.replace(/ is required$/, ""); // Reset label text
                label.style.color = ""; // Reset label color
                field.style.border = ""; // Reset input border
            }
        });

        // Special handling for the checkbox
        if (field.type === "checkbox") {
            field.addEventListener("change", function () {
                const errorSpan = document.querySelector(".iAgreeErrorMessage");
                if (field.checked) {
                    errorSpan.style.display = "none"; // Hide the error if checkbox is checked
                }
            });
        }
    });

    // Password validation logic
    const createPassword = document.getElementById("reg_createPassword");
    const confirmPassword = document.getElementById("reg_confirmPassword");
    const confirmPasswordLabel = document.querySelector(`label[for=reg_confirmPassword]`);

    if (confirmPassword.value.trim() === "") {
        isValid = false;
        confirmPasswordLabel.textContent = "Confirm password is required"; // Show required message if empty
        confirmPasswordLabel.style.color = "#ff827a"; // Highlight label in red
        confirmPassword.style.border = "1px solid #ff827a"; // Highlight input border
    } else if (createPassword.value.trim() !== confirmPassword.value.trim()) {
        isValid = false;
        confirmPasswordLabel.textContent = "Password does not match."; // Show mismatch message
        confirmPasswordLabel.style.color = "#ff827a"; // Highlight label in red
        confirmPassword.style.border = "1px solid #ff827a"; // Highlight input border
    } else {
        confirmPasswordLabel.textContent = "Confirm password*"; // Reset label text to its original state
        confirmPasswordLabel.style.color = ""; // Reset label color
        confirmPassword.style.border = ""; // Reset input border
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("reg_individualForm").submit(); // Submit the form
    }
}

// Toggle password visibility using an image
document.querySelectorAll('.toggle-password').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target'); // Get the target input ID
        const targetInput = document.getElementById(targetId);

        if (targetInput.type === "password") {
            targetInput.type = "text"; // Show password
            this.src = "assets/images/eye.png"; // Change to "eye closed" icon
            this.alt = "Hide Password"; // Update alt text
        } else {
            targetInput.type = "password"; // Hide password
            this.src = "assets/images/view.png"; // Change back to "eye open" icon
            this.alt = "Show Password"; // Update alt text
        }
    });
});


// Business form
function reg_businessLoginFormValidation() {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Custom error messages for required fields
    const errorMessages = {
        fName_business: "First name is required",
        lName_business: "Last name is required",
        reg_businessEmail: "Email is required",
        reg_createPassword_business: "Password is required",
        iAgree_business: "You must agree to the terms"
    };

    // Fields to validate (promo code and phone are excluded here)
    const requiredFields = [
        "fName_business",
        "lName_business",
        "reg_businessEmail",
        "reg_createPassword_business",
        "iAgree_business"
    ];

    requiredFields.forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        const label = document.querySelector(`label[for=${fieldId}]`); // Target corresponding label

        // Validate required fields (text, email, password)
        if ((field.type === "text" || field.type === "email" || field.type === "password") && field.value.trim() === "") {
            isValid = false;
            label.textContent = errorMessages[fieldId]; // Show custom error message
            label.style.color = "#ff827a"; // Highlight label in red
            field.style.border = "1px solid #ff827a"; // Highlight input border
        } else if (field.type === "checkbox" && !field.checked) {
            isValid = false;
            const errorSpan = document.querySelector(".businessErrorMessage");
            errorSpan.style.display = "inline"; // Show checkbox error
            errorSpan.style.color = "#ff827a";
        } else {
            // Reset styling if input is valid
            if (field.type !== "checkbox") {
                label.textContent = label.textContent.replace(/ is required$/, ""); // Reset label text
                label.style.color = ""; // Reset label color
                field.style.border = ""; // Reset input border
            } else {
                const errorSpan = document.querySelector(".businessErrorMessage");
                errorSpan.style.display = "none"; // Hide checkbox error
            }
        }

        // Add event listener to reset styles and label on user input
        field.addEventListener("input", function () {
            if (field.type !== "checkbox" && field.value.trim() !== "") {
                label.textContent = label.textContent.replace(/ is required$/, ""); // Reset label text
                label.style.color = ""; // Reset label color
                field.style.border = ""; // Reset input border
            }
        });

        // Special handling for the checkbox
        if (field.type === "checkbox") {
            field.addEventListener("change", function () {
                const errorSpan = document.querySelector(".iAgreeErrorMessage");
                if (field.checked) {
                    errorSpan.style.display = "none"; // Hide the error if checkbox is checked
                }
            });
        }
    });

    // Password validation logic
    const createPassword = document.getElementById("reg_createPassword_business");
    const confirmPassword = document.getElementById("reg_confirmPassword_business");
    const confirmPasswordLabel = document.querySelector(`label[for=reg_confirmPassword_business]`);

    if (confirmPassword.value.trim() === "") {
        isValid = false;
        confirmPasswordLabel.textContent = "Confirm password is required"; // Show required message if empty
        confirmPasswordLabel.style.color = "#ff827a"; // Highlight label in red
        confirmPassword.style.border = "1px solid #ff827a"; // Highlight input border
    } else if (createPassword.value.trim() !== confirmPassword.value.trim()) {
        isValid = false;
        confirmPasswordLabel.textContent = "Password not matched"; // Show mismatch message
        confirmPasswordLabel.style.color = "#ff827a"; // Highlight label in red
        confirmPassword.style.border = "1px solid #ff827a"; // Highlight input border
    } else {
        confirmPasswordLabel.textContent = "Confirm password*"; // Reset label text to its original state
        confirmPasswordLabel.style.color = ""; // Reset label color
        confirmPassword.style.border = ""; // Reset input border
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("reg_businessForm").submit(); // Submit the form
    }
}

// Toggle password visibility using an image
document.querySelectorAll('.toggle_password_business').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        // Directly use the ID in the `data-target` attribute to find the input
        const targetId = this.getAttribute('data-target'); // Get the ID of the input
        const targetInput = document.getElementById(targetId);

        if (targetInput) { // Ensure the target input exists
            if (targetInput.type === "password") {
                targetInput.type = "text"; // Show password
                this.src = "assets/images/eye.png"; // Change to "eye closed" icon
                this.alt = "Hide Password"; // Update alt text
            } else {
                targetInput.type = "password"; // Hide password
                this.src = "assets/images/view.png"; // Change back to "eye open" icon
                this.alt = "Show Password"; // Update alt text
            }
        } else {
            console.error(`No input found with ID: ${targetId}`); // Log an error if the input is missing
        }
    });
});

// Login form close




