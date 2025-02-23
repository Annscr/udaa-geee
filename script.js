const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".Yes-btn");
const noBtn = document.querySelector(".No-btn");

// Tombol Yes: Mengubah teks dan mengganti gif, kemudian menghilangkan tombol
yesBtn.addEventListener("click", () => {
  question.innerHTML = "hihii ginii kan cantikk lagiii:)";
  gif.src = "images/gif-2.gif"; // Ganti ke gif-2 yang ada di folder images

  // Menghilangkan tombol
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// Tombol No: Menggerakkan tombol secara acak ketika di-hover
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Tombol No: Mengubah teks dan mengganti gif, kemudian menghilangkan tombol setelah diklik
noBtn.addEventListener("click", () => {
  question.innerHTML = "hihii ginii kan cantikk lagiii:)";
  gif.src = "images/gif-2.gif"; // Ganti ke gif-2 yang ada di folder images

  // Menghilangkan tombol
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
