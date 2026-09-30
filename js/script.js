/* =========================================================
   GOTA D´ SOL 2.0
   SCRIPT.JS
   ========================================================= */

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");


/* ================= HEADER SCROLL ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navigation.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Fechar menu"
                : "Abrir menu"
        );

    });


    /* Fechar menu ao clicar num link */

    navigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            });

        });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("main section[id]");

const navLinks =
    document.querySelectorAll(
        ".navigation a[href^='#']"
    );


const updateActiveLink = () => {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 140;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveLink
);

updateActiveLink();


/* ================= FAQ ================= */

/*
   Permite manter apenas uma pergunta aberta
   de cada vez.
*/

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("toggle", () => {

        if (!item.open) return;

        faqItems.forEach(otherItem => {

            if (
                otherItem !== item &&
                otherItem.open
            ) {

                otherItem.removeAttribute("open");

            }

        });

    });

});
