
/* =========================
   1. MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the mobile menu after clicking a navigation link.

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
});

// Close the mobile menu when returning to desktop width.

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    }
});


/* =========================
   2. CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

// Replace this with your real email address.
const recipientEmail = "your@email.com";

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that no field is empty.

    if (!name || !email || !message) {
        alert("Please complete all fields.");
        return;
    }

    // Prepare the email content.

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message
    );

    // Open the visitor's default email application.

    const mailtoLink =
        "mailto:" + recipientEmail +
        "?subject=" + subject +
        "&body=" + body;

    window.location.href = mailtoLink;
});
