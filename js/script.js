/* =========================================================
   GOTA D´ SOL 2.0
   SCRIPT.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    /* ================= HEADER SCROLL ================= */

    const updateHeader = () => {

        if (!header) return;

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


    /* ================= MOBILE MENU ================= */

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen =
                navigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
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


        /* Fechar menu ao clicar fora */

        document.addEventListener("click", (event) => {

            if (
                navigation.classList.contains("open") &&
                !navigation.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }

        });


        /* Fechar menu com ESC */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }

        });

    }


    /* ================= ACTIVE NAVIGATION ================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".navigation a[href^='#']"
        );


    const updateActiveLink = () => {

        if (!sections.length || !navLinks.length) {
            return;
        }

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
        updateActiveLink,
        {
            passive: true
        }
    );

    updateActiveLink();

    /* ================= SERVIÇOS ================= */

    const servicesGrid =
        document.querySelector(".services-grid");

    const services = [
        {
            number: "01",
            icon: "✈",
            title: "Passagens aéreas",
            description:
                "Pesquisa e cotação de opções de voo de acordo com o destino, datas e necessidades da viagem.",
            action: action: "Solicitar cotação", message: "Olá! Gostaria de solicitar uma cotação de passagens aéreas."
        },
        {
            number: "02",
            icon: "▣",
            title: "Vistos",
            description:
                "Orientação sobre documentação e preparação do processo de acordo com o destino pretendido.",
            action: "Saber mais", message: "Olá! Gostaria de saber mais sobre o serviço de vistos."
        },
        {
            number: "03",
            icon: "⌂",
            title: "Hotéis",
            description:
                "Pesquisa e reserva de alojamento de acordo com o destino, período e perfil da viagem.",
            action: "Solicitar serviço", message: "Olá! Gostaria de solicitar ajuda para encontrar e reservar um hotel."
        },
        {
            number: "04",
            icon: "◆",
            title: "Seguros de viagem",
            description:
                "Soluções de seguro para proporcionar maior tranquilidade durante a sua viagem.",
            action: "Saber mais", message: "Olá! Gostaria de saber mais sobre seguros de viagem."
        },
        {
            number: "05",
            icon: "➜",
            title: "Transferes",
            description:
                "Apoio na organização de transferes e deslocações durante a viagem.",
            action: "Solicitar serviço", message: "Olá! Gostaria de solicitar um serviço de transfer."
        },
        {
            number: "06",
            icon: "★",
            title: "Excursões e turismo",
            description:
                "Passeios e soluções turísticas pensadas para diferentes destinos e perfis.",
            action: "Explorar opções", message: "Olá! Gostaria de saber mais sobre excursões e opções de turismo."
        },
        {
            number: "07",
            icon: "◎",
            title: "Consultoria",
            description:
                "Orientação personalizada para ajudar a organizar e planear a sua viagem.",
            action: "Falar connosco", message: "Olá! Gostaria de falar com a GOTA D´ SOL sobre consultoria de viagem."
        },
        {
            number: "08",
            icon: "+",
            title: "Soluções personalizadas",
            description:
                "Tem uma necessidade específica? Apresente-nos o seu projeto.",
            action: "Falar connosco",message: "Olá! Tenho uma necessidade específica de viagem e gostaria de falar com a GOTA D´ SOL."
            featured: true
        }
    ];   
if (servicesGrid) {

        servicesGrid.innerHTML = services.map(service => `

            <article class="service-card ${service.featured ? "featured" : ""}">

                <div class="service-top">

                    <span class="service-icon">
                        ${service.icon}
                    </span>

                    <span class="service-number">
                        ${service.number}
                    </span>

                </div>

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

<a
    href="https://wa.me/244924999736?text=${encodeURIComponent(service.message)}"
    target="_blank"
    rel="noopener noreferrer"
>
    ${service.action}
    <span>→</span>
</a>

            </article>

        `).join("");

    }
    /* ================= FAQ ================= */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(item => {

        item.addEventListener(
            "toggle",
            () => {

                if (!item.open) {
                    return;
                }

                faqItems.forEach(otherItem => {

                    if (
                        otherItem !== item &&
                        otherItem.open
                    ) {

                        otherItem.removeAttribute(
                            "open"
                        );

                    }

                });

            }
        );

    });

});
