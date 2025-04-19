// Fonction pour enregistrer le poids
function saveWeight() {
    const weight = document.getElementById('weight').value;
    if (weight) {
        let history = JSON.parse(localStorage.getItem('weightHistory')) || [];
        history.push({ date: new Date().toLocaleDateString(), weight: weight });
        localStorage.setItem('weightHistory', JSON.stringify(history));
        displayWeightHistory();
    }
}

// Fonction pour afficher l'historique des poids
function displayWeightHistory() {
    const history = JSON.parse(localStorage.getItem('weightHistory')) || [];
    const historyDiv = document.getElementById('weight-history');
    historyDiv.innerHTML = '';
    history.forEach(entry => {
        const p = document.createElement('p');
        p.textContent = `Date: ${entry.date}, Poids: ${entry.weight} kg`;
        historyDiv.appendChild(p);
    });
}

// Afficher l'historique au chargement de la page
document.addEventListener('DOMContentLoaded', displayWeightHistory);
