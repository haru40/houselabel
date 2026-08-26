// =========================
// The HouseLabel Curated
// =========================
export function loadCurated() {
  fetch("./json/HouseLabeL.json")
    .then((res) => res.json())
    .then((data) => {
      const track = document.querySelector("#curated-track");

      // =========================
      // 상품 생성
      // =========================

      data.forEach((item) => {
        track.innerHTML += `
          <a href="./detail.html" class="curated-product">

            <div class="curated-image">

              <img src="${item.image}" alt="${item.name}">

              <span class="curated-rank">
                ${item.rank}
              </span>

              <!-- 마우스 올리면 나오는 버튼 -->
              <div class="curated-actions">

                <button type="button">≡</button>

                <button type="button">🛒</button>

                <button type="button">♡</button>

              </div>

            </div>

            <h4>${item.name}</h4>

            <h5>₩${item.price.toLocaleString()}</h5>

          </a>
        `;
      });

      // =========================
      // 상품 자동 슬라이드
      // =========================

      const products = document.querySelectorAll(".curated-product");

      let currentProduct = 0;

      function moveCuratedSlider() {
        const productWidth = products[0].offsetWidth + 20;

        track.style.transform = `translateX(-${currentProduct * productWidth}px)`;
      }

      function nextCuratedSlide() {
        currentProduct++;

        // 마지막 상품까지 가면 다시 처음으로
        if (currentProduct > products.length - 4) {
          currentProduct = 0;
        }

        moveCuratedSlider();
      }

      // 4초마다 자동 이동
      let curatedAuto = setInterval(nextCuratedSlide, 4000);

      // =========================
      // 마우스 올리면 자동 이동 멈춤
      // =========================

      track.addEventListener("mouseenter", function () {
        clearInterval(curatedAuto);
      });

      // =========================
      // 마우스 빼면 자동 이동 다시 시작
      // =========================

      track.addEventListener("mouseleave", function () {
        curatedAuto = setInterval(nextCuratedSlide, 4000);
      });
    });
}
