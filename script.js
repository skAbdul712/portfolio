// JavaScript for Shaik Abdul Rabbani - Portfolio

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add dynamic active class to the navigation links
    const sections = document.querySelectorAll("section");

    const setActiveNav = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const sectionId = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.navbar ul li a[href*="${sectionId}"]`).classList.add("active");
            } else {
                document.querySelector(`.navbar ul li a[href*="${sectionId}"]`).classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", setActiveNav);

    // Toggle mobile navigation menu (if applicable)
    const mobileMenu = document.querySelector(".mobile-menu");
    const navbar = document.querySelector(".navbar");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navbar.classList.toggle("open");
        });
    }

    // Basic animations for profile picture and header
    const profilePic = document.querySelector(".profile-pic");

    if (profilePic) {
        profilePic.addEventListener("mouseover", () => {
            profilePic.classList.add("bounce");
        });

        profilePic.addEventListener("animationend", () => {
            profilePic.classList.remove("bounce");
        });
    }
});

