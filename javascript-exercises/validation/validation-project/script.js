const email = document.querySelector('#email');

email.addEventListener("blur", (e) => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email address!");
    } else {
        email.setCustomValidity("");
    }
});

