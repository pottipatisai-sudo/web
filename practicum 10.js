
// GET HTML ELEMENTS

const projectName =
    document.getElementById("projectName");

const projectDesc =
    document.getElementById("projectDesc");

const projectList =
    document.getElementById("projectList");

const addBtn =
    document.getElementById("addBtn");


// ADD NEW PROJECT

addBtn.addEventListener("click", function() {

    const name = projectName.value.trim();
    const desc = projectDesc.value.trim();

    if (name === "" || desc === "") {
        alert("Please enter project name and description");
        return;
    }

    // CREATE NEW DIV

    const newProject = document.createElement("div");

    newProject.className = "project";

    // CREATE HEADING

    const heading = document.createElement("h3");

    heading.textContent = name;

    // CREATE PARAGRAPH

    const paragraph = document.createElement("p");

    paragraph.textContent = desc;

    // CREATE DELETE BUTTON

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.className = "deleteBtn";

    // REMOVE PROJECT

    deleteBtn.addEventListener("click", function() {

        newProject.remove();

    });

    // ADD ELEMENTS TO DIV

    newProject.appendChild(heading);

    newProject.appendChild(paragraph);

    newProject.appendChild(deleteBtn);

    // ADD PROJECT TO LIST

    projectList.appendChild(newProject);

    // CLEAR INPUT FIELDS

    projectName.value = "";

    projectDesc.value = "";

    alert("Project added successfully!");

});
