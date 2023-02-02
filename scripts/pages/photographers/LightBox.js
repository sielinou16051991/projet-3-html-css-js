
export default class LightBox {
    constructor() {
        this.currentIndex = 0;
    }

    // initialisation de la lightbox
    initLightBox(currentMedia, currentMediaName) {
        let gauche = document.querySelector('.left-arrow-lightbox');
        let droit = document.querySelector('.right-arrow-lightbox');
        let getMedias = Array.from(document.getElementsByClassName('ph-media'));

        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener('click', () => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            let src = currentMedia[index];
            let nameSrc = currentMediaName[index];
            this.currentIndex = index;

            document.getElementById('works-lightbox').style.display = 'block';
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        }))
        this.previous(gauche, currentMedia, currentMediaName);
        this.next(droit, currentMedia, currentMediaName);
        this.close();
        this.keyboard(currentMedia, currentMediaName);
        return this;
    }

    //fonction de retour au media  precedent 'previous'
    previous(elt, media, name) {
        elt.addEventListener('click', () => {
            this.currentIndex -= 1;
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
        })
    }
}