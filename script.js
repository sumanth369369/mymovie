<script>
// Countdown timer
var countdownElement = document.getElementById('countdown');
var countDownDate = new Date().getTime() + 5 * 60 * 60 * 1000; // 12 hours in milliseconds

var countdownInterval = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "EXPIRED";
    }
}, 1000);

// JavaScript to handle slider functionality
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
// Hide all slides and deactivate all dots
slides.forEach(slide => slide.classList.remove('active'));
dots.forEach(dot => dot.classList.remove('active'));

// Show the slide at the given index and activate the corresponding dot
slides[index].classList.add('active');
dots[index].classList.add('active');
}

// Initialize first slide as active
showSlide(0);

// Add click event listeners to dots
dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
showSlide(index);
});
});

</script>