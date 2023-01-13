export default class ContactMeFormModal {
    // Événements, lancez/fermez le modal en cliquant sur le bouton 'contactez-moi'

    modal(data) {
        console.log("---------ContactMeFormModal----");
        let modalBtn = document.getElementById("ph-contact");
        let closeBtn = document.getElementsByClassName("close-form-icon");

        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal());
            this.formPhName(data);
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }

    // OUVERTURE DE LA MODAL ===> la box
    launchModal(){
        let modalbg = document.getElementById("form-dialog");
        modalbg.style.display = 'block';
    }

    // FERMETURE DE LA MODALE
    closeModal() {
        let modalbg = document.getElementById('form-dialog');
        modalbg.style.display = 'none';
    }

    // AFFICHER LE NOM DES PHOTOGRAPHE SOUS LE FORMULAIRE
    formPhName(data) {
        let id = window.location.search.split('id=')[1]; // récupération de l'identifiant du photographe
        let photographers = id ? data : data.filter(photographer => {
            photographer.id == id;
        });
        let phName = document.getElementById('ph-form-name');
        console.log('photographers[0]', photographers[0]);
       let phNameTemplate = `: ${photographers[0].name}`;
        phName.innerHTML = phNameTemplate;
    }
}