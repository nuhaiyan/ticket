
const btnNext = document.getElementById('btn-next');
const screenBlack = document.getElementById('screenBlack');
const popUp = document.getElementById('popUp');


// next button pop up
btnNext.addEventListener('click', function() {
    screenBlack.classList.remove('hidden');
    popUp.classList.remove('hidden');
});

