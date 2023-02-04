export default class From {

     fields() {
        console.log('***formulaire****');
         let form = document.getElementById('contact-from');
         let firstName = document.getElementById('first-name');
         let lastName = document.getElementById('last-name');
         let email = document.getElementById('email');
         let message = document.getElementById('message');
         const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

         //ENVOI DU FORMULAIRE
         form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = this.checkNames(firstName, regex) && this.checkNames(lastName, regex) && this.checkEmail(email, regex) && this.checkMessage(message, regex);

            if (isValid) {
                firstName.style.border = 'none';
                lastName.style.border = 'none';
                email.style.border = 'none';
                message.style.border = 'none';
                this.cosoleMessageValid(firstName, lastName, email, message);
                document.getElementById('contact-form').reset();

            } else {
                this.errorVerification(firstName, lastName, email, message, regex);
            }
         });

     }

     consoleMessageValid(firstName, lastName, email, message) {
        console.group('Données du formulaire de contact');
        console.log('Prénoms : ' + firstName.value);
        console.log('Nom : ' + lastName.value);
        console.log('Email : ' + email.value);
        console.log('Message : ' + message.value);
        console.groupEnd();
     }

     errorVerification(firstName, lastName, email, message, regex) {
        this.checkNames(firstName, regex);
        this.checkNames(lastName, regex);
        this.checkEmail(email);
        this.checkMessage(message);
     }

     // Vérification du prénom et du nom
     checkNames(firstOrLastName, regex){
        // let regex = /^[a-zA-Z]+$/;
        if (firstOrLastName.value.trim().length < 2 ||
             firstOrLastName.value.trim() === "" ||
              !firstOrLastName.value.match(regex)) {
                firstOrLastName.parentElement.setAttribute('data-error-visible', 'true');
                firstOrLastName.style.border = '2px solid #red';
                return false;
        } else {
            firstOrLastName.parentElement.setAttribute('data-error-visible', 'false');
            firstOrLastName.style.border = '.5px solide #279e7a';
            return true;
        }
     }

     checkEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.value.trim().match(regex)) {
            email.parentElement.setAttribute('data-error-visible', 'false');
            email.style.border = 'solid #279e7a 0.19rem';
            return true;
        } else {
            email.parentElement.setAttribute('data-error-visible', 'true');
            email.style.border = 'solide #e54858 2px';
            return false;
        }
     }

     checkMessage(message) {
        if (message.value.trim() === '' || message.value.trim() == null) {
            message.parentElement.setAttribute('data-error-visible', 'true');
            message.style.border = '2px solid #e54858';
            return false;
        } else {
            message.parentElement.setAttribute('data-error-visible', 'false');
            message.style.border = 'solid #279e7a 0.19rem';
            return true;
        }
     }
}