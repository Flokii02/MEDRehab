
function changeLanguage() {
    const selectedLanguage = document.getElementById("language-select").value;

    // Select all elements with data attributes for translation
    const translatableElements = document.querySelectorAll("[data-hu], [data-sr]");

    translatableElements.forEach(element => {
        if (selectedLanguage === "hu") {
            element.textContent = element.getAttribute("data-hu");
        } else if (selectedLanguage === "sr") {
            element.textContent = element.getAttribute("data-sr");
        }
    });
}