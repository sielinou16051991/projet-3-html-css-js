import MediaFactory from "./MediaFactory";

export default class GalleryFactory {
    constructor(){
        this.totalLike = 0;
    }

    // construction de la galerie d'un photographe avec les différents médias et la lightbox
    builder(){
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new MediaFactory();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedia.forEach(element => {
            if (id == element.photographerId) {
                let sectionPhotosTeken = document.getElementsById('photos-taken');
                console.log('*******sectionPhotosTeken');
            }
        });
    }
}