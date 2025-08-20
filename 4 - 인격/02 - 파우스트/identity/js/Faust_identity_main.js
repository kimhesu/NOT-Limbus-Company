document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".accordion-item");
  
    items.forEach(item => {
      const header = item.querySelector(".accordion-header");
      const content = item.querySelector(".accordion-content");
  
      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
  
        if (isActive) {
          // 부드럽게 접힘
          content.style.transition = 'max-height 0.3s ease';
          content.style.maxHeight = '0px';
          item.classList.remove('active');
        } else {
          // 펼칠 땐 자연스럽게
          content.style.transition = 'max-height 2s ease';
          content.style.maxHeight = content.scrollHeight + 'px';
          item.classList.add('active');
        }
      });
    });
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