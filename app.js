var _a;
// Function to update resume display
var updateResume = function (resume) {
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n      <h2>".concat(resume.name, "</h2>\n      <p>Email: ").concat(resume.email, "</p>\n      <p>Phone: ").concat(resume.phone, "</p>\n      <p>Location: ").concat(resume.location, "</p>\n      <h3>Education</h3>\n      <p>").concat(resume.education, "</p>\n      <h3>Skills</h3>\n      <p>").concat(resume.skills, "</p>\n      <h3>Experience</h3>\n      <p>").concat(resume.experience, "</p>\n    ");
    }
    else {
        console.error('Resume Output element not found');
    }
};
// Handle form submission
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var locationElement = document.getElementById("location");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var experienceElement = document.getElementById("experience");
    if (nameElement && emailElement && phoneElement && locationElement && educationElement && skillsElement && experienceElement) {
        var resumeData = {
            name: nameElement.value,
            email: emailElement.value,
            phone: phoneElement.value,
            location: locationElement.value,
            education: educationElement.value,
            skills: skillsElement.value,
            experience: experienceElement.value,
        };
        updateResume(resumeData);
        // Disable form inputs after submission
        nameElement.disabled = true;
        emailElement.disabled = true;
        phoneElement.disabled = true;
        locationElement.disabled = true;
        educationElement.disabled = true;
        skillsElement.disabled = true;
        experienceElement.disabled = true;
        // Optionally, reset form after submission
        // document.getElementById("resume-form")?.reset();
    }
    else {
        console.error('One or more form elements are missing');
    }
});
// Handle resize for responsive design
var handleResize = function () {
    var mobileView = window.matchMedia("(max-width: 600px)");
    if (mobileView.matches) {
        console.log("Switching to mobile view");
        document.body.style.fontSize = "14px";
    }
    else {
        console.log("Switching to desktop view");
        document.body.style.fontSize = "16px";
    }
};
window.addEventListener("resize", handleResize);
handleResize();
