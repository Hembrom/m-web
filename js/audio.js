// ============================================
// OOTAHGONAH - AUDIO CONTROL
// ============================================

let isAudioPlaying = false;
let audioElement = null;
let audioControl = null;

function toggleAudio() {
    if (!audioElement) {
        audioElement = document.getElementById('ambientAudio');
        audioControl = document.getElementById('audioControl');
    }
    
    if (isAudioPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playAudio() {
    if (audioElement) {
        audioElement.volume = 0.3;
        audioElement.play().then(() => {
            isAudioPlaying = true;
            audioControl.classList.remove('paused');
            audioControl.classList.add('playing');
        }).catch((error) => {
            console.log('Audio play failed, will try on user interaction:', error);
            isAudioPlaying = false;
            audioControl.classList.remove('playing');
            audioControl.classList.add('paused');
        });
    }
}

function pauseAudio() {
    if (audioElement) {
        audioElement.pause();
        isAudioPlaying = false;
        audioControl.classList.remove('playing');
        audioControl.classList.add('paused');
    }
}

// Initialize audio control when page loads
document.addEventListener('DOMContentLoaded', function() {
    audioElement = document.getElementById('ambientAudio');
    audioControl = document.getElementById('audioControl');
    
    if (audioElement) {
        audioElement.volume = 0.3;
        
        // Start paused by default - user must click to play
        isAudioPlaying = false;
        audioControl.classList.remove('playing');
        audioControl.classList.add('paused');
    }
});
