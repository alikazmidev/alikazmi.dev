// Simple Animations on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("h2, ul li");
  
    // Delay the appearance of elements
    setTimeout(() => {
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 300);
  });
  