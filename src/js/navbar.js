async function loadComponent(url, targetid) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(targetid).innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
  }
  
  const menuButton = document.querySelector('button[class*="md:hidden"]');
  const mobileMenu = document.querySelector('div[class*="hidden md:hidden"]');
  menuButton.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  });
}

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("bg-orange-300");
      navbar.classList.remove("bg-orange-300/70");
    } else {
      navbar.classList.add("bg-orange-300/70");
      navbar.classList.remove("bg-orange-300");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/navbar/index.html", "navbar");
  // loadComponent('components/main/index.html','main');
  // loadComponent('components/footer/index.html','footer');
});

