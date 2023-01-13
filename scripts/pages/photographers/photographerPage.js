
(function photographerPage (){
    console.log("javascript photographerPage");
   let body = document.querySelector('body');
    body.innerHTML = `  
                   
    <!--CONSTRUCTION DE L'ANIMATION POUR LE CHARGEMENT DE LA PAGE-->
    <div class="loard--controler">
        <div class="loader">
            <div class="dot"></div>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

    <header id="header" aria-hidden="false">
        <a href="#" aria-label="Fisheye Home page">
            <img src="assets/logo/logo.png" class="logo" alt="veillez patienter, réactualliser la page ou clicker sur le lien">
        </a>
    </header>       
    
    <main>
        <section id="ph-prophile" aria-label="photogrpher's informations">
            <div id="ph-prophile-header"></div>
        </section>

        <!-- les differents tris -->
        <section class="works-sort">
            <span id="sort-text"> Trier part <span>
            <div id="sort-wrapper">
                <button class="sort-btn" aria-haspopup="listbox">Popularité</button>
                <span class="fas fa-chevron-down arrow-down-open" role="button"></span>
                <ul class="hidden-sort" role="listbox">
                    <li class="sort" role="option">
                        Popularité
                        <span class="fas fa-chevron-up arrow-up-close"></span>
                    </li>
                    <li class="sort" role="option">Date</li>
                    <li class="sort" role="option">Titre</li>
                </ul>
            </div>
        </section>
        
        <!-------PHOTOS PRISE---->
        <section id="photos-taken" aria-label="photos réalisées"> <section>

        </section>

        <!------BOX------->
        <div id="form-dialog" aria-label="contactez-moi pour" aria-labelledby="form-title"
            aria-hidden="true">
            <form action="photographer-page.html" method="POST" id="contact-from">
                <header aria-label="en-tête du formulaire de contact">
                    <h1 id="form-title">
                        <span>Contactez-moi</span>
                        <span id="ph-form-name"></span>
                    </h1>
                    <button id="close-btn" title="Fermer le formulaire" type="button">
                        <span class="fas fa-times close-form-icon" aria-hidden="true"></span>
                    </button>
                </header>
                <!-------PRENOM---------->
                <div class="formData" data-error="Vous devez entrer votre prénom." data-error-visible="false">
                    <label for="first-name" id="label-firstname">Prénom</label>
                    <input name="first-name" id="first-name" aria-labelledby="label-firstname" placeholder="Prénom">
                </div>
                <!-------NOM---------->
                <div class="formData" data-error="Vous devez entrer votre nom." data-error-visible="false">
                    <label for="last-name" id="label-lastname">Nom</label>
                    <input name="last-name" id="last-name" aria-labelledby="label-lastname" placeholder="Nom">
                </div>
                <!-------EMAIL---------->
                <div class="formData" data-error="Vous devez entrer votre email valide." data-error-visible="false">
                    <label for="email" id="label-email">Email</label>
                    <input name="last-email" id="last-email" aria-labelledby="label-email" placeholder="exemple@email.com">
                </div>
                <!-------MESSAGE---------->
                <div class="formData" data-error="Vous devez entrer votre message." data-error-visible="false">
                    <label for="message" id="label-message">Votre message</label>
                    <textarea class="form-textarea" cols="20" rows="5" name="message" id="message" aria-labelledby="label-message"
                     placeholder="Votre message" readonly>Votre message...
                    </textarea>
                </div>
                <!-------ENVOYER---------->
                    <input type="submit" title="send" value="Envoyer" class="form-submit">
            </form>
        </div>

        <!-------------LIGTHBOX------------------>
        <aside id="works-lightbox" area-hidden="true">
            <article id="lightbox-body" role="dialog">
                <span class="fas fa-times close-lightbox-icon" role="button" title="close dialog"></span>
                <span class="fas fa-chevron-left left-arrow-lightbox" role="button" title="previous image"></span>
                <span class="fas fa-chevron-right right-arrow-lightbox" role="button" title="Next image"></span>
                <div id="works-lightbox-media"></div>
                <div id="works-lightbox-name"></div>
            </article>
        </aside>
    </main>

    `

})();