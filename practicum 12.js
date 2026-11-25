
// GET HTML ELEMENTS

const loadBtn = document.getElementById("loadBtn");

const projectData = document.getElementById("projectData");

const loading = document.getElementById("loading");

const error = document.getElementById("error");


// FETCH DATA FROM API

async function loadProjects() {

    loading.textContent = "Loading project data...";

    error.textContent = "";

    projectData.innerHTML = "";

    loadBtn.disabled = true;

    try {

        // FETCH API DATA

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        // CHECK RESPONSE

        if (!response.ok) {
            throw new Error("Unable to fetch data");
        }

        // CONVERT RESPONSE INTO JSON

        const data = await response.json();

        // DISPLAY DATA

        data.forEach(function(project) {

            const row = document.createElement("tr");

            const idCell = document.createElement("td");

            const titleCell = document.createElement("td");

            const descriptionCell = document.createElement("td");

            idCell.textContent = project.id;

            titleCell.textContent = project.title;

            descriptionCell.textContent = project.body;

            row.appendChild(idCell);

            row.appendChild(titleCell);

            row.appendChild(descriptionCell);

            projectData.appendChild(row);

        });

    }

    catch (err) {

        error.textContent =
            "Error: " + err.message;

    }

    finally {

        loading.textContent = "";

        loadBtn.disabled = false;

    }

}


// BUTTON EVENT

loadBtn.addEventListener("click", loadProjects);
