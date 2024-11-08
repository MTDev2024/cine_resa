document.addEventListener('DOMContentLoaded', function() {
    const seats = document.querySelectorAll('.seat');
    const selectedSeats = document.getElementById('selected-seats');
    const statusMessage = document.getElementById('status-message');
    const reserveButton = document.getElementById('btn-reserve');
    
    let selectedSeatCount = 0;

    function updateSelectedSeatCount() {
        // Correction de la syntaxe de la chaîne de caractères
        selectedSeats.innerText = `Places sélectionnées: ${selectedSeatCount}`;
    }

    // Exemple d'utilisation de la fonction, par exemple pour une action de clic sur un siège
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected'); // Marquer le siège comme sélectionné ou non
            selectedSeatCount = document.querySelectorAll('.seat.selected').length;
            updateSelectedSeatCount();
        });
    });

    reserveButton.addEventListener('click', () => {
        if (selectedSeatCount > 0) {
            statusMessage.innerText = 'Réservation réussie !';
        } else {
            statusMessage.innerText = 'Veuillez sélectionner au moins une place.';
        }
    });
});
