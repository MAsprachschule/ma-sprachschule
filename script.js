
// Find the menu button
const menuButton = document.getElementById("menu-toggle");

// Find the navigation menu
const navigation = document.getElementById("main-nav");

// Open and close the menu
menuButton.addEventListener("click", function() {

    navigation.classList.toggle("open");

    // Check whether the menu is open
    const isOpen = navigation.classList.contains("open");

    // Update accessibility information
    menuButton.setAttribute("aria-expanded", isOpen);

    // Change the button symbol
    menuButton.textContent = isOpen ? "✕" : "☰";

});

// Close the menu after clicking a link
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    });

});
