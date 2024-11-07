document.addEventListener("DOMContentLoaded", () => {
  // Smooth transition on load
  document.body.style.opacity = 1;

  // Transition on link click
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const href = link.getAttribute("href");

      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = href;
      }, 500); // delay to allow transition effect
    });
  });
});

// Initial opacity to apply the fade-in effect on page load
document.body.style.opacity = 0;

