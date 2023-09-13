const offlineMessage = document.getElementById('offline-message');

function checkConnectivity() {
  if (!navigator.onLine) {
    offlineMessage.classList.remove('hidden');
  } else {
    offlineMessage.classList.add('hidden');
  }
}

// Vérifiez la connectivité au chargement de la page
checkConnectivity();

// Écoutez les changements d'état de la connectivité
window.addEventListener('online', checkConnectivity);
window.addEventListener('offline', checkConnectivity);