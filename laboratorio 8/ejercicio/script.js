const translations = {
    "main-title": {
        ca: "Benvinguda al projecte!",
        es: "¡Bienvenido al proyecto!",
        en: "Welcome to the project!"
    },
    "welcome-message": {
        ca: "Aquesta és la pàgina principal.",
        es: "Esta es la página principal.",
        en: "This is the main page."
    },
    "main-button": {
        ca: "Entrar",
        es: "Entrar",
        en: "Enter"
    }
};

function setLanguage(lang) {
    for (let id in translations) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[id][lang];
        }
    }
}

function savePreference(lang) {
    localStorage.setItem("userLang", lang);
}

function loadPreference() {
    let preferredLang = localStorage.getItem("userLang");
    if (!preferredLang) {
        preferredLang = "es";
    }
    setLanguage(preferredLang);
}

window.onload = loadPreference;

const selector = document.getElementById("selector-idiomas");
selector.addEventListener("click", function (event) {
    const lang = event.target.dataset.lang;
    if (lang) {
        setLanguage(lang);
        savePreference(lang);
    }
});
