// Get the form and the resume display area
var form = document.querySelector("form");
var displayResume = document.querySelector(".resume");
var resumeContent = document.querySelector(".resumeContent");
// Event listener to handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    // Retrieve the values from the form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    // Create the resume content to display
    var showTheResume = "\n    <p><strong>Name:</strong><span class=\"editable\" contenteditable=\"true\">".concat(name, "</span></p>\n    <p><strong>Email:</strong><span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></p>\n    <p><strong>Education:</strong><span class=\"editable\" contenteditable=\"true\">").concat(education, "</span></p>\n    <p><strong>Work Experience:</strong><span class=\"editable\" contenteditable=\"true\">").concat(work, "</span></p>\n    <p><strong>Skills:</strong><span class=\"editable\" contenteditable=\"true\">").concat(skills, "</span></p>\n    ");
    // Display the resume in the designated area
    if (displayResume) {
        resumeContent.innerHTML = showTheResume;
    }
    displayResume.classList.remove("hide");
    // Optional: Clear the form after submission
    form.reset();
});
