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
    const dateTimeInput = document.getElementById('datetime');
    const submitButton = document.getElementById('submitButton');

    dateTimeInput.addEventListener('change', function() {
        const selectedDateTime = dateTimeInput.value;

        if (selectedDateTime) {
            serviceSelect.disabled = false;
            stylistSelect.disabled = false;
        } else {
            serviceSelect.disabled = true;
            stylistSelect.disabled = true;
        }
    });

    serviceSelect.addEventListener('change', function() {
        const selectedService = serviceSelect.value;

        if (selectedService) {
            stylistSelect.innerHTML = getStylistOptions(selectedService);
            stylistSelect.disabled = false;
        } else {
            stylistSelect.innerHTML = '';
            stylistSelect.disabled = true;
        }
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        const selectedDateTime = dateTimeInput.value;
        const selectedService = serviceSelect.value;
        const selectedStylist = stylistSelect.value;

        if (selectedDateTime && selectedService && selectedStylist) {
            // Submit the form or proceed with the next step
            alert('Booking confirmed!');
        } else {
            alert('Please fill in all required fields.');
        }
    });

    function getStylistOptions(service) {
        switch (service) {
            case 'Full Colour':
                return `
                    <option value="Chloe">Chloe</option>
                    <option value="Ava">Ava</option>
                    <option value="Emma">Emma</option>
                `;
            case 'Ombre':
                return `
                    <option value="Bella">Bella</option>
                    <option value="Fiona">Fiona</option>
                `;
            case 'Regular Haircut':
                return `
                    <option value="Ava">Ava</option>
                    <option value="Chloe">Chloe</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Mira">Mira</option>
                `;
            case 'Curly Cut':
                return `
                    <option value="Chloe">Chloe</option>
                    <option value="Mira">Mira</option>
                `;
            case 'Wash and Style':
                return `
                    <option value="Ava">Ava</option>
                    <option value="Chloe">Chloe</option>
                    <option value="Mira">Mira</option>
                `;
            case 'Partial Highlights':
                return `
                    <option value="Bella">Bella</option>
                    <option value="Daisy">Daisy</option>
                `;
            case 'Balayage':
                return `
                    <option value="Chloe">Chloe</option>
                    <option value="Fiona">Fiona</option>
                `;
            case 'Root Touch-Up':
                return `
                    <option value="Chloe">Chloe</option>
                `;
            case 'Hair Trim':
                return `
                    <option value="Bella">Bella</option>
                    <option value="Daisy">Daisy</option>
                    <option value="Fiona">Fiona</option>
                `;
            case 'Deep Conditioning Treatment':
                return `
                    <option value="Bella">Bella</option>
                `;
            case 'Scalp Treatment':
                return `
                    <option value="Bella">Bella</option>
                    <option value="Fiona">Fiona</option>
                `;
            case 'Keratin Treatment':
                return `
                    <option value="Mira">Mira</option>
                `;
            case 'Protein Treatment':
                return `
                    <option value="Daisy">Daisy</option>
                    <option value="Mira">Mira</option>
                `;
            // Add more cases for other services
            default:
                return '';
        }
    }
});
