let playBtn = this.document.getElementById('play-button');
let count = 0;

playBtn.addEventListener("click", function() {
    count++;

    // if count is odd, turns to pause
    if(count % 2 !== 0) {
        playBtn.classList.remove('fa-circle-play');
        playBtn.classList.add('fa-circle-pause');
    // if count is even, turns back to play
    } else {
        playBtn.classList.remove('fa-circle-pause');
        playBtn.classList.add('fa-circle-play');
    }
})

let heart1Btn = this.document.getElementById('heart-1');
let heart2Btn = this.document.getElementById('heart-2');
let heart3Btn = this.document.getElementById('heart-3');

heart1Btn.addEventListener("click", function() {
    if(heart1Btn.classList.contains('fa-solid')) {
        heart1Btn.classList.remove('fa-solid');
        heart1Btn.classList.add('fa-regular');
    } else {
        heart1Btn.classList.remove('fa-regular');
        heart1Btn.classList.add('fa-solid');
    }
});

heart2Btn.addEventListener("click", function() {
    if(heart2Btn.classList.contains('fa-solid')) {
        heart2Btn.classList.remove('fa-solid');
        heart2Btn.classList.add('fa-regular');
    } else {
        heart2Btn.classList.remove('fa-regular');
        heart2Btn.classList.add('fa-solid');
    }
});

heart3Btn.addEventListener("click", function() {
    if(heart3Btn.classList.contains('fa-solid')) {
        heart3Btn.classList.remove('fa-solid');
        heart3Btn.classList.add('fa-regular');
    } else {
        heart3Btn.classList.remove('fa-regular');
        heart3Btn.classList.add('fa-solid');
    }
});
