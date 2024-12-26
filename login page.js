
document.querySelector("form").addEventListener("submit", function (e) {
    const usernameField = document.querySelector("input[type='text']");
    const passwordField = document.querySelector("input[type='password']");
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    let errors = [];

    if (username === "") {
        errors.push("Username cannot be empty.");
        usernameField.style.border = "2px solid red";
    } else {
        usernameField.style.border = "";
    }

    if (password === "") {
        errors.push("Password cannot be empty.");
        passwordField.style.border = "2px solid red";
    } else {
        passwordField.style.border = "";
    }

    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join(" \n"));
    }
});

document.querySelector(".back-btn").addEventListener("click", function () {
    alert("Back button clicked. Redirecting to the previous page.");
});

document.querySelector(".reset-btn").addEventListener("click", function () {
    const confirmation = confirm("Are you sure you want to reset the form?");
    if (!confirmation) {
        event.preventDefault();
    }
});
