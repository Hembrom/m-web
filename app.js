// Main AngularJS Application Module
angular.module('ootahgonahApp', [])

.config(['$locationProvider', function($locationProvider) {
    // Use HTML5 mode if server is configured for it
    // $locationProvider.html5Mode(true);
}])

.run(['$rootScope', function($rootScope) {
    // Initialize cosmic background on app start
    $rootScope.$on('$viewContentLoaded', function() {
        initCosmicBackground();
    });
}]);

// Initialize cosmic background stars
function initCosmicBackground() {
    const cosmicBg = document.getElementById('cosmicBg');
    if (!cosmicBg) return;

    // Clear existing stars
    cosmicBg.innerHTML = '';

    // Create 100 stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        cosmicBg.appendChild(star);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initCosmicBackground);