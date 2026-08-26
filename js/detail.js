// =========================
// 상품 수량 / 가격
// =========================

// HTML 요소 찾기
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");

const quantityText = document.querySelector("#quantity");

const itemPriceText = document.querySelector("#item-price");
const totalPriceText = document.querySelector("#total-price");

const orderBox = document.querySelector(".order-box");

// 상품 1개 가격
const price = Number(orderBox.dataset.price);

// 처음 수량
let quantity = 1;

// =========================
// 가격 화면 업데이트
// =========================

function updatePrice() {
  // 상품 가격 × 수량
  const total = price * quantity;

  // 수량 표시
  quantityText.textContent = quantity;

  // 선택 상품 가격
  itemPriceText.textContent = total.toLocaleString() + "원";

  // 총 상품 금액
  totalPriceText.textContent = total.toLocaleString();
}

// =========================
// + 버튼
// =========================

plusBtn.addEventListener("click", function () {
  quantity++;

  updatePrice();
});

// =========================
// - 버튼
// =========================

minusBtn.addEventListener("click", function () {
  // 수량이 1보다 클 때만 감소
  if (quantity > 1) {
    quantity--;

    updatePrice();
  }
});

// =========================
// 장바구니
// =========================

const cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener("click", function () {
  // 장바구니에 넣을 상품 정보
  const product = {
    name: "Plate Rosemary",

    price: price,

    quantity: quantity,

    image: "./img/detail/plate-rosemary.jpg",
  };

  // 기존 장바구니 가져오기
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 상품 추가
  cart.push(product);

  // 다시 저장
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("장바구니에 상품을 담았습니다.");
});

// =========================
// 바로구매
// =========================

const buyBtn = document.querySelector("#buy-btn");

buyBtn.addEventListener("click", function () {
  const total = price * quantity;

  alert(
    "Plate Rosemary " + quantity + "개 / 총 " + total.toLocaleString() + "원",
  );
});

// =========================
// 이용안내 열기 / 닫기
// =========================

const guideItems = document.querySelectorAll(".guide-item");

guideItems.forEach(function (item) {
  const button = item.querySelector(".guide-title");

  const plus = item.querySelector(".guide-plus");

  button.addEventListener("click", function () {
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      plus.textContent = "−";
    } else {
      plus.textContent = "+";
    }
  });
});
