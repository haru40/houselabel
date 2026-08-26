// =========================
// MAIN SLIDER
// =========================

export function initSlider() {
  const sliderTrack = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  const dotsBox = document.querySelector(".slider-dots");

  let currentSlide = 0;

  // 자동 슬라이드 저장용
  let autoSlider;

  // =========================
  // dot 만들기
  // =========================

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.classList.add("slider-dot");

    if (index === 0) {
      dot.classList.add("active");
    }

    dotsBox.appendChild(dot);

    // dot 클릭
    dot.addEventListener("click", function () {
      currentSlide = index;

      moveSlider();

      resetAutoSlider();
    });
  });

  const dots = document.querySelectorAll(".slider-dot");

  // =========================
  // 슬라이드 이동
  // =========================

  function moveSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // 모든 dot active 제거
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });

    // 현재 dot만 active
    dots[currentSlide].classList.add("active");
  }

  // =========================
  // 다음 슬라이드
  // =========================

  function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    moveSlider();
  }

  // =========================
  // NEXT 버튼
  // =========================

  nextBtn.addEventListener("click", function () {
    nextSlide();

    resetAutoSlider();
  });

  // =========================
  // PREV 버튼
  // =========================

  prevBtn.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    moveSlider();

    resetAutoSlider();
  });

  // =========================
  // 자동 슬라이드 시작
  // =========================

  function startAutoSlider() {
    autoSlider = setInterval(function () {
      nextSlide();
    }, 4000);
  }

  // =========================
  // 자동 슬라이드 다시 시작
  // =========================

  function resetAutoSlider() {
    clearInterval(autoSlider);

    startAutoSlider();
  }

  // 처음 자동 재생 시작
  startAutoSlider();
}
