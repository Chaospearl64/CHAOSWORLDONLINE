const images = document.querySelector('.image-previews')
const smallImage = document.querySelector('.small-pic')
const mainPic = document.querySelector('.main-pic')

let handleClick = (e) => {
    mainPic.src = e.target.src
}

images.addEventListener('click', handleClick)

//======================= Auto scroller =======================//
const scroll = () => {
    window.scrollTo({
        top: mainPic,
        behavior: 'smooth'
    });
}

images.addEventListener('click', scroll)

//======================= Timer =======================//

let timerElement = document.getElementById('timer');

// Set the initial timer values
let hours = 0;
let minutes = 0;
let seconds = 0;

// Update the timer display
function updateTimer() {
    // Format the time values
    let formattedTime = hours.toString().padStart(2, '0') + ':' +
                        minutes.toString().padStart(2, '0') + ':' +
                        seconds.toString().padStart(2, '0');
    
    // Update the timer element
    timerElement.textContent = formattedTime;
}

// Function to start the timer
function startTimer() {
    // Update the timer every second
    let timerInterval = setInterval(function() {
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;

            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        // Update the timer display
        updateTimer();
    }, 1000);
}

// Start the timer
startTimer();