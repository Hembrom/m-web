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

    // Get today's healing quote
    $scope.dailyQuote = DataService.getTodaysQuote();

    // Ensure the following data is initialized
    $scope.hero = {
        title: 'Ootahgonah',
        tagline: 'A Haven of Healing and Warmth',
        description: 'Discover the gifts of healing and the circle of care.',
        buttonText: 'Enter with Love'
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

    // Smooth scroll function with offset for better spacing
    $scope.scrollTo = function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - 100; // Add 100px offset above the element
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Form submission handler
    $scope.submitForm = function() {
        if ($scope.contactForm.$valid) {
            $scope.formSubmitting = true;

            // Send form data to Vercel API endpoint
            fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify($scope.formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    $scope.$apply(function() {
                        $scope.successMessage = 'Thank you for stepping through the portal. We will connect with you soon.';
                        $scope.formSubmitted = true;
                        $scope.formSubmitting = false;
                    });

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
                } else {
                    throw new Error(data.error || 'Failed to send');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                $scope.$apply(function() {
                    $scope.successMessage = 'There was an issue sending your message. Please try the WhatsApp option below.';
                    $scope.formSubmitted = true;
                    $scope.formSubmitting = false;
                });

                $timeout(function() {
                    $scope.formSubmitted = false;
                }, 5000);
            });
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