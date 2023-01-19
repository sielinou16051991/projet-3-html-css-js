import MediaFactory from "./MediaFactory";

export default class GalleryFactory {
    constructor(){
        this.totalLike = 0;
    }

    // construction de la galerie d'un photographe avec les différents médias et la lightbox
    builder(dataMedia){
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedia.forEach(element => {
            console.log('element.photographerId*****', element.photographerId);
            if (id == element.photographerId) {
                let sectionPhotosTeken = document.getElementsById('photos-taken');
                console.log('*******sectionPhotosTeken');
                let articlePhTeken = document.createElement('article');
                let mediaHTML = mediaFactory.renderMedia('element');

                let tekenTemplate =
                        ` <!--- CREATION D'UN LIEN IMAGE OU VIDEO ------>
                        <a href='#' title = ${element.tilte} >
                         ${mediaHTML.outerHTML}  
                         </a>

                         <div class = "ph-teken-elt-text>
                            <h2 class = "ph-teken-title">${element.title}</h2>
                            <span class = "ph-teken-price>${element.price}</span>
                         </div>
                        `

                        articlePhTeken.innerHTML = tekenTemplate;
                        sectionPhotosTeken.appendChild(articlePhTeken)

            }
        });
    }
}