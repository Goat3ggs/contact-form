const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

// 1. Caching-ul elementelor DOM în afara evenimentului de submit
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("consent");

const firstNameAlert = document.querySelector("#first-name + .form-alert");
const lastNameAlert = document.querySelector("#last-name + .form-alert");
const emailAlert = document.querySelector("#email + .form-alert");
const queryAlert = document.querySelector(".radio-inputs + .form-alert");
const messageAlert = document.querySelector("#message + .form-alert");
const consentAlert = document.getElementById("consent-alert");

form.reset();

const formFields = [
    {
        element: firstNameInput,
        alert: firstNameAlert,
        validate: (val) => {
            if (val === "") return "This field is required";
            if (containsInvalidNameCharacters(val)) return "Enter a valid name";
            return null; 
        }
    },
    {
        element: lastNameInput,
        alert: lastNameAlert,
        validate: (val) => {
            if (val === "") return "This field is required";
            if (containsInvalidNameCharacters(val)) return "Enter a valid name";
            return null;
        }
    },
    {
        element: emailInput,
        alert: emailAlert,
        validate: (val) => {
            if (val === "") return "This field is required";
            if (!isValidEmail(val)) return "Please enter a valid email address";
            return null;
        }
    },
    {
        element: messageInput,
        alert: messageAlert,
        validate: (val) => {
            if (val === "") return "This field is required";
            return null;
        }
    }
];

formFields.forEach((field) => {
    
    field.element.addEventListener("blur", () => {

        const value = field.element.value.trim();
        const errorMessage = field.validate(value); 
        
        if (errorMessage) {
            setError(field.element, field.alert, errorMessage);
        } else {
            clearError(field.element, field.alert);
        }
    });

    field.element.addEventListener("input", () => {
        const value = field.element.value.trim();
        const errorMessage = field.validate(value);
        
        if (!errorMessage) {
            clearError(field.element, field.alert);
        } else if (errorMessage !== "This field is required") {
            setError(field.element, field.alert, errorMessage);
        }
    });
    
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    formFields.forEach((field) => {
        const value = field.element.value.trim();
        const errorMessage = field.validate(value);

        if (errorMessage) {
            isValid = false;
            setError(field.element, field.alert, errorMessage);
        } else {
            clearError(field.element, field.alert);
        }
    });


    const queryType = document.querySelector("input[name='query-type']:checked");
    if (!queryType) {
        isValid = false;
        setError(null, queryAlert);
    } else {
        clearError(null, queryAlert);
    }


    const consent = consentInput.checked;
    if (!consent) {
        isValid = false;
        consentAlert.classList.add("form-error");
    } else {
        consentAlert.classList.remove("form-error");
    }


    if (isValid) {
        successMessage.classList.add("active");
        form.reset(); // Aceasta va goli formularul
        setTimeout(() => {
            location.reload();
        }, 4000);
    }
});

// --- HELPFUL FUNCTIONS ---

function setError(inputElement, alertElement, customMessage = null) {
    alertElement.style.display = "block";
    if (customMessage) {
        alertElement.textContent = customMessage;
    }
    if (inputElement) {
        inputElement.style.border = "1px solid var(--red)";
    }
}

function clearError(inputElement, alertElement) {
    alertElement.style.display = "none";
    if (inputElement) {
        inputElement.style.border = "1px solid var(--medium-grey)";
    }
}

function containsInvalidNameCharacters(str) {
    // Permite doar litere (inclusiv diacritice românești), spații și cratime
    const invalidCharRegex = /[^a-zA-ZăâîșțĂÂÎȘȚ\s\-']/g;
    return invalidCharRegex.test(str);
}

// Email Validation Function 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// const radioInputs = document.querySelectorAll("input[name='query-type']");
// const radioOptions = document.querySelectorAll(".radio-option");

// radioInputs.forEach((radio) =>  {
//     radio.addEventListener("change", () => {
//         radioOptions.forEach((option) => {
//             option.classList.remove("active");
//         });

//         radio.closest(".radio-option").classList.add("active");
//     });
// });