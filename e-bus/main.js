
// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Booking Form Validation
document.querySelector('.booking-form form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting automatically

    const from = document.getElementById('from').value.trim();
    const to = document.getElementById('to').value.trim();
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    if (from === "" || to === "" || date === "" || seats === "") {
        alert('Please fill in all fields.');
    } else if (seats <= 0) {
        alert('Seats must be a positive number.');
    }
});
// JavaScript to display a booking confirmation alert
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission to server

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    // Ensure all fields are filled out before showing the alert
    if (from && to && date && seats) {
        alert(`Booking successful! 
                    From: ${from}
                    To: ${to}
                    Date: ${date}
                    Seats: ${seats}`);
    } else {
        alert("Please fill out all the fields before booking!");
    }
});

// Show bookings when the "Manage Booking" button is clicked
document.querySelector('.manage-booking .btn').addEventListener('click', function () {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length > 0) {
        let bookingDetails = "Your Bookings:\n\n";

        bookings.forEach((booking, index) => {
            bookingDetails += `Booking ${index + 1}:
From: ${booking.from}
To: ${booking.to}
Date: ${booking.date}
Seats: ${booking.seats}
\n`;
        });

        alert(bookingDetails);
    } else {
        alert("No bookings found!");
    }
});