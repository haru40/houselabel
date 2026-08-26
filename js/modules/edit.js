// =========================
// The HouseLabel Edit
// =========================

export function loadEdit() {
  fetch("./json/Edit.json")
    .then((res) => res.json())
    .then((data) => {
      const box = document.querySelector("#collection2");

      data.forEach((item) => {
        box.innerHTML += `
          <a href="./detail.html">

            <div class="product-card">

              <img src="${item.image}" alt="${item.name}">

              <h4>${item.name}</h4>

              <h5>₩${item.price.toLocaleString()}</h5>

            </div>

          </a>
        `;
      });
    });
}
