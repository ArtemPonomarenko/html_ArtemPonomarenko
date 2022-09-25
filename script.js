const about = document.querySelector(".about-me");
const episode = document.querySelector(".episode");
const skills = document.querySelector(".skill-list");
const project = document.querySelector(".project-list");
const education = document.querySelector(".table");
const contact = document.querySelector("fieldset");

const about_btn = document.querySelector(".about-me-section h3");
const episodes_btn = document.querySelector(".episodes-section h3");
const skills_btn = document.querySelector(".skills-section h3");
const project_btn = document.querySelector(".recent-projects-section h3");
const education_btn = document.querySelector(".education-section h3");
const contact_btn = document.querySelector(".contact-me-section h3");

const header = document.getElementById("header");
const height = header.offsetHeight;
const padding = header.offsetTop;

// Hide sections on loading
// window.addEventListener("load", () => {
//     about.style.display = "none";
//     episode.style.display = "none";
//     skills.style.display = "none";
//     project.style.display = "none";
//     education.style.display = "none";
//     contact.style.display = "none";
// });

// Add Sticky header
document.addEventListener("scroll", (e) => {
    header.classList.add("sticky");
    if (window.pageYOffset >= height + padding) {
        header.classList.add("sticky");
    }
    if (window.pageYOffset <= padding) {
        header.classList.remove("sticky");
    }
});
// Sliding functions....
let slideUp = (target, duration = 500) => {
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.style.removeProperty("transition-property");
    }, duration);
};

let slideDown = (target, duration = 500) => {
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;

    if (display === "none") display = "block";

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
    }, duration);
};

let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};

//Add event listeners to the buttons (Section titles)
about_btn.addEventListener("click", (e) => {
    slideToggle(about);
});
episodes_btn.addEventListener("click", (e) => {
    slideToggle(episode);
});

skills_btn.addEventListener("click", (e) => {
    slideToggle(skills);
});

education_btn.addEventListener("click", (e) => {
    slideToggle(education);
});

contact_btn.addEventListener("click", (e) => {
    slideToggle(contact);
});

project_btn.addEventListener("click", (e) => {
    slideToggle(project);
});
