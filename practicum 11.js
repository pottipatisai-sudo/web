
// GET FORM ELEMENTS

const form = document.getElementById("projectForm");

const message = document.getElementById("message");


// FORM SUBMISSION EVENT

form.addEventListener("submit", function(event) {

    // PREVENT PAGE RELOAD

    event.preventDefault();

    // GET INPUT VALUES

    const name = document.getElementById("name");

    const email = document.getElementById("email");

    const password = document.getElementById("password");

    const age = document.getElementById("age");

    const title = document.getElementById("title");

    const description =
        document.getElementById("description");


    // CLEAR CUSTOM VALIDATION

    password.setCustomValidity("");

    age.setCustomValidity("");


    // PASSWORD VALIDATION

    if (password.value.length < 8) {

        password.setCustomValidity(
            "Password must contain at least 8 characters"
        );

    }


    // AGE VALIDATION

    if (age.value < 18 || age.value > 35) {

        age.setCustomValidity(
            "Age must be between 18 and 35"
        );

    }


    // CHECK FORM VALIDATION

    if (!form.checkValidity()) {

        form.reportValidity();

        message.textContent =
            "Please correct the errors in the form.";

        message.style.color = "red";

        return;

    }


    // SUCCESS MESSAGE

    message.textContent =
        "Registration submitted successfully!";

    message.style.color = "green";


    // DISPLAY STUDENT DETAILS

    alert(
        "Registration Successful!\n\n" +
        "Student Name: " + name.value + "\n" +
        "Email: " + email.value + "\n" +
        "Project Title: " + title.value + "\n" +
        "Description: " + description.value
    );

});


// RESET FORM MESSAGE

form.addEventListener("reset", function() {

    message.textContent = "";

});
