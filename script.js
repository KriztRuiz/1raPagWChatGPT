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

    const skills = document.querySelectorAll("#skills ul li");
    const courseLinks = document.getElementById("course-links");

    skills.forEach(function(skill) {
        skill.addEventListener("click", function() {
            const skillName = skill.getAttribute("data-skill");
            skills.forEach(function(s) {
                s.classList.remove("active");
            });
            skill.classList.add("active");
            courseLinks.classList.add("show-links");

            let courses;
            switch(skillName) {
                case 'html':
                    courses = `
                        <a href="https://www.example.com/html-course-1">Curso de HTML 1</a>
                        <a href="https://www.example.com/html-course-2">Curso de HTML 2</a>
                        <a href="https://www.example.com/html-course-3">Curso de HTML 3</a>`;
                    break;
                case 'css':
                    courses = `
                        <a href="https://www.example.com/css-course-1">Curso de CSS 1</a>
                        <a href="https://www.example.com/css-course-2">Curso de CSS 2</a>
                        <a href="https://www.example.com/css-course-3">Curso de CSS 3</a>`;
                    break;
                case 'javascript':
                    courses = `
                        <a href="https://www.youtube.com/watch?v=i3OdKwuBjeM">Nodejs Curso Práctico desde Cero (Javascript en el Backend)</a>
                        <a href="https://www.example.com/javascript-course-2">Curso de JavaScript 2</a>
                        <a href="https://www.example.com/javascript-course-3">Curso de JavaScript 3</a>`;
                    break;
                case 'php':
                    courses = `
                        <a href="https://www.example.com/php-course-1">Curso de PHP 1</a>
                        <a href="https://www.example.com/php-course-2">Curso de PHP 2</a>
                        <a href="https://www.example.com/php-course-3">Curso de PHP 3</a>`;
                    break;
                case 'mysql':
                    courses = `
                        <a href="https://www.example.com/mysql-course-1">Curso de MySQL 1</a>
                        <a href="https://www.example.com/mysql-course-2">Curso de MySQL 2</a>
                        <a href="https://www.example.com/mysql-course-3">Curso de MySQL 3</a>`;
                    break;
                case 'python':
                    courses = `
                        <a href="https://www.example.com/python-course-1">Curso de Python 1</a>
                        <a href="https://www.example.com/python-course-2">Curso de Python 2</a>
                        <a href="https://www.example.com/python-course-3">Curso de Python 3</a>`;
                    break;
                case 'github':
                    courses = `
                        <a href="https://www.example.com/github-course-1">Curso de GitHub 1</a>
                        <a href="https://www.example.com/github-course-2">Curso de GitHub 2</a>
                        <a href="https://www.example.com/github-course-3">Curso de GitHub 3</a>`;
                    break;
                case 'heroku':
                    courses = `
                        <a href="https://www.example.com/heroku-course-1">Curso de Heroku 1</a>
                        <a href="https://www.example.com/heroku-course-2">Curso de Heroku 2</a>
                        <a href="https://www.example.com/heroku-course-3">Curso de Heroku 3</a>`;
                    break;
                default:
                    courses = '';
            }
            courseLinks.innerHTML = courses;
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
