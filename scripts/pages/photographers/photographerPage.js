
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
        
        <section id="photos-taken" aria-label="photos réalisées"> <section>

        </section>
    </main>

    `

})();