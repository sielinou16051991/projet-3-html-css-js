export default class header {

    entete(){
       let body = document.querySelector('body');
       let section = document.createElement('section')
   console.log("body", body);
      let  header = `
                   
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
           <nav aria-label="photographer categories">
               <ul class="liste">
                   <a href="#">
                       <li data-filter="portrait">#Portrait</li>
                   </a>
                   <a href="#">
                       <li data-filter="art">#Art</li>
                   </a>
                   <a href="#">
                       <li data-filter="fashion">#Fashion</li>
                   </a>
                   <a href="#">
                       <li data-filter="architecture">#Architecture</li>
                   </a>
                   <a href="#">
                       <li data-filter="travel">#Travel</li>
                   </a>
                   <a href="#">
                       <li data-filter="sport">#Sport</li>
                   </a>
                   <a href="#">
                       <li data-filter="animals">#Animals</li>
                   </a>
                   <a href="#">
                       <li data-filter="events">#Events</li>
                   </a>
               </ul>
           </nav>
           <a href="#photographers" class="button--forContent"
               id="main-photographers-link">
               Passer au contenu
           </a>
           <h1>Nos photographes</h1>
       </header>
        `
       // body = $("header: nth-child(1)");
        //body.appendChild(header);
       // console.log("header", header);
        body.prepend(section);
        section.innerHTML = header;
    }
     
}