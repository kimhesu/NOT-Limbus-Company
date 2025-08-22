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

document.addEventListener("DOMContentLoaded", function () {
    const visual = document.querySelectorAll("#brandVisual > ul > li");
    const button = document.querySelectorAll("#buttonList > li");
    let current = 0;
    let id;

    // 자동 실행 타이머 시작
    timer();

    function timer() {
        id = setInterval(function () {
            let n = current + 1;
            if (n === visual.length) {
                n = 0;
            }
            move(n); // trigger click
        }, 3000);
    }

    function move(i) {
        if (current === i) return;

        let currentEl = visual[current];
        let nextEl = visual[i];

        // 현재 슬라이드 왼쪽으로 이동
        currentEl.style.left = "0";
        currentEl.style.zIndex = 1;
        animate(currentEl, {
            left: "-100%"
        });

        // 다음 슬라이드 오른쪽에서 들어오기
        nextEl.style.left = "100%";
        nextEl.style.zIndex = 5;
        animate(nextEl, {
            left: "0"
        });

        current = i;
    }

    //애니메이션 함수
    function animate(element, styles, duration = 500) {
        const start = {};
        const unit = {};
        const computed = window.getComputedStyle(element);

        for (let prop in styles) {
            let targetValue = styles[prop];

            if (typeof targetValue === "string" && targetValue.includes("%")) {
                // % 단위 처리 → 기존 style 값에서 가져오기
                start[prop] = parseFloat(element.style[prop]) || 0;
                unit[prop] = "%";
                styles[prop] = parseFloat(targetValue);
            } else {
                // px 단위 처리
                start[prop] = parseFloat(computed[prop]) || 0;
                unit[prop] = "px";
                styles[prop] = parseFloat(targetValue);
            }
        }

        const startTime = performance.now();

        function step(now) {
            const progress = Math.min((now - startTime) / duration, 1);

            for (let prop in styles) {
                const value = start[prop] + (styles[prop] - start[prop]) * progress;
                element.style[prop] = value + unit[prop];
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }
});