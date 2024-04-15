// Reading and changing the light-dark theme
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const logoImg = document.getElementById('logo');
const darkModeHideElements = document.querySelectorAll('.dark-mode-hide');

function toggleTheme() {
    if (themeSwitch.checked) {
        body.classList.add('dark-theme');
        document.documentElement.style.setProperty('--bg-color', '#0A0A0A'); 
        document.documentElement.style.setProperty('--pri-color', '#0072CE'); 
        document.documentElement.style.setProperty('--sec-color', '#748EE5'); 
        document.documentElement.style.setProperty('--ter-color', '#E3D0FF'); 
        document.documentElement.style.setProperty('--text-color', '#ffffff'); 
  
        darkModeHideElements.forEach(element => { element.classList.add('hidden'); });
        logoImg.src = 'Img/D-logo.png';
    } else {
        body.classList.remove('dark-theme');
        document.documentElement.style.setProperty('--bg-color', '#F5F5F5'); 
        document.documentElement.style.setProperty('--pri-color', '#395CAD'); 
        document.documentElement.style.setProperty('--sec-color', '#748EE5'); 
        document.documentElement.style.setProperty('--ter-color', '#EAEFFF'); 
        document.documentElement.style.setProperty('--text-color', '#000000'); 
    
        darkModeHideElements.forEach(element => { element.classList.remove('hidden'); });
        logoImg.src = 'Img/L-logo.png';
    }
}

themeSwitch.addEventListener('change', toggleTheme);
document.addEventListener("DOMContentLoaded", function() {
    toggleTheme();
});



// Nav headers
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".header-nav a");

    function setActiveLink() {
        var sections = document.querySelectorAll("section");
        var currentScroll = window.scrollY;
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            var isActive = (rect.top <= 50 && rect.bottom >= 50);
            var targetId = section.getAttribute("id");
            var correspondingLink = document.querySelector('.header-nav a[href="#' + targetId + '"]');
            if (correspondingLink) {
                if (isActive) {
                    correspondingLink.classList.add("active");
                } else {
                    correspondingLink.classList.remove("active");
                }
            }
        });
        navLinks.forEach(function(link) {
            if (!link.classList.contains("active")) {
                link.classList.remove("active");
            }
        });
    }
    setActiveLink();
    window.addEventListener("scroll", setActiveLink);
});



//* Go to top button
const btnUp = document.getElementById("btn-up");

document.addEventListener("DOMContentLoaded", function() {
    btnUp.addEventListener("click", function() {
        
        window.scrollTo({
            top: 0
        });
    });
});