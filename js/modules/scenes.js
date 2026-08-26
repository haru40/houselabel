// =========================
// Scenes from HouseLabel
// =========================
export function loadScenes() {
  fetch("./json/Scenes.json")
    .then((res) => res.json())
    .then((data) => {
      const box = document.querySelector("#scene-list");

      data.forEach((item) => {
        box.innerHTML += `
        <a href="./detail.html" class="scene-card">

          <div class="scene-image">
            <img src="${item.image}" alt="${item.title}">
          </div>

          <div class="scene-info">

            <h4>${item.title}</h4>

            <span>/</span>

            <p class="scene-en">${item.english}</p>

            <p class="scene-ko">${item.korean}</p>

          </div>

        </a>
      `;
      });
    });
}
