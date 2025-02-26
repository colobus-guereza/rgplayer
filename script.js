// Raga Sanskrit names
const ragaSanskritNames = {
    "Ahir Bhairav": "अहीर भैरव",
    "Alhaiya": "अलैया",
    "Alhaiya Bilawal": "अलैया बिलावल",
    "Bageshri": "बागेश्री",
    "Bhairav": "भैरव",
    "Bhairavi": "भैरवी",
    "Bhatiyar": "भटियार",
    "Bihag": "बिहाग",
    "Bilawal": "बिलावल",
    "Brindavani Sarang": "बृंदावनी सारंग",
    "Chandra": "चंद्र",
    "Darbari": "दरबारी",
    "Deshkar": "देशकर",
    "Durga": "दुर्गा",
    "Hameer": "हमीर",
    "Hambeer": "हम्बीर",
    "Jogiya": "जोगिया",
    "Jhinjhoti": "झिंझोटी",
    "Kanada": "कानड़ा",
    "Kauns": "कौंस",
    "Kamod": "कामोद",
    "Kedar": "केदार",
    "Lalit": "ललित",
    "Madhyamad Sarang": "मध्यमाद सारंग",
    "Malkauns": "मालकौंस",
    "Marwa": "मारवा",
    "Multani": "मुलतानी",
    "Patdeep": "पटदीप",
    "Paraj": "पराज",
    "Poorvi": "पूर्वी",
    "Puriya": "पुरिया",
    "Ramkali": "रामकली",
    "Shahana": "शहाना",
    "Shuddh Kalyan": "शुद्ध कल्याण",
    "Shuddh Sarang": "शुद्ध सारंग",
    "Shree": "श्री",
    "Sohini": "सोहिनी",
    "Todi": "तोड़ी",
    "Yaman": "यमन",
    "Adana": "अदाना"
};

// Time-based Raga data (based on the provided image)
const ragaTimeMap = {
    // Midnight (12-2 AM)
    midnight: {
        name: "Midnight (0:00-2:00 AM)",
        koreanTime: "축시 (丑時)",
        themeClass: "theme-midnight",
        ragas: ["Malkauns", "Darbari Kanada", "Adana", "Sahana"]
    },
    // Pre-dawn (2-4 AM)
    preDawn: {
        name: "Pre-dawn (2:00-4:00 AM)",
        koreanTime: "인시 (寅時)",
        themeClass: "theme-predawn",
        ragas: ["Sohini", "Paraj"]
    },
    // Dawn (4-6 AM)
    dawn: {
        name: "Dawn (4:00-6:00 AM)",
        koreanTime: "묘시 (卯時)",
        themeClass: "theme-dawn",
        ragas: ["Bhatiyar", "Lalit"]
    },
    // Early Morning (6-8 AM)
    earlyMorning: {
        name: "Early Morning (6:00-8:00 AM)",
        koreanTime: "진시 (辰時)",
        themeClass: "theme-early-morning",
        ragas: ["Bhairav", "Ramkali", "Jogiya"]
    },
    // Morning (8-10 AM)
    morning: {
        name: "Morning (8:00-10:00 AM)",
        koreanTime: "사시 (巳時)",
        themeClass: "theme-morning",
        ragas: ["Ahir Bhairav", "Bilaskhani Todi", "Komal Rishab Asavari", "Todi"]
    },
    // Late Morning (10-12 PM)
    lateMorning: {
        name: "Late Morning (10:00-12:00 PM)",
        koreanTime: "오시 (午時)",
        themeClass: "theme-late-morning",
        ragas: ["Bhairavi", "Deshkar", "Alhaiya Bilawal", "Jaunpuri"]
    },
    // Noon (12-2 PM)
    noon: {
        name: "Noon (12:00-2:00 PM)",
        koreanTime: "미시 (未時)",
        themeClass: "theme-noon",
        ragas: ["Brindavani Sarang", "Shuddh Sarang", "Gaud Sarang"]
    },
    // Afternoon (2-4 PM)
    afternoon: {
        name: "Afternoon (2:00-4:00 PM)",
        koreanTime: "신시 (申時)",
        themeClass: "theme-afternoon",
        ragas: ["Bhimpalasi", "Multani"]
    },
    // Late Afternoon (4-6 PM)
    lateAfternoon: {
        name: "Late Afternoon (4:00-6:00 PM)",
        koreanTime: "유시 (酉時)",
        themeClass: "theme-late-afternoon",
        ragas: ["Poorvi", "Shree", "Patdeep", "Marwa"]
    },
    // Evening (6-8 PM)
    evening: {
        name: "Evening (6:00-8:00 PM)",
        koreanTime: "술시 (戌時)",
        themeClass: "theme-evening",
        ragas: ["Puriya", "Hameer", "Yaman", "Shuddh Kalyan"]
    },
    // Night (8-10 PM)
    night: {
        name: "Night (8:00-10:00 PM)",
        koreanTime: "해시 (亥時)",
        themeClass: "theme-night",
        ragas: ["Jaijaiwanti", "Kedar", "Durga", "Desh"]
    },
    // Late Night (10-12 AM)
    lateNight: {
        name: "Late Night (10:00-12:00 AM)",
        koreanTime: "자시 (子時)",
        themeClass: "theme-late-night",
        ragas: ["Bihag", "Bageshri", "Shankara", "Chandrakauns", "Jhinjhoti"]
    }
};

// Instruments list
const instruments = [
    "Bansuri", "Dhrupad", "Esraj", "Rudra Veena",
    "Santoor", "Sarangi", "Sarod", "Sitar", "Vocal"
];

// Currently selected raga
let selectedRaga = '';

// Get current time slot based on hour
function getCurrentTimeSlot() {
    const hour = new Date().getHours();

    if (hour >= 2 && hour < 4) return 'preDawn';
    if (hour >= 4 && hour < 6) return 'dawn';
    if (hour >= 6 && hour < 8) return 'earlyMorning';
    if (hour >= 8 && hour < 10) return 'morning';
    if (hour >= 10 && hour < 12) return 'lateMorning';
    if (hour >= 12 && hour < 14) return 'noon';
    if (hour >= 14 && hour < 16) return 'afternoon';
    if (hour >= 16 && hour < 18) return 'lateAfternoon';
    if (hour >= 18 && hour < 20) return 'evening';
    if (hour >= 20 && hour < 22) return 'night';
    if (hour >= 22 && hour < 24) return 'lateNight';
    return 'midnight'; // 0-2 AM
}

// Apply time-based theme
function applyTimeBasedTheme() {
    const timeSlot = getCurrentTimeSlot();
    const themeClass = ragaTimeMap[timeSlot].themeClass;

    // Remove all theme classes first
    document.body.classList.remove(
        'theme-predawn', 'theme-dawn', 'theme-early-morning',
        'theme-morning', 'theme-late-morning', 'theme-noon',
        'theme-afternoon', 'theme-late-afternoon', 'theme-evening',
        'theme-night', 'theme-late-night', 'theme-midnight'
    );

    // Add the current theme class
    document.body.classList.add(themeClass);
}

// Display current time
function updateCurrentTime() {
    const now = new Date();
    const timeSlot = getCurrentTimeSlot();
    const koreanTime = ragaTimeMap[timeSlot].koreanTime;

    // Format time as HH:MM AM/PM
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const timeString = `${formattedHours}:${formattedMinutes}${ampm} - ${koreanTime}`;
    document.getElementById('current-time').textContent = timeString;
}

// Show raga selection
function showRagaSelection() {
    const content = document.getElementById('content');
    const currentTimeSlot = getCurrentTimeSlot();

    let html = '<div class="raga-list">';

    // Sort ragas alphabetically
    const sortedRagas = [...ragaTimeMap[currentTimeSlot].ragas].sort();

    sortedRagas.forEach(raga => {
        html += `<button class="btn raga-btn" data-raga="${raga}">${raga}</button>`;
    });

    html += '</div>';
    content.innerHTML = html;

    // Add event listeners to raga buttons
    document.querySelectorAll('.raga-btn').forEach(button => {
        button.addEventListener('click', function () {
            selectedRaga = this.getAttribute('data-raga');
            showInstrumentSelection();
        });
    });
}

// Show instrument selection
function showInstrumentSelection() {
    const content = document.getElementById('content');

    let html = `<button class="btn back-btn">Back</button>`;
    html += `<h2>${selectedRaga}</h2>`;
    html += '<div class="instrument-list">';

    // Instruments are already sorted alphabetically in the array
    instruments.forEach(instrument => {
        html += `<button class="btn instrument-btn" data-instrument="${instrument}">${instrument}</button>`;
    });

    html += '</div>';
    content.innerHTML = html;

    // Add event listener to back button
    document.querySelector('.back-btn').addEventListener('click', showRagaSelection);

    // Add event listeners to instrument buttons
    document.querySelectorAll('.instrument-btn').forEach(button => {
        button.addEventListener('click', function () {
            const instrument = this.getAttribute('data-instrument');
            searchOnYoutube(selectedRaga, instrument);
        });
    });
}

// Search on YouTube
function searchOnYoutube(raga, instrument) {
    const searchQuery = `Raga ${raga} ${instrument}`;
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;

    // Check for mobile device
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Try to open in YouTube app on mobile
        window.location.href = `youtube://results?search_query=${encodeURIComponent(searchQuery)}`;

        // Fallback to web if app fails (after a delay)
        setTimeout(() => {
            window.location.href = searchUrl;
        }, 1000);
    } else {
        // Open in new tab on desktop
        window.open(searchUrl, '_blank');
    }
}

// Initialize on page load
window.addEventListener('load', () => {
    updateCurrentTime();
    applyTimeBasedTheme();
    setInterval(updateCurrentTime, 60000); // Update time every minute
    showRagaSelection();
}); 
