let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// Gestionnaire d'événements pour 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  // Enregistrez l'événement 'beforeinstallprompt' pour une utilisation ultérieure
  deferredInstallPrompt = evt;
  // Affichez le bouton d'installation
  installButton.removeAttribute('hidden');
}

// Gestionnaire d'événements pour le clic sur le bouton d'installation
function installPWA(evt) {
  if (deferredInstallPrompt) {
    // Affichez la demande d'installation
    deferredInstallPrompt.prompt();
    // Désactivez le bouton d'installation pour éviter les clics multiples
    installButton.setAttribute('hidden', true);
    // Attendez la réponse de l'utilisateur à la demande d'installation
    deferredInstallPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('L\'utilisateur a accepté l\'installation', choiceResult);
        } else {
          console.log('L\'utilisateur a refusé l\'installation', choiceResult);
        }
        // Réinitialisez deferredInstallPrompt
        deferredInstallPrompt = null;
      });
  }
}

// Gestionnaire d'événements pour 'appinstalled'
window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
  // Ajoutez ici le code pour enregistrer l'événement d'installation dans les analyses ou effectuer toute autre action requise
  console.log('L\'application Perfectum a été installée.', evt);
}
