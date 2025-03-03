document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".zoomable");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");
    const contactForm = document.getElementById("contact-form");
    const contactFormClose = document.getElementById("contact-form-close");
    const contactFormData = document.getElementById("contact-form-data");

    // Функція відкриття лайтбоксу
    const openLightbox = (imgSrc) => {
        lightbox.style.display = "flex";
        lightboxImg.src = imgSrc;
    };

    // Функція закриття лайтбоксу
    const closeLightbox = () => {
        lightbox.style.display = "none";
    };

    images.forEach(img => {
        img.addEventListener("click", () => {
            openLightbox(img.src);
        });
    });

    closeBtn.addEventListener("click", () => {
        closeLightbox();
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });

    const contactBtn = document.getElementById("contact-btn");
    contactBtn.addEventListener("click", () => {
        // Показуємо форму
        contactForm.style.display = "flex";
    });

    contactFormClose.addEventListener("click", () => {
        // Закриваємо форму
        contactForm.style.display = "none";
    });

    contactFormData.addEventListener("submit", (e) => {
        e.preventDefault();

        // Відправка даних на Formspree
        contactFormData.submit();

        // Показуємо попап
        popup.style.display = "flex";
    });

    popupClose.addEventListener("click", () => {
        // Закриваємо попап
        popup.style.display = "none";
    });

    // Анімація при скролі
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight / 1.3) {
                section.style.animationPlayState = "running";
            }
        });
    });
});