import MediaFactory from "./MediaFactory.js";
import LightBox from "../pages/photographers/LightBox.js";

export default class GalleryFactory {
    constructor(){
        this.totalLike = 0;
    }

    // construction de la galerie d'un photographe avec les différents médias et la lightbox
    builder(dataMedia){
        console.log("construction de la galerie d'un photographe avec les différents médias et la lightbox");
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedia.forEach(element => {
            console.log('element.photographerId*****', element.photographerId);
            if (id == element.photographerId) {
                console.log('id == element.photographerId', id == element.photographerId);
                let sectionPhotosTeken = document.getElementById('photos-taken');
                console.log('*******sectionPhotosTeken', sectionPhotosTeken);
                let articlePhTeken = document.createElement("article");
                let mediaHTML = mediaFactory.renderMedia(element);

                console.log('mediaHTML.outerHTML', mediaHTML.outerHTML);

                console.log('article', articlePhTeken);

                let tekenTemplate =
                        ` <!--- CREATION D'UN LIEN IMAGE OU VIDEO  ------>
                         <a href='#' title = "${element.tilte}" >
                         ${mediaHTML.outerHTML}  
                         </a>

                         <div class = "ph-taken-elt-text">
                            <h2 class = "ph-taken-title">${element.title}</h2>
                            <span class = "ph-taken-price">${element.price}</span>
                            <div class = "ph-elt-like">
                                <span class = "ph-taken-like">
                                    <a class = "ph-taken-like">
                                        ${element.likes}
                                    </a>
                                </span>
                                <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                            </div>
                            
                         </div>
                        `

                        articlePhTeken.innerHTML = tekenTemplate;
                        sectionPhotosTeken.appendChild(articlePhTeken);
                        articlePhTeken.classList.add("ph-taken-elt");
                        this.totalLike += parseInt(element.likes);
                        currentMedia.push(mediaHTML.outerHTML);
                        currentMediaName.push(element.title);

                        console.log('currentMedia', currentMedia);

                        console.log("end forEach galeriFactory");

                        (new LightBox()).initLightBox(currentMedia, currentMediaName)

            }
        })
        return this;
    }
}