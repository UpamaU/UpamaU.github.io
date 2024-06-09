document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        if (form.checkValidity()) {
            // Change button text to "Submitted"
            submitButton.innerText = 'Submitted';
            submitButton.disabled = true; // Disable button to prevent multiple submissions
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const serviceSelect = document.getElementById('service');
    const stylistSelect = document.getElementById('stylist');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    serviceSelect.addEventListener('change', function() {
        const selectedService = serviceSelect.value;
        stylistSelect.innerHTML = '<option selected disabled>Choose a stylist</option>'; // Reset and add default option
        stylistSelect.disabled = true;
        timeInput.disabled = true;

        switch (selectedService) {
            case 'Full Colour':
                stylistSelect.innerHTML += `
                    <option value="Chloe">Chloe</option>
                    <option value="Ava">Ava</option>
                    <option value="Emma">Emma</option>
                `;
                break;
            case 'Ombre':
                stylistSelect.innerHTML += `
                    <option value="Bella">Bella</option>
                    <option value="Fiona">Fiona</option>
                `;
                break;
            case 'Regular Haircut':
                stylistSelect.innerHTML += `
                    <option value="Ava">Ava</option>
                    <option value="Chloe">Chloe</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Mira">Mira</option>
                `;
                break;
            case 'Curly Cut':
                stylistSelect.innerHTML += `
                    <option value="Chloe">Chloe</option>
                    <option value="Mira">Mira</option>
                `;
                break;
            case 'Wash and Style':
                stylistSelect.innerHTML += `
                    <option value="Ava">Ava</option>
                    <option value="Chloe">Chloe</option>
                    <option value="Mira">Mira</option>
                `;
                break;
            case 'Partial Highlights':
                stylistSelect.innerHTML += `
                    <option value="Bella">Bella</option>
                    <option value="Daisy">Daisy</option>
                `;
                break;
            case 'Balayage':
                stylistSelect.innerHTML += `
                    <option value="Chloe">Chloe</option>
                    <option value="Fiona">Fiona</option>
                `;
                break;
            case 'Root Touch-Up':
                stylistSelect.innerHTML += `
                    <option value="Chloe">Chloe</option>
                `;
                break;
            case 'Hair Trim':
                stylistSelect.innerHTML += `
                    <option value="Bella">Bella</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Fiona">Fiona</option>
                `;
                break;
            case 'Deep Conditioning Treatment':
                stylistSelect.innerHTML += `
                    <option value="Bella">Bella</option>
                `;
                break;
            case 'Scalp Treatment':
                stylistSelect.innerHTML += `
                    <option value="Bella">Bella</option>
                    <option value="Fiona">Fiona</option>
                `;
                break;
            case 'Keratin Treatment':
                stylistSelect.innerHTML += `
                    <option value="Mira">Mira</option>
                `;
                break;
            case 'Protein Treatment':
                stylistSelect.innerHTML += `
                    <option value="Daisy">Daisy</option>
                    <option value="Mira">Mira</option>
                `;
                break;
            // Add more cases for other services
            default:
                stylistSelect.innerHTML = '<option selected disabled>Choose a stylist</option>';
        }
        stylistSelect.disabled = false;
    });

    stylistSelect.addEventListener('change', function() {
        timeInput.disabled = false;
        updateAvailableTimes();
    });

    dateInput.addEventListener('change', function() {
        updateAvailableTimes();
    });

    function updateAvailableTimes() {
        const selectedDate = new Date(dateInput.value);
        const dayOfWeek = selectedDate.getDay();

        let availableTimes = '';

        if (dayOfWeek >= 0 && dayOfWeek < 6) { // Monday to Saturday: 9am to 5pm
            availableTimes = generateTimeOptions(9, 17);
        } else if (dayOfWeek === 6) { // Sunday: closed
            availableTimes = ''; // No available times
            timeInput.disabled = true;
        }

        timeInput.innerHTML = availableTimes;
    }

    function generateTimeOptions(startHour, endHour) {
        let options = '';
        for (let hour = startHour; hour < endHour; hour++) {
            options += `<option value="${hour}:00">${hour}:00</option>`;
            options += `<option value="${hour}:30">${hour}:30</option>`;
        }
        options += `<option value="${endHour}:00">${endHour}:00</option>`;
        return options;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookingForm');
    const submitButton = document.getElementById('submitAppointment');
    const userDetailsForm = document.getElementById('userDetailsForm');
    const appointmentDetails = document.getElementById('appointmentDetails');
    const userDetails = document.getElementById('userDetails');
    const appointmentSummary = document.getElementById('appointmentSummary');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Transition to user details section
        appointmentDetails.style.display = 'none';
        userDetails.style.display = 'block';
    });

    userDetailsForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Display appointment summary
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const service = document.getElementById('service').value;
        const stylist = document.getElementById('stylist').value;
        const time = document.getElementById('time').value;

        document.getElementById('summaryName').textContent = name;
        document.getElementById('summaryEmail').textContent = email;
        document.getElementById('summaryPhone').textContent = phone;
        document.getElementById('summaryDate').textContent = date;
        document.getElementById('summaryService').textContent = service;
        document.getElementById('summaryStylist').textContent = stylist;

        // Transition to appointment summary section
        userDetails.style.display = 'none';
        appointmentSummary.style.display = 'block';
    });

    submitButton.addEventListener('click', function () {
        // Submit appointment request logic here
        // For now, simulate a successful request
        appointmentSummary.innerHTML = `
            <h2>Appointment Request Sent</h2>
            <p>Your Appointment Request has been sent. An email with your appointment details has been sent to your email. Please confirm your appointment through that email within the next hour.</p>
        `;
    });
});