
// ======================================
// 1. LANGUAGE SWITCHER
// ======================================

// Find the language buttons
const germanButton = document.getElementById("lang-de");
const persianButton = document.getElementById("lang-fa");

// Find all elements that have translations
const translatableElements = document.querySelectorAll(
    "[data-de][data-fa]"
);

// Change the website language
function changeLanguage(language) {

    // Change the HTML language and direction
    document.documentElement.lang = language;

    if (language === "fa") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    // Translate all website texts
    translatableElements.forEach(function(element) {

        element.textContent = element.getAttribute(
            "data-" + language
        );

    });

    // Update the language buttons
    germanButton.classList.toggle(
        "active",
        language === "de"
    );

    persianButton.classList.toggle(
        "active",
        language === "fa"
    );

    // Change browser tab title
    if (language === "fa") {
        document.title = "آموزشگاه زبان MA";
    } else {
        document.title = "MA Sprachschule | Deutsch lernen";
    }

    // Remember the selected language
    localStorage.setItem("selectedLanguage", language);
}


// Click German button
germanButton.addEventListener("click", function() {
    changeLanguage("de");
});


// Click Persian button
persianButton.addEventListener("click", function() {
    changeLanguage("fa");
});


// Load previously selected language
const savedLanguage = localStorage.getItem("selectedLanguage");

if (savedLanguage === "fa") {
    changeLanguage("fa");
} else {
    changeLanguage("de");
}


// ======================================
// 2. MOBILE HAMBURGER MENU
// ======================================

const menuButton = document.getElementById("menu-toggle");

const navigation = document.getElementById("main-nav");


// Open and close menu
menuButton.addEventListener("click", function() {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a navigation link
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    });

});
