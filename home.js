function openForm() {
    document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

// what we do section

let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');
const carousel = document.querySelector('.carousel');
const totalSlides = Math.ceil(slides.length / 4);

function showSlides() {
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    updateSlides();
    // setTimeout(showSlides); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n;
    updateSlides();
}

function updateSlides() {
    const offset = (slideIndex - 1) * 100 / 4;
    carousel.style.transform = `translateX(-${offset}%)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

showSlides();




// our project section
function showImage(imageId) {
    document.querySelectorAll('.img img').forEach(img => {
        img.classList.remove('active');
    });
    document.getElementById(imageId).classList.add('active');
}

document.getElementById('C1').addEventListener('click', () => showImage('img1'));
document.getElementById('C2').addEventListener('click', () => showImage('img2'));
document.getElementById('C3').addEventListener('click', () => showImage('img3'));