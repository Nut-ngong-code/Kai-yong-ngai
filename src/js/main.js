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

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/navbar/index.html", "navbar");
  loadComponent('components/main/index.html','main');
  loadComponent('components/footer/index.html','footer');
});

