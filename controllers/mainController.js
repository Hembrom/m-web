// Main Controller for Ootahgonah App
angular.module('ootahgonahApp')
.controller('MainController', ['$scope', '$timeout', 'DataService', function($scope, $timeout, DataService) {

    // Initialize data from service
    $scope.hero = DataService.getHeroData();
    $scope.vision = DataService.getVisionData();
    $scope.constellation = DataService.getConstellationData();
    $scope.offerings = DataService.getOfferingsData();
    $scope.contact = DataService.getContactData();
    $scope.footer = DataService.getFooterData();

    // Ensure the following data is initialized
    $scope.hero = {
        title: 'Welcome to Ootahgonah',
        tagline: 'A Haven of Healing and Warmth',
        description: 'Discover the gifts of healing and the circle of care.',
        buttonText: 'Learn More'
    };

    $scope.vision = {
        title: 'Our Purpose',
        description: 'At Ootahgonah, we believe in the power of healing...',
        quote: '“Healing is a matter of time, but it is sometimes also a matter of opportunity.”',
        closing: 'Join us in this journey of care and compassion.'
    };

    // Form data model
    $scope.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    $scope.formSubmitted = false;
    $scope.successMessage = '';

    // Smooth scroll function
    $scope.scrollTo = function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Form submission handler
    $scope.submitForm = function() {
        if ($scope.contactForm.$valid) {
            console.log('Form submitted:', $scope.formData);

            $scope.successMessage = 'Thank you for stepping through the portal. We will connect with you soon.';
            $scope.formSubmitted = true;

            // Reset form after 3 seconds
            $timeout(function() {
                $scope.formData = {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                };
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
                $scope.formSubmitted = false;
            }, 3000);
        }
    };

    // Animate elements on scroll
    angular.element(window).on('scroll', function() {
        $scope.$apply(function() {
            animateOnScroll();
        });
    });

    function animateOnScroll() {
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Animate team members
        $scope.constellation.members.forEach(function(member, index) {
            const element = document.querySelectorAll('.team-member')[index];
            if (element) {
                const elementTop = element.offsetTop;
                if (scrollTop + windowHeight > elementTop + 100) {
                    member.visible = true;
                }
            }
        });

        // Animate offerings
        $scope.offerings.items.forEach(function(offering, index) {
            const element = document.querySelectorAll('.offering-card')[index];
            if (element) {
                const elementTop = element.offsetTop;
                if (scrollTop + windowHeight > elementTop + 100) {
                    offering.visible = true;
                }
            }
        });
    }

    // Initialize animations
    $timeout(function() {
        animateOnScroll();
    }, 100);
}]);