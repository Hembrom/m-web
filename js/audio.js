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
        
        // Try to auto-start music immediately
        playAudio();
        
        // Fallback: if autoplay fails, start on any user interaction
        if (!isAudioPlaying) {
            document.addEventListener('click', function startAudio() {
                if (audioElement && !isAudioPlaying) {
                    playAudio();
                }
                document.removeEventListener('click', startAudio);
            }, { once: true });
            
            document.addEventListener('touchstart', function startAudioTouch() {
                if (audioElement && !isAudioPlaying) {
                    playAudio();
                }
                document.removeEventListener('touchstart', startAudioTouch);
            }, { once: true });
        }
    }
});
