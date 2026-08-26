// =========================
// SUMMER / GIFT
// =========================

export function loadSummer() {
  const banner = document.querySelector(".event-banner img");

  const title = document.querySelector(".event-content > h3");

  const description = document.querySelector(".event-content > p");

  const productBox = document.querySelector("#event-products");

  const prevBtn = document.querySelector(".event-prev");

  const nextBtn = document.querySelector(".event-next");

  // Summer + Gift 데이터 둘 다 불러오기
  Promise.all([
    fetch("./json/event.json").then((res) => res.json()),
    fetch("./json/gift.json").then((res) => res.json()),
  ])

    .then(([summerProducts, giftData]) => {
      const gift = giftData[0];

      // =========================
      // 슬라이드 데이터 2개
      // =========================

      const slides = [
        // 1. SUMMER
        {
          banner: "./img/Summer event/summer.jpg",

          title: "SUMMER LIVING EVENT",

          description: `
            여름 식탁과 공간을 위한 하우스라벨 리빙 기획전<br>
            Selected items up to 50% · 07.03 - 07.24
          `,

          products: summerProducts,
        },

        // 2. GIFT
        {
          banner: gift.banner,

          title: gift.title,

          description: `
            ${gift.english}<br>
            ${gift.korean}
          `,

          products: gift.products,
        },
      ];

      let currentSlide = 0;

      // =========================
      // 화면 변경
      // =========================

      function showSlide() {
        const slide = slides[currentSlide];

        // 큰 이미지
        banner.src = slide.banner;

        banner.alt = slide.title;

        // 제목
        title.textContent = slide.title;

        // 설명
        description.innerHTML = slide.description;

        // 상품 초기화
        productBox.innerHTML = "";

        // 상품 4개 출력
        slide.products.forEach((item) => {
          productBox.innerHTML += `
            <a href="./detail.html">

              <div class="event-product-card">

                <img
                  src="${item.image}"
                  alt="${item.name}"
                >

                <div class="event-product-info">

                  <h4>${item.name}</h4>

                  <h5>
                    ₩${item.price.toLocaleString()}
                  </h5>

                </div>

              </div>

            </a>
          `;
        });
      }

      // =========================
      // 다음
      // =========================

      nextBtn.addEventListener("click", function () {
        currentSlide++;

        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }

        showSlide();
      });

      // =========================
      // 이전
      // =========================

      prevBtn.addEventListener("click", function () {
        currentSlide--;

        if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        }

        showSlide();
      });

      // 처음 화면
      showSlide();
    });
}
