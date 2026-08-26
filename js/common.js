fetch("./common/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#header").innerHTML = data;

    // =========================
    // 로고 클릭 이동
    // =========================

    const logoLink = document.querySelector("#logo-link");

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    // 메인페이지에 있을 때
    if (currentPage === "index.html") {
      logoLink.href = "./detail.html";
    }

    // 서브페이지에 있을 때
    else {
      logoLink.href = "./index.html";
    }
  });

// =========================
// FOOTER 불러오기
// =========================

fetch("./common/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.querySelector("#footer").innerHTML = data;
  });
