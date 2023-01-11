
(function photographerPage (){
    console.log("javascript");
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

        
        <section id="ph-works" aria-label="photographer works">

        </section>
    </main>

    `

})();