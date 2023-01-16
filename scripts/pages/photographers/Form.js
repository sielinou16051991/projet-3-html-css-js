export default class From {

     fields() {
         let form = document.getElementById('contact-from');
         let firstName = document.getElementById('first-name');
         let lastName = document.getElementById('last-name');
         let email = document.getElementById('email');
         let message = document.getElementById('message');
         const regex = /^[a-zA-Z]+$/;

         //ENVOI DU FORMULAIRE
         form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = this.checkNames(firstName, regex) &&
                this.checkNames(lastName, regex) &&
                this.checkNames(email, regex) &&
                this.checkNames(message, regex);

            if (isValid) {
                firstName.style.border = 'none';
                lastName.style.border = 'none';
                email.style.border = 'none';
                message.style.border = 'none';
                this.cosoleMessageValid(firstName, lastName, email, message);
                document.getElementById('contact-form').reset();

            } else {
                this.errorVerification(firstName, lastName, email, message);
            }
         })

     }
}