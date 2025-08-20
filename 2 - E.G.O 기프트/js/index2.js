document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.accordion-header').forEach(header => {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');

    let isTransitioning = false;

    header.addEventListener('click', () => {
      if (isTransitioning) return;

      const isOpen = item.classList.contains('active');
      isTransitioning = true;

      // 열려있는 상태 → 닫기
      if (isOpen) {
        // 현재 높이를 고정한 후 → 0으로 애니메이션
        content.style.height = content.scrollHeight + 'px';

        requestAnimationFrame(() => {
          content.style.height = '0px';
          item.classList.remove('active');
        });

        content.addEventListener('transitionend', function handler(e) {
          if (e.propertyName === 'height') {
            content.removeEventListener('transitionend', handler);
            isTransitioning = false;
          }
        });
      }

      // 닫힌 상태 → 열기
      else {
        item.classList.add('active');

        // 우선 height을 0으로 지정한 후 → scrollHeight로 설정
        content.style.height = '0px';

        requestAnimationFrame(() => {
          const fullHeight = content.scrollHeight + 'px';
          content.style.height = fullHeight;
        });

        content.addEventListener('transitionend', function handler(e) {
          if (e.propertyName === 'height') {
            content.removeEventListener('transitionend', handler);
            content.style.height = 'auto'; // 자연스럽게 유지
            isTransitioning = false;
          }
        });
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