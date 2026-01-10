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
            // Save state to localStorage
            localStorage.setItem('musicPlaying', 'true');
        }).catch((error) => {
            console.log('Audio play failed, will try on user interaction:', error);
            isAudioPlaying = false;
            audioControl.classList.remove('playing');
            audioControl.classList.add('paused');
            localStorage.setItem('musicPlaying', 'false');
        });
    }
}

function pauseAudio() {
    if (audioElement) {
        audioElement.pause();
        isAudioPlaying = false;
        audioControl.classList.remove('playing');
        audioControl.classList.add('paused');
        // Save state to localStorage
        localStorage.setItem('musicPlaying', 'false');
    }
}

// Initialize audio control when page loads
document.addEventListener('DOMContentLoaded', function() {
    audioElement = document.getElementById('ambientAudio');
    audioControl = document.getElementById('audioControl');
    
    if (audioElement) {
        audioElement.volume = 0.3;
        
        // Check if music should be playing from localStorage
        const shouldPlay = localStorage.getItem('musicPlaying') === 'true';
        
        if (shouldPlay) {
            // Try to resume playing
            playAudio();
        } else {
            // Start paused by default
            isAudioPlaying = false;
            audioControl.classList.remove('playing');
            audioControl.classList.add('paused');
        }
    }
});
