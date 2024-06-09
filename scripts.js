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

        // Validate booking time based on selected stylist and day
        if (selectedStylist && dateInput.value) {
            const selectedDate = new Date(dateInput.value);
            const dayOfWeek = selectedDate.getDay();
            const hours = selectedDate.getHours();

            if ((dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours <= 16) ||   // Monday to Friday: 9am to 5pm
                (dayOfWeek === 6 && hours >= 10 && hours <= 14)) {                  // Saturday: 10am to 3pm
                timeInput.disabled = false;
                timeInput.setAttribute('min', '09:00');
                timeInput.setAttribute('max', '17:00');
            }
        }
    });

    dateInput.addEventListener('change', function() {
        // Trigger stylist select change to update available times based on the selected date
        stylistSelect.dispatchEvent(new Event('change'));
    });
});
