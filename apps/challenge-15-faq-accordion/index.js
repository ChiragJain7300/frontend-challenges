const accToggleBtn = document.querySelectorAll("button");
const plusImg = "./assets/images/icon-plus.svg";
const minusImg = "./assets/images/icon-minus.svg";
accToggleBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const img = e.target;
    const ansElement = e.currentTarget.parentElement.nextElementSibling;

    if (img.classList.contains("minus")) {
      ansElement.classList.add("hidden");
      img.classList.remove("minus");
      img.classList.add("plus");
      img.src = plusImg;
    } else {
      ansElement.classList.remove("hidden");
      img.classList.remove("plus");
      img.classList.add("minus");
      img.src = minusImg;
    }
  });
});
