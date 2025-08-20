$(document).ready(function () {
  $('#startBtn').on('click', function (e) {
    e.preventDefault(); // 기본 링크 이동 방지
    $('#loadingScreen').css('display', 'flex'); // 로딩 화면 표시

    // 12초 후 페이지 이동
    setTimeout(() => {
      window.location.href = $(this).attr('href');
    }, 12000);
  });
});