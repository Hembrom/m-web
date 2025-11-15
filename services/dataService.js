// Data Service - Contains all website content
// Place this file in: services/dataService.js

angular.module('ootahgonahApp')
.service('DataService', function() {

    this.getHeroData = function() {
        return {
            title: 'Ootahgonah',
            tagline: 'A Living Portal of Light',
            description: 'Where body, space, and spirit remember their true light. This is not an organization, nor a project alone — it is a living vision, a portal where the dream body merges with the physical, and the human merges with the cosmic.',
            buttonText: 'Enter the Portal'
        };
    };

    this.getVisionData = function() {
        return {
            title: 'The Vision',
            description: 'Ootahgonah is a living portal where body, space, and spirit return to their true light. It unfolds through community, healing spaces, and retreats — not as separate offerings, but as one rhythm of remembrance.',
            quote: '"The Light Body is not a future attainment — it is the forgotten dimension of your being, shimmering beneath the weight of effort." — William',
            closing: 'Here, living itself becomes practice, design becomes medicine, and clarity arises not by striving, but by softening into presence. We invite all who feel the call to step in, not as seekers or followers, but as ones who already belong.'
        };
    };

    this.getConstellationData = function() {
        return {
            title: 'The Constellation',
            subtitle: 'Ootahgonah is carried by a constellation of companions — Light Body beings as guides, enlightened masters as teachers, and fellow travelers — each holding a unique thread of the vision.',
            members: [
                {
                    name: 'Sohra',
                    role: 'Light Body Being & Guide',
                    description: 'A Light Body Being from the Sirian star system, carrying transmissions of remembrance. Sohra awakens what is already within through vibration — a current that dissolves the weight of effort and restores clarity.',
                    photo: 'assets/images/sohra.jpg',
                    visible: false
                },
                {
                    name: 'William',
                    role: 'Enlightened Master & Teacher',
                    description: 'An enlightened teacher based in Oregon, whose life is dedicated to the unfolding of the Light Body. He channels Sohra and practices Ujrayaan Buddhism and yoga, embodying the law of effortless effort.',
                    photo: 'assets/images/william.jpg',
                    visible: false
                },
                {
                    name: 'Andrea',
                    role: 'Keeper & Aroma Therapist',
                    description: 'William\'s companion who holds space for channelings with deep presence. An aroma therapist and herb specialist, bringing the healing wisdom of plants into the circle of Ootahgonah.',
                    photo: 'assets/images/andrea.jpg',
                    visible: false
                },
                {
                    name: 'Apurva',
                    role: 'Intuitive Healer & Seeder',
                    description: 'An Intuitive Healer, Surrealist Artist, and channel of higher energies. Her gift lies in opening portals of healing through sensitivity, creativity, and deep listening.',
                    photo: 'assets/images/apurva.jpg',
                    visible: false
                },
                {
                    name: 'Amit',
                    role: 'Energy Coach & Seeder',
                    description: 'An Energy Coach and Healer who inspires through effortless living. He channels higher energies and helps others release effort and return to clarity, bridging structure and spirit.',
                    photo: 'assets/images/amit.jpg',
                    visible: false
                },
                {
                    name: 'Heather',
                    role: 'Subconscious Guide & Seeder',
                    description: 'A subconscious guide working through dreams, Depth Hypnosis, and Tanran Reiki. She helps others shift patterns, discover joy, and purify karmic imprints.',
                    photo: 'assets/images/heather.jpg',
                    visible: false
                }
            ]
        };
    };

    this.getOfferingsData = function() {
        return {
            title: 'Practices & Offerings',
            items: [
                {
                    icon: '🧘',
                    name: 'Weekly Meditations',
                    description: 'Simple yet profound circles to release effort and rest in clarity. Guided by transmissions from Sohra, where the dream body and waking body meet.',
                    visible: false
                },
                {
                    icon: '✨',
                    name: 'One on One Circle',
                    description: 'Sacred space created just for you, offering channeling, healing, and guidance tailored to your journey. A space to find clarity and reconnect with your Light.',
                    visible: false
                },
                {
                    icon: '🌿',
                    name: 'Healing Sessions',
                    description: 'Sacred space for body and heart, releasing physical tension and emotional patterns through channeling, energy work, and guided presence.',
                    visible: false
                },
                {
                    icon: '🏔️',
                    name: 'Retreats & Portals',
                    description: 'Immersive journeys into mindfulness, growth, and presence. Workshops and gatherings that nurture clarity and renewal.',
                    visible: false
                }
            ]
        };
    };

    this.getContactData = function() {
        return {
            title: 'Join the Circle',
            subtitle: 'This is not just contact — it\'s a doorway. Step through when you\'re ready.'
        };
    };

    this.getFooterData = function() {
        return {
            text: '© 2025 Ootahgonah. A living vision of remembrance and light.'
        };
    };

    // Daily Healing Quotes Collection
    this.getDailyQuotes = function() {
        return [
            "The Light Body is not a future attainment — it is the forgotten dimension of your being, shimmering beneath the weight of effort.",
            "In the garden of the heart, love blooms eternal, healing all that it touches with gentle grace and infinite compassion.",
            "Healing begins the moment you stop fighting what is and start embracing what could be.",
            "You are not broken; you are breaking open to let more light in.",
            "Every breath is a chance to begin again, every heartbeat a reminder that you are alive and whole.",
            "The wound is the place where the Light enters you.",
            "Softness is not weakness; it is the courage to remain open when the world asks you to close.",
            "Your sensitivity is not a burden; it is your gift to the world.",
            "In stillness, all answers arise. In presence, all healing flows.",
            "You carry within you all the medicine you need. Trust the wisdom of your being.",
            "Love is not something you find; it is something you remember you are.",
            "The portal to healing opens when you choose presence over perfection.",
            "Your heart knows the way home. Listen deeply, trust completely.",
            "Every soul you meet is walking their own path back to wholeness.",
            "Compassion is the bridge between suffering and liberation.",
            "In the space between breaths, miracles await.",
            "Your story is not your wound; your story is how you transformed it into wisdom.",
            "Healing happens in circles, not lines. Trust the sacred spiral of growth.",
            "You are both the seeker and the sought, the healer and the healed.",
            "The universe conspires to help you remember who you truly are.",
            "In surrender, we find our greatest strength.",
            "Your authenticity is the greatest gift you can offer the world.",
            "Peace is not the absence of storms, but the presence of grace within them.",
            "Every moment offers a fresh invitation to return to love.",
            "The light in you recognizes the light in all beings.",
            "Healing is not about becoming perfect; it's about becoming whole.",
            "Your journey is sacred, your pain has purpose, your light is needed.",
            "In the temple of your heart, wisdom awaits your quiet arrival.",
            "Trust the process, even when you cannot see the path.",
            "You are exactly where you need to be for your soul's evolution.",
            "The medicine you seek lives in the present moment."
        ];
    };

    // Get a quote that changes every 4 hours
    this.getTodaysQuote = function() {
        const quotes = this.getDailyQuotes();
        
        // Get current time and calculate 4-hour periods since epoch
        const now = new Date();
        const epochStart = new Date(1970, 0, 1);
        const hoursSinceEpoch = Math.floor((now - epochStart) / (1000 * 60 * 60));
        const fourHourPeriods = Math.floor(hoursSinceEpoch / 4);
        
        // Use modulo to cycle through quotes every 4 hours
        const quoteIndex = fourHourPeriods % quotes.length;
        
        return quotes[quoteIndex];
    };
});