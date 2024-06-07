const form = document.getElementById("contact-form");
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const queryType = document.querySelector("input[name='query-type']:checked");
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;

    const formAlert = document.querySelectorAll(".form-alert");

    // Remove special characters
    // firstName = removeSpecialCharacters(firstName);
    // lastName = removeSpecialCharacters(lastName);

    let isValid = true;

    // First Name Validation
    if(firstName === "") {
        isValid = false;
        // I added here an additional step that requires a valid name(the else if statement)
        document.querySelector("#first-name + .form-alert").style.display = "block";
        document.querySelector("#first-name").style.border = "1px solid var(--red)";
    } else if (containsSpecialCharacters(firstName)) {
        isValid = false;
        document.querySelector("#first-name + .form-alert").textContent = "Enter a valid name";
        document.querySelector("#first-name + .form-alert").style.display = "block";
        document.querySelector("#first-name").style.border = "1px solid var(--red)";
    } else {
        document.querySelector("#first-name + .form-alert").style.display = "none";
        document.querySelector("#first-name").style.border = "1px solid var(--medium-grey)";
    }

    // Last Name Validation
    if(lastName === "") {
        isValid = false;

        document.querySelector("#last-name + .form-alert").style.display = "block";
        document.querySelector("#last-name").style.border = "1px solid var(--red)";
    } else {
        document.querySelector("#last-name + .form-alert").style.display = "none";
        document.querySelector("#last-name").style.border = "1px solid var(--medium-grey)";
    }

    // Email Validation
    if(!isValidEmail(email)) {
        isValid = false;

        document.querySelector("#email + .form-alert").style.display = "block";
        document.querySelector("#email").style.border = "1px solid var(--red)";        
    } else {
        document.querySelector("#email + .form-alert").style.display = "none";
        document.querySelector("#email").style.border = "1px solid var(--medium-grey)";
    }

    // Query Validation
    if(!queryType) {
        isValid = false;

        document.querySelector(".radio-inputs + .form-alert").style.display = "block";
    } else {
        document.querySelector(".radio-inputs + .form-alert").style.display = "none";
    }

    // Message Validation 
    if(message === "") {
        isValid = false;

        document.querySelector("#message + .form-alert").style.display = "block";
        document.querySelector("#message").style.border = "1px solid var(--red)";
    } else {
        document.querySelector("#message + .form-alert").style.display = "none";
        document.querySelector("#message").style.border = "1px solid var(--medium-grey)";
    }

    // Consent Validation 
    if(!consent) {
        isValid = false;

        formAlert[5].classList.add("form-error")
    } else {
        formAlert[5].classList.remove("form-error")
    }

    // Form is Valid 
    if(isValid) {
        successMessage.classList.add("active");
        form.reset();
        setTimeout(function() {
            location.reload();
        }, 4000);
    }
})

// Function to remove special characters - this is new as well
function containsSpecialCharacters(str) {
    const specialCharRegex = /[^\w\s]/gi;
    return specialCharRegex.test(str);
}

// Email Validation Function 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}