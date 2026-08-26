// =========================
// 스크롤 등장 효과
// =========================

export function initScrollReveal() {
  const revealItems = document.querySelectorAll(".scroll-reveal");

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        // 화면 안으로 들어오면
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }

        // 화면 밖으로 나가면
        else {
          entry.target.classList.remove("show");
        }
      });
    },

    {
      threshold: 0.15,
    },
  );

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
}
