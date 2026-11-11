document.addEventListener('DOMContentLoaded', () => {
    const lookupBtn = document.getElementById('lookup');
    const countryInput = document.getElementById('country');
    const result = document.getElementById('result');
 
    lookupBtn.addEventListener('click', () => {
        const country = encodeURIComponent(countryInput.value.trim());
 
        fetch(`world.php?country=${country}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Request failed: ' + response.status);
                }
                return response.text();
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                result.textContent = 'Something went wrong: ' + error.message;
            });
    });
});
