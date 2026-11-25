
// EXPLORE BUTTON

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function() {

    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });

    showNotification("Explore our research projects!");

});


// NOTIFICATION FUNCTION

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    notification.textContent = message;

    notification.classList.remove("show");

    void notification.offsetWidth;

    notification.classList.add("show");

    setTimeout(function() {
        notification.classList.remove("show");
    }, 3000);

}


// LEARN MORE BUTTONS

const infoButtons =
    document.querySelectorAll(".infoBtn");

infoButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        const projectNames = [
            "Artificial Intelligence",
            "Renewable Energy",
            "Electronics Research"
        ];

        showNotification(
            "You selected " + projectNames[index]
        );

    });

});


// SHOW AND HIDE ABOUT SECTION

const toggleBtn =
    document.getElementById("toggleBtn");

const aboutContent =
    document.getElementById("aboutContent");

toggleBtn.addEventListener("click", function() {

    if (aboutContent.classList.contains("hidden")) {

        aboutContent.classList.remove("hidden");

        aboutContent.classList.add("visible");

        toggleBtn.textContent = "Hide Information";

    } else {

        aboutContent.classList.remove("visible");

        aboutContent.classList.add("hidden");

        toggleBtn.textContent = "Show Information";

    }

});
