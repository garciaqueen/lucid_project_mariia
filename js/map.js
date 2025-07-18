document.addEventListener("DOMContentLoaded", function () {
    const address = document.getElementById('location-text').innerText.trim();

    const map = L.map('map').setView([49.0, 32.0], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([49.0, 32.0]).addTo(map)
        .openPopup();

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                map.setView([lat, lon], 13);
                marker.setLatLng([lat, lon])
                    .openPopup();
            } else {
                marker.setPopupContent('Адреса не знайдена');
            }
        })
        .catch(() => {
            marker.setPopupContent('Помилка геокодування');
        });
});
