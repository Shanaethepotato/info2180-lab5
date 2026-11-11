document.addEventListener('DOMContentLoaded', () => {
    const lookupBtn = document.getElementById('lookup');
    const citiesBtn = document.getElementById('lookup-cities');
    const countryInput = document.getElementById('country');
    const result = document.getElementById('result');

    function search(type) {
        const country = encodeURIComponent(countryInput.value.trim());
        let url = `world.php?country=${country}`;

        // Extra query parameter tells world.php to return cities
        if (type === 'cities') {
            url += '&lookup=cities';
        }

        fetch(url)
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
    }

    lookupBtn.addEventListener('click', () => search('country'));
    citiesBtn.addEventListener('click', () => search('cities'));
});