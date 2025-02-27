// Time-based Raga data
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

// Thaat-based Raga classification
const thaatMap = {
    "Bilawal": ["Alhaiya Bilawal", "Deskar", "Shankara", "Bihag", "Durga"],
    "Khamaj": ["Khamaj", "Des", "Tilak Kamod", "Jhinjhoti", "Rageshree"],
    "Kafi": ["Kafi", "Bageshri", "Dhanashree", "Bhimpalasi", "Pilu"],
    "Asavari": ["Asavari", "Jaunpuri", "Darbaari Kanhada", "Komal Rishab Asavari", "Gandhari"],
    "Bhairav": ["Bhairav", "Ahir Bhairav", "Jogiya", "Gauri", "Nat Bhairav"],
    "Bhairavi": ["Bhairavi", "Malkauns", "Sindhu Bhairavi", "Manj Khammaj", "Chandni Kedar"],
    "Kalyan": ["Yaman", "Bhupali", "Shuddha Kalyan", "Kamod", "Chhayanat"],
    "Marwa": ["Marwa", "Sohini", "Puriya", "Lalit", "Basant"],
    "Poorvi": ["Poorvi", "Puriya Dhanashree", "Shree", "Paraj", "Gauri (Poorvi)"],
    "Todi": ["Todi", "Miyan ki Todi", "Gujari Todi", "Multani", "Bilaskhani Todi"]
};

// Instruments list
const instruments = [
    "Bansuri", "Dhrupad", "Esraj", "Rudra Veena",
    "Santoor", "Sarangi", "Sarod", "Sitar", "Vocal"
];

// Navigation state tracking
let selectedRaga = '';
let selectedTimeSlot = '';
let navigationHistory = []; // Track where user came from

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
    const timeSlot = selectedTimeSlot || getCurrentTimeSlot();
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

// Show raga selection for the current time
function showRagaSelection() {
    const currentTimeSlot = selectedTimeSlot || getCurrentTimeSlot();
    showTimeBasedRagaSelection(currentTimeSlot);
}

// Function to navigate back based on history
function navigateBack() {
    if (navigationHistory.length > 0) {
        const lastPage = navigationHistory.pop();
        if (lastPage.page === 'thaatSelection') {
            showThaatSelection();
        } else if (lastPage.page === 'thaatBasedRaga') {
            showThaatBasedRagaSelection(lastPage.thaat);
        } else if (lastPage.page === 'timeSelection') {
            showOtherTimesSelection();
        } else if (lastPage.page === 'timeBasedRaga') {
            showTimeBasedRagaSelection(lastPage.timeSlot, false);
        } else {
            showRagaSelection();
        }
    } else {
        showRagaSelection();
    }
}

// Show selection of other time periods
function showOtherTimesSelection() {
    const content = document.getElementById('content');
    const currentTimeSlot = getCurrentTimeSlot();

    // Save current page to navigation history
    navigationHistory.push({
        page: 'home'
    });

    let html = `<button class="btn back-btn">Back</button>`;
    html += `<h2>Select Time Period</h2>`;
    html += '<div class="time-list content-scroll">';

    // Add all time slots except the current one
    Object.keys(ragaTimeMap).forEach(timeSlot => {
        if (timeSlot !== currentTimeSlot) {
            const timeParts = ragaTimeMap[timeSlot].name.split(" (");
            const timeName = timeParts[0];
            const timeHours = timeParts[1].replace(")", "");

            html += `<button class="btn time-btn" data-time="${timeSlot}">
                <span class="time-name">${timeName}</span>
                <span class="time-hours">${timeHours}</span>
            </button>`;
        }
    });

    html += '</div>';
    content.innerHTML = html;

    // Add event listener to back button
    document.querySelector('.back-btn').addEventListener('click', navigateBack);

    // Add event listeners to time buttons
    document.querySelectorAll('.time-btn').forEach(button => {
        button.addEventListener('click', function () {
            const selectedTime = this.getAttribute('data-time');
            navigationHistory.push({
                page: 'timeSelection'
            });
            showTimeBasedRagaSelection(selectedTime, false);
        });
    });
}

// Show the ragas for a specific time slot
function showTimeBasedRagaSelection(timeSlot, isCurrentTime = null) {
    selectedTimeSlot = timeSlot;
    applyTimeBasedTheme();

    // If isCurrentTime is not provided, determine based on current time
    if (isCurrentTime === null) {
        isCurrentTime = (timeSlot === getCurrentTimeSlot());
    }

    const content = document.getElementById('content');

    let html = '';

    // Always show back button for non-current time pages
    if (!isCurrentTime) {
        html += `<button class="btn back-btn">Back</button>`;
    }

    html += `<h2>${ragaTimeMap[timeSlot].name}</h2>`;
    html += '<div class="raga-list content-scroll">';

    // Sort ragas alphabetically
    const sortedRagas = [...ragaTimeMap[timeSlot].ragas].sort();

    sortedRagas.forEach(raga => {
        html += `<button class="btn raga-btn" data-raga="${raga}">${raga}</button>`;
    });

    html += '</div>';

    // Only show navigation options on the current time page
    if (isCurrentTime) {
        // Add a divider
        html += '<div class="divider"></div>';

        // Add discover title
        html += '<p class="discover-title">Discover another raga</p>';

        // Add navigation buttons
        html += '<div class="nav-buttons">';
        html += '<button class="btn nav-btn" id="other-times-btn">In other times</button>';
        html += '<button class="btn nav-btn" id="by-thaat-btn">By Thaat</button>';
        html += '</div>';
    }

    content.innerHTML = html;

    // Add event listeners to raga buttons
    document.querySelectorAll('.raga-btn').forEach(button => {
        button.addEventListener('click', function () {
            selectedRaga = this.getAttribute('data-raga');
            if (!isCurrentTime) {
                navigationHistory.push({
                    page: 'timeBasedRaga',
                    timeSlot: timeSlot
                });
            }
            showInstrumentSelection();
        });
    });

    // Add event listener to back button for non-current time pages
    if (!isCurrentTime) {
        document.querySelector('.back-btn').addEventListener('click', navigateBack);
    }

    // Add event listeners for navigation buttons on current time page
    if (isCurrentTime) {
        // Handle Other Times button click
        document.getElementById('other-times-btn').addEventListener('click', showOtherTimesSelection);

        // Handle By Thaat button click
        document.getElementById('by-thaat-btn').addEventListener('click', showThaatSelection);
    }
}

// Show Thaat selection
function showThaatSelection() {
    const content = document.getElementById('content');

    // Save current page to navigation history
    navigationHistory.push({
        page: 'home'
    });

    let html = `<button class="btn back-btn">Back</button>`;
    html += `<h2>Select Thaat</h2>`;
    html += '<div class="thaat-list content-scroll">';

    // Add all Thaats
    Object.keys(thaatMap).sort().forEach(thaat => {
        html += `<button class="btn thaat-btn" data-thaat="${thaat}">${thaat}</button>`;
    });

    html += '</div>';
    content.innerHTML = html;

    // Add event listener to back button
    document.querySelector('.back-btn').addEventListener('click', navigateBack);

    // Add event listeners to thaat buttons
    document.querySelectorAll('.thaat-btn').forEach(button => {
        button.addEventListener('click', function () {
            const selectedThaat = this.getAttribute('data-thaat');
            showThaatBasedRagaSelection(selectedThaat);
        });
    });
}

// Show ragas based on selected Thaat
function showThaatBasedRagaSelection(thaat) {
    const content = document.getElementById('content');

    // Record navigation history
    navigationHistory.push({
        page: 'thaatSelection'
    });

    let html = `<button class="btn back-btn">Back</button>`;
    html += `<h2>${thaat} Thaat</h2>`;
    html += '<div class="raga-list content-scroll">';

    // Sort ragas alphabetically
    const sortedRagas = [...thaatMap[thaat]].sort();

    sortedRagas.forEach(raga => {
        html += `<button class="btn raga-btn" data-raga="${raga}">${raga}</button>`;
    });

    html += '</div>';
    content.innerHTML = html;

    // Add event listener to back button
    document.querySelector('.back-btn').addEventListener('click', navigateBack);

    // Add event listeners to raga buttons
    document.querySelectorAll('.raga-btn').forEach(button => {
        button.addEventListener('click', function () {
            selectedRaga = this.getAttribute('data-raga');
            navigationHistory.push({
                page: 'thaatBasedRaga',
                thaat: thaat
            });
            showInstrumentSelection();
        });
    });
}

// Show instrument selection
function showInstrumentSelection() {
    const content = document.getElementById('content');

    let html = `<button class="btn back-btn">Back</button>`;
    html += `<h2>${selectedRaga}</h2>`;
    html += '<div class="instrument-list content-scroll">';

    // Instruments are already sorted alphabetically in the array
    instruments.forEach(instrument => {
        html += `<button class="btn instrument-btn" data-instrument="${instrument}">${instrument}</button>`;
    });

    html += '</div>';
    content.innerHTML = html;

    // Add event listener to back button
    document.querySelector('.back-btn').addEventListener('click', navigateBack);

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
    selectedTimeSlot = getCurrentTimeSlot();
    applyTimeBasedTheme();
    setInterval(updateCurrentTime, 60000); // Update time every minute
    showRagaSelection();
}); 
