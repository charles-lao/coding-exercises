const email = document.querySelector('#email');
const zipcode = document.querySelector("#zipcode");
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector("#password-confirm");


email.addEventListener("blur", (e) => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address!");
    } else {
        email.setCustomValidity("");
    }

    if(email.validity.patternMismatch) {
        email.setCustomValidity("Email must contain alphanumeric and special characters.");
    } else {
        email.setCustomValidity("");
    }
});

zipcode.addEventListener("blur", (e) => {
    if(zipcode.validity.patternMismatch) {
        zipcode.customValidity("Please enter a valid zip code.");
    } else {
        zipcode.customValidity("");
    }
});

password.addEventListener("blur", (e) => {
    if(password.validity.patternMismatch) {
        password.setCustomValidity("Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one digit, and one special character.");
    } else {
        password.setCustomValidity("");
    }
});

passwordConfirm.addEventListener("blur", (e) => {
    if(passwordConfirm.validity.patternMismatch) {
        passwordConfirm.setCustomValidity("Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one digit, and one special character.");
    } else {
        passwordConfirm.setCustomValidity("");
    }
});