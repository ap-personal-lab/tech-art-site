// Lightbox for gallery
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const caption = item.querySelector("figcaption");

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.innerText : "";
    lightbox.classList.add("open");
  });
});

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (
      e.target === lightbox ||
      e.target.classList.contains("lightbox-close")
    ) {
      lightbox.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("open");
    }
  });
}

// Filters
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
