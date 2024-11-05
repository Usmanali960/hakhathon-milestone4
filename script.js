document.addEventListener("DOMContentLoaded", () => {
    // Get the form and the resume display area
    var form = document.querySelector("form");
    var displayResume = document.querySelector(".finalResume");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    // Event listener to handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        // Retrieve the values from the form inputs
        let imageInput = document.getElementById("img");
        let name = document.getElementById("name").value;
        let about = document.getElementById("about").value;
        let skills = document.getElementById("skills").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
        let address = document.getElementById("address").value;
        let work = document.getElementById("work").value;
        let languages = document.getElementById("langauges").value;
        let education = document.getElementById("Education").value;
        // Create the left section with an img tag for the user’s photo
        let leftSection = `
        <img id="userPhoto" style="width: 100px; height: 100px; border-radius: 50%;" alt="User Photo"/>
        <h3>${name}</h3>
        <hr>
        <h4>About Me</h4>
        <p>${about}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Contact</h4>
        <p class="contactDetails"><i class='bx bxs-envelope'></i><span>${email}</span></p>
        <p class="contactDetails"><i class='bx bxs-phone-call'></i><span>${number}</span></p>
        <p class="contactDetails"><i class='bx bxs-location-plus'></i><span>${address}</span></p>
        `;
        let rightSection = `
        <h4>Work Experience</h4>
        <p>${work}</p>
        <h4>Languages</h4>
        <p>${languages}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <button id="printResume" style="margin-top: 10px; padding: 10px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">Download Resume</button>
        `;
        // Display the resume in the designated area
        if (leftSection && rightSection) {
            alert("Your resume was generated! You can edit your resume without page reload by clicking on the input sections and editing them.");
            left.innerHTML = leftSection;
            right.innerHTML = rightSection;
            displayResume.classList.remove("hide");
            // Display the uploaded photo on the resume
            if (imageInput.files && imageInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const userPhoto = document.getElementById("userPhoto");
                    userPhoto.src = e.target?.result;
                };
                reader.readAsDataURL(imageInput.files[0]);
            }
            // Add event listener for the print button
            const printButton = document.getElementById("printResume");
            printButton.addEventListener("click", () => {
                window.print();
            });
        }
    });
});
