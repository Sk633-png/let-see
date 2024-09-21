const translations = {
    en: {
        heading: "Welcome To Quantum Games",
        paragraph: " Indulge in a gaming paradise. Download your favorite console titles, absolutely free. Experience limitless entertainment at your fingertips"
    },
    es: {
        heading: "Bienvenido a los juegos cuánticos",
        paragraph: "Este es un párrafo de muestra. Seleccione un idioma para ver el contenido cambiar."
    },
    hi: {
        heading: "क्वांटम गेम्स में आपका स्वागत है",
        paragraph: "यह एक नमूना पैराग्राफ है। सामग्री को बदलते हुए देखने के लिए एक भाषा चुनें।"
    },
    zh: {
        heading: "歡迎來到量子遊戲",
        paragraph: "这是一个示例段落。选择一种语言以查看内容的更改。"
    }
};

function changeLanguage() {
    const language = document.getElementById('language').value;
    document.getElementById('heading').textContent = translations[language].heading;
    document.getElementById('paragraph').textContent = translations[language].paragraph;
}
