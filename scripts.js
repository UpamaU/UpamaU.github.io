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
        stylistSelect.innerHTML = '<option selected disabled></option>'; // Reset and add default option
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
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');
    const card4 = document.getElementById('card4');
    const backToAppointmentDetailsBtn = document.getElementById('backToAppointmentDetails');
    const backToPersonalDetailsBtn = document.getElementById('backToPersonalDetails');

    const submitAppointmentDetailsBtn = document.getElementById('submitAppointmentDetails');
    const submitPersonalDetailsBtn = document.getElementById('submitPersonalDetails');
    const confirmAppointmentRequestBtn = document.getElementById('confirmAppointmentRequest');

    submitAppointmentDetailsBtn.addEventListener('click', function () {
        // Check if all fields are filled before going on
        const date = document.getElementById('date').value;
        const service = document.getElementById('service').value;
        const stylist = document.getElementById('stylist').value;
        const time = document.getElementById('time').value;
        
        if (!date || !service || !stylist || !time) {
            alert('Please fill in all fields.');
            return;
        }

        // Hide card1 and show card2
        card1.style.display = 'none';
        card2.style.display = 'block';
    });

    submitPersonalDetailsBtn.addEventListener('click', function () {
        // Check if all fields are filled before going on
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        if (!name || !email || !phone) {
            alert('Please fill in all fields.');
            return;
        }

        // Hide card2 and show card3
        card2.style.display = 'none';
        card3.style.display = 'block';
    });

    confirmAppointmentRequestBtn.addEventListener('click', function () {
        // Hide card3 and show card4
        card3.style.display = 'none';
        card4.style.display = 'block';
    });
    
    backToAppointmentDetailsBtn.addEventListener('click', function () {
        // Show card1 and hide card2
        card1.style.display = 'block';
        card2.style.display = 'none';
    });

    backToPersonalDetailsBtn.addEventListener('click', function () {
        // Show card2 and hide card3
        card2.style.display = 'block';
        card3.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const submitButton = document.getElementById('submitButton2');
    const messageDiv = document.getElementById('signupMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop form submission

        if (form.checkValidity()) {
            // Change button text to "Submitted"
            submitButton.innerText = 'Submitted';
            submitButton.disabled = true; // Disable button to prevent multiple submissions
            messageDiv.innerHTML = '<p class="text-success">Email has been sent for sign up. Come to our salon to enjoy 5% off all your visits.</p>';
        } else {
            messageDiv.innerHTML = '<p class="text-danger">Please fill out the form correctly.</p>';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const groupBookingForm = document.getElementById('groupBookingForm');
    const submitButton = document.getElementById('submitButton3');
    const card5 = document.getElementById('card5')
    card5.style.display = 'block';


    groupBookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop form submission
        const mainPersonEmail = document.getElementById('mainPersonEmail').value.trim();
        const groupSize = parseInt(document.getElementById('groupSize').value);
        const groupDate = document.getElementById('groupDate').value;

        if (!mainPersonEmail || !groupSize || !groupDate) {
            document.getElementById('groupBookingMessage').innerHTML = '<p class="text-danger">Please fill out all fields.</p>';
        } else {
            submitButton.innerText = 'Submitted';
            submitButton.disabled = true;
            document.getElementById('groupBookingMessage').innerHTML = '<p class="text-success">A stylist will be in contact with you shortly for further details.</p>';
        }
    });
});
