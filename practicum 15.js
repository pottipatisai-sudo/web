
// SELECT HTML ELEMENTS

const themeToggle = document.getElementById("themeToggle");

const statusText = document.getElementById("status");


// LOAD SAVED THEME

const savedTheme = localStorage.getItem("theme");


// APPLY SAVED THEME

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.checked = true;

    statusText.textContent = "Dark Mode is Enabled";

} else {

    document.body.classList.remove("dark-mode");

    themeToggle.checked = false;

    statusText.textContent = "Light Mode is Enabled";

}


// TOGGLE SWITCH EVENT

themeToggle.addEventListener("change", function() {

    if (themeToggle.checked) {

        // ENABLE DARK MODE

        document.body.classList.add("dark-mode");

        localStorage.setItem("theme", "dark");

        statusText.textContent = "Dark Mode is Enabled";

    } else {

        // ENABLE LIGHT MODE

        document.body.classList.remove("dark-mode");

        localStorage.setItem("theme", "light");

        statusText.textContent = "Light Mode is Enabled";

    }

});
