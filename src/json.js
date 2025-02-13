async function loadComponent(url,targetid) {
    try{
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(targetid).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${url}:`,error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('components/navbar/index.html','navbar');
    // loadComponent('components/navbar/index.html','navbar');
    // loadComponent('components/navbar/index.html','navbar');
});