const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

const menuOptions = document.querySelectorAll('.menuOptions');

const slides = document.querySelectorAll(".slides img");
let slidesIndex = 0;
let intervalId = null;

const player = document.getElementById('player');

const player2 = document.getElementById('player2');

const muteButton = document.getElementById('muteButton');

const unmuteIcon = document.querySelector('.buttonVideo .unmute');
const muteIcon = document.querySelector('.buttonVideo .mute');

// Botão de mutar e desmutar o Som do video

muteButton.addEventListener('click', () => {
    player.muted = !player.muted;

    if (player.muted) {
        unmuteIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
    } else {
        unmuteIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
    }
});

muteButton.addEventListener('click', () => {
    player2.muted = !player2.muted;

    if (player2.muted) {
        unmuteIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
    } else {
        unmuteIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
    }
});

// Abrir e fechar Menu

hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');

        if(muteButton.style.zIndex == '-1')
            muteButton.style.zIndex = '0';
        else
            muteButton.style.zIndex = '-1';
        }
    );

menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        muteButton.style.zIndex = '0';
    });
});

//Slider de fotos

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){

    if (slides.length > 0)
        {
            slides[slidesIndex].classList.add("displaySlide");
            intervalId = setInterval(nextSlide, 3700);
        }
}

function showSlide(index){

    if(index >= slides.length){
        slidesIndex = 0;
    }else if(index < 0){
        slidesIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });

    slides[slidesIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slidesIndex--;
    showSlide(slidesIndex)
}

function nextSlide(){
    slidesIndex++;
    showSlide(slidesIndex);
}

