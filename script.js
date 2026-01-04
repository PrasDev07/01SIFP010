document.addEventListener("DOMContentLoaded", () => {

  /* ================= MOBILE NAV ================= */

  const menu = document.getElementById("menu");
  const closeButton = document.getElementById("close-mobile");
  const nav = document.getElementById("nav-mobile");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      nav.classList.add("show");
    });
  }

  if (closeButton && nav) {
    closeButton.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });

  /* ================= ACHIEVEMENT COUNTER ================= */

  const counters = document.querySelectorAll(".counter");
  const achievementSection = document.querySelector(".achievement");
  let triggered = false;

  const runCounter = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;
      const speed = 25; // lebih cepat

      const update = () => {
        const increment = target / speed;
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
    });
  };

  if (achievementSection) {
    window.addEventListener("scroll", () => {
      const sectionTop = achievementSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (sectionTop < screenHeight && !triggered) {
        runCounter();
        triggered = true;
      }
    });
  }

  /* ================= GALLERY CLICK ================= */

  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      galleryItems.forEach(i => i.classList.remove("active"));
      item.classList.toggle("active");
    });
  });

  /* ================= READ MORE ================= */

  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      card.classList.toggle("expanded");

      btn.textContent = card.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
    });
  });

});
