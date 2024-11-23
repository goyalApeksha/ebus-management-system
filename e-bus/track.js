// track.js
document.getElementById("track-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const bookingId = document.getElementById("booking-id").value;
    const email = document.getElementById("email").value;

    if (bookingId && email) {
        alert(`Tracking bus for Booking ID: ${bookingId}`);
        // Here, integrate API or logic to fetch real-time bus data
        document.getElementById("map").innerHTML = "<p>Bus is on the way. Real-time map loading...</p>";
    } else {
        alert("Please fill out all fields.");
    }
});
