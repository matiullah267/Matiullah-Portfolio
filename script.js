// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});

// Contact Message
// Contact Form

function sendMessage() {

    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const message =
        document.getElementById("contactMessage").value.trim();


    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );


    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";
}

// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function () {
    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
// Project Details Modal

const projectData = {
    "Java Car Racing Game": {
        icon: "🚗",
        category: "Java Project",
        description:
            "A fun car racing game developed using Java. This project includes game controls, movement and an interactive interface.",
        tech: ["Java", "GUI", "Game Development"]
    },

    "Cisco Networking Project": {
        icon: "🌐",
        category: "Networking",
        description:
            "A practical computer network designed and configured using Cisco Packet Tracer with routing and switching.",
        tech: ["Cisco", "Routing", "Switching", "Packet Tracer"]
    },

    "Android Application": {
        icon: "📱",
        category: "Android Project",
        description:
            "A modern Android application designed with a clean and user-friendly interface.",
        tech: ["Java", "Android", "UI Design"]
    }
};


function showProject(projectName) {

    const project = projectData[projectName];

    if (!project) {
        return;
    }

    document.getElementById("modalIcon").textContent = project.icon;

    document.getElementById("modalCategory").textContent =
        project.category;

    document.getElementById("modalTitle").textContent =
        projectName;

    document.getElementById("modalDescription").textContent =
        project.description;

    const techContainer =
        document.getElementById("modalTech");

    techContainer.innerHTML = "";

    project.tech.forEach(function (technology) {

        const span = document.createElement("span");

        span.textContent = technology;

        techContainer.appendChild(span);
    });

    document
        .getElementById("projectModal")
        .classList.add("active");
}


function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("active");
}


// Close modal when clicking outside
document
    .getElementById("projectModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeProject();
        }

    });


// Close modal with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProject();
    }

});
// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});
// Back to Top

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Typing Text Animation

const typingText = document.getElementById("typing-text");

const roles = [
    "Computer Science Professional",
    "Web Developer",
    "Java Developer",
    "Network Specialist"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeRole, 1800);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeRole, deleting ? 60 : 100);
}

typeRole();
