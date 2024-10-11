// Get the form and the resume display area
var form = document.querySelector("form") as HTMLFormElement;
var displayResume = document.querySelector(".resume") as HTMLDivElement;
var resumeContent = document.querySelector(".resumeContent") as HTMLDivElement;

// Event listener to handle form submission
form.addEventListener("submit", (e: Event) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Retrieve the values from the form inputs
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let education = (document.getElementById("education") as HTMLInputElement).value;
    let work = (document.getElementById("work") as HTMLInputElement).value;
    let skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Create the resume content to display
    let showTheResume = `
    <p><strong>Name:</strong><span class="editable" contenteditable="true">${name}</span></p>
    <p><strong>Email:</strong><span class="editable" contenteditable="true">${email}</span></p>
    <p><strong>Education:</strong><span class="editable" contenteditable="true">${education}</span></p>
    <p><strong>Work Experience:</strong><span class="editable" contenteditable="true">${work}</span></p>
    <p><strong>Skills:</strong><span class="editable" contenteditable="true">${skills}</span></p>
    `;

    // Display the resume in the designated area
    if (displayResume) {
        resumeContent.innerHTML = showTheResume;
    }

    displayResume.classList.remove("hide")

    // Optional: Clear the form after submission
    form.reset();
});


