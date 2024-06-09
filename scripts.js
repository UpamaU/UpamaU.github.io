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
    const timeInput = document.getElementById('time');

    serviceSelect.addEventListener('change', function() {
        const selectedService = serviceSelect.value;
        stylistSelect.innerHTML = '';
        stylistSelect.disabled = true;
        timeInput.disabled = true;

        switch (selectedService) {
            case 'Full Colour':
                stylistSelect.innerHTML = `
                    <option value="Chloe">Chloe</option>
                    <option value="Ava">Ava</option>
                    <option value="Emma">Emma</option>
                `;
                break;
            case 'Ombre':
                stylistSelect.innerHTML = `
                    <option value="Bella">Bella</option>
                    <option value="Fiona">Fiona</option>
                `;
                break;
            // Add more cases for other services
        }

        stylistSelect.disabled = false;
    });

    stylistSelect.addEventListener('change', function() {
        const selectedStylist = stylistSelect.value;
        timeInput.disabled = true;

        // Example of validating a booking time (e.g., must be between 9:00 AM and 5:00 PM)
        if (selectedStylist) {
            timeInput.disabled = false;
            timeInput.setAttribute('min', '09:00');
            timeInput.setAttribute('max', '17:00');
        }
    });
});
