
// SELECT ELEMENTS

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const projectCards = document.querySelectorAll(".project-card");

const noResults = document.getElementById("noResults");


// SEARCH AND FILTER FUNCTION

function filterProjects() {

    const searchValue = searchInput.value.toLowerCase();

    const selectedCategory = categoryFilter.value;

    let visibleCount = 0;

    projectCards.forEach(function(card) {

        const projectText = card.textContent.toLowerCase();

        const projectCategory = card.dataset.category;

        const matchesSearch = projectText.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            projectCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    // SHOW NO RESULTS MESSAGE

    if (visibleCount === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// SEARCH EVENT

searchInput.addEventListener("input", filterProjects);


// CATEGORY FILTER EVENT

categoryFilter.addEventListener("change", filterProjects);


// MORE INFORMATION BUTTONS

const infoButtons = document.querySelectorAll(".info-btn");

infoButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const card = button.closest(".project-card");

        const information = card.querySelector(".extra-info");

        information.classList.toggle("show");

        if (information.classList.contains("show")) {

            button.textContent = "Hide Information";

        } else {

            button.textContent = "More Information";

        }

    });

});
