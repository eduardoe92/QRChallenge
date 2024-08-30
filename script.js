document.getElementById("currentYear").textContent =
    new Date().getFullYear();

const challenges = [
    {
        title: "QR Challenge",
        challengeNumber: "01",
        imgSrc: "img/QRImg.webp",
        imgAlt: "QR - Challenge 01",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/01-QR%20Challenge/qr-code-component-main",
        deployLink: "https://qrchallenge-frontendmentor.vercel.app/",
    },
    {
        title: "Age Calculator",
        challengeNumber: "02",
        imgSrc: "img/AgeCalculatorImg.webp",
        imgAlt: "Age Calculator - Challenge 02",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/02-Age%20Calculator/age-calculator-app-main",
        deployLink: "https://agecalculator-frontendmentor.vercel.app/",
    },
    {
        title: "Contact Form",
        challengeNumber: "03",
        imgSrc: "img/ContactFormImg.webp",
        imgAlt: "Contact Form - Challenge 03",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/03-Contact%20Form",
        deployLink: "https://contact-form-frontendmentor.vercel.app/",
    },
    {
        title: "Stats Preview Card Component",
        challengeNumber: "04",
        imgSrc: "img/StatsPreviewCard.webp",
        imgAlt: "Stats Preview Card Component - Challenge 04",
        repoLink:
            "https://github.com/eduardoe92/Challenge/blob/main/04-Stats%20Preview%20Card/stats-preview-card-component-main/index.html",
        deployLink:
            "04-Stats Preview Card/stats-preview-card-component-main/index.html",
    },
    {
        title: "Launch Countdown Timer",
        challengeNumber: "05",
        imgSrc: "img/LaunchCountdownTimer.webp",
        imgAlt: "Launch Countdown Timer - Challenge 05",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/05-Launch%20Countdown%20Timer",
        deployLink: "05-Launch Countdown Timer/index.html",
    },
    {
        title: "News Homepage",
        challengeNumber: "06",
        imgSrc: "img/NewsHomepage.webp",
        imgAlt: "NewsHomepage - Challenge 06",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/06-News%20Homepage",
        deployLink: "06-News Homepage/index.html",
    },
    {
        title: "Social Links Profile",
        challengeNumber: "07",
        imgSrc: "img/SocialLinksProfile.webp",
        imgAlt: "Social Links Profile - Challenge 07",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/07-Social%20Links%20Profile",
        deployLink: "07-Social Links Profile/index.html",
    },
    {
        title: "Blog Preview Card",
        challengeNumber: "08",
        imgSrc: "img/BlogPreviewCard.webp",
        imgAlt: "Blog Preview Card - Challenge 08",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/08-Blog%20Preview%20Card",
        deployLink: "08-Blog Preview Card/index.html",
    },
    {
        title: "Time Tracking Dashboard",
        challengeNumber: "09",
        imgSrc: "img/TimeTrackingDashboard.webp",
        imgAlt: "Time Tracking Dashboard - Challenge 09",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/09-Time%20Tracking%20Dashboard",
        deployLink: "09-Time Tracking Dashboard/index.html",

    },
    {
        title: "Article Preview Component",
        challengeNumber: "10",
        imgSrc: "img/ArticlePreviewComponent.webp",
        imgAlt: "Article Preview Component - Challenge 10",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/10-Article%20Preview%20Component",
        deployLink: "10-Article Preview Component/index.html",
    },
    {
        title: "Newsletter Sign-Up Form With Success Message",
        challengeNumber: "11",
        imgSrc: "img/NewsletterSign-UpFormWithSuccessMessage.webp",
        imgAlt: "Newsletter Sign-Up Form With Success Message - Challenge 11",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/11-Newsletter%20Sign-Up%20Form%20With%20Success%20Message",
        deployLink: "11-Newsletter Sign-Up Form With Success Message/index.html",
    },
    {
        title: "Product Preview Card",
        challengeNumber: "12",
        imgSrc: "img/ProductPreviewCard.webp",
        imgAlt: "Product Preview Card - Challenge 12",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/12-Product%20Preview%20Card",
        deployLink: "12-Product Preview Card/index.html",
    },
    {
        title: "Recipe Page",
        challengeNumber: "13",
        imgSrc: "img/RecipePage.webp",
        imgAlt: "Recipe Page - Challenge 13",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/13-Recipe%20Page",
        deployLink: "13-Recipe Page/index.html",
    },
    {
        title: "Testimonials Grid Section",
        challengeNumber: "14",
        imgSrc: "img/TestimonialsGridSection.webp",
        imgAlt: "Testimonials Grid Section - Challenge 14",
        repoLink:
            "https://github.com/eduardoe92/Challenge/tree/main/14-Testimonials%20Grid%20Section",
        deployLink: "14-Testimonials Grid Section/index.html",
    },
];

const cardsContainer = document.getElementById("cards-container");

challenges.forEach((challenge) => {
    const cardHTML = `
        <div class="col-lg-4 col-sm-6">
            <div class="popular-item">
            <div class="top-content text-center">
                <h3>${challenge.title}</h3>
            </div>
            <div class="top-content text-center">
                <h4>Challenge ${challenge.challengeNumber}</h4>
            </div>
            <div class="thumb">
                <img
                src="${challenge.imgSrc}"
                alt="${challenge.imgAlt}"
                class="img-fluid"
                />
                <a href="${challenge.repoLink}" class="repository" target="_blank">Repositorio</a>
                <a href="${challenge.deployLink}" class="deploy" target="_blank">Desplegar</a>
            </div>
            </div>
        </div>
        `;
    cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
});