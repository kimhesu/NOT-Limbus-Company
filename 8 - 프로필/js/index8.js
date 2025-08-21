const greetings = [
    "🪽 \"박제가 되어버린 천재를 아시오?\"",
    "🧪 \"인간은 노력하는 한, 방황하는 법입니다.\"",
    "🎠 \"닿을 수 없는 별에 도달하기 위하여!\"",
    "🚬 \"덜떨어진 화가들이 추악한 것의 아름다움을 알 도리가 없지.\"",
    "🌇 \"오늘, 어머니를 죽였다. 아니, 어쩌면 어제일지도.\"",
    "🔮 \"옥에도 티가 있고, 좋은 일에도 탈은 있는 법이죠.\"",
    "⛈️ \"네가 한게 아니야, 네가, 네 마음을 찢으면서 내 마음까지 찢어놓은 거야.\"",
    "⚓ \"저를, 이스마엘이라 불러주세요.\"",
    "🪓 \"모든 것을 잊고, 다시금 시작할 수 있다면.\"",
    "🕒 \"고개를 들어... 별을 바라보면 되니까.\"",
    "🐣 \"어느 날, 악의 세계가 우리 집 한 가운데에서 시작되었다.\"",
    "👢 \"저는... 아무것도 아닙니다.\"",
    "🪳 \"악몽에서 깨어났을 때, 나는 한마리 흉측한 벌레가 되어있었다.\"",
    "👁️ \"그래서 나는. 모든 것을 짊어지는, 언젠가의 승리를 위한 가시관을 머리에 쓴다.\""
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