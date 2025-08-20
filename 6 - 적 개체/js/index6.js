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