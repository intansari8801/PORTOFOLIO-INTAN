```javascript
// ===============================
// MENU MOBILE
// ===============================

const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector(".nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Menutup menu ketika link diklik

document
    .querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


// ===============================
// TAHUN FOOTER OTOMATIS
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// ANIMASI SKILL
// ===============================

const progressBars =
    document.querySelectorAll(".progress-bar");


const skillObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.getAttribute(
                            "data-width"
                        );

                    entry.target.style.width =
                        width;

                }

            });

        },
        {
            threshold: 0.5
        }
    );


progressBars.forEach(bar => {

    skillObserver.observe(bar);

});


// ===============================
// FORM KONTAK
// ===============================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert(
                "Silakan isi semua bagian formulir."
            );

            return;

        }


        alert(
            "Terima kasih, " +
            name +
            "! Pesan kamu berhasil dikirim."
        );


        contactForm.reset();

    }
);


// ===============================
// ANIMASI CARD SAAT SCROLL
// ===============================

const cards =
    document.querySelectorAll(
        ".skill-card, " +
        ".project-card, " +
        ".about-card, " +
        ".info-box"
    );


const cardObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all 0.7s ease";

    cardObserver.observe(card);

});
```
