let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
startSlideInterval();

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetSlideInterval();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetSlideInterval();
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let quadrates = document.querySelectorAll(".quadrate");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < quadrates.length; i++) {
        quadrates[i].className = quadrates[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    quadrates[slideIndex - 1].className += " active";
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

// Agregar evento de clic a las imágenes
let images = document.querySelectorAll(".mySlides img");
images.forEach((image, index) => {
    image.addEventListener("click", () => {
        resetSlideInterval();
        // Redireccionar a la noticia correspondiente
        switch (index + 1) {
            case 1:
                window.location.href = "noticia1.html";
                break;
            case 2:
                window.location.href = "noticia2.html";
                break;
            case 3:
                window.location.href = "noticia3.html";
                break;
            case 4:
                window.location.href = "noticia4.html";
                break;
            default:
                break;
        }
    });
});
