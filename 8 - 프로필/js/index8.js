const greetings = [
    "🪽 \" 하융 \"",
    "🧪 \" WALPURGISNACHT \"",
    "🎠 \" SUEÑO IMPOSIBLE \"",
    "🚬 \" 無我夢中 阿鼻叫喚 支離滅裂 \" ",
    "🌇 \" SOLEIL \"",
    "🔮 \" 太虛幻境 \"",
    "⛈️ \" REVENGE \"",
    "⚓ \" HEARSE \"",
    "🪓 \" РАСКО́Л \"",
    "🕒 \" DURANTE \"",
    "🐣 \" VOGEL \"",
    "👢 \" Ουτις \"",
    "🪳 \" UNGEZIEFER \"",
    "👁️ \" LEVIATHAN \" "
];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("greeting").textContent = greetings[Math.floor(Math.random() * greetings.length)]
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');

    hamburger.addEventListener('click', () => {
        sideMenu.classList.toggle('open');

        // 접근성 위해 aria 속성도 토글
        const isOpen = sideMenu.classList.contains('open');
        sideMenu.setAttribute('aria-hidden', !isOpen);
    });
});