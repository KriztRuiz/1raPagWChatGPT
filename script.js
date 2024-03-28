document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            const sectionId = link.getAttribute("data-section");
            sections.forEach(function(section) {
                if (section.id === sectionId) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });
        });
    });

    
    const contactButtons = document.querySelectorAll(".contact-button");

    contactButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const buttonText = button.querySelector("span").textContent;
            alert("Has hecho clic en el botón de " + buttonText);
        });
    });


});
