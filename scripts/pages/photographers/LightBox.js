
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

    // 4) fonction de retour au media  precedent 'previous'
    previous(elt, media, name) {

        elt.addEventListener('click', () => {
            this.currentIndex -= 1;

            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex < 0) {
                this.currentIndex = media.length - 1;
                this.currentIndex = name.llenth - 1;
            }

            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        })
    }

     // 5) fonction de d'aller au media  suivant 'previous'

     next(elt, media, name) {

        elt.addEventListener('click', () => {

            this.currentIndex += 1;
            
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (this.currentIndex > name.length - 1) {
                this.currentIndex = 0;
            }
            
            let src = media[this.currentIndex];
            let nameSrc = name[this.currentIndex];

            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        });
     }

     // 6) fer;eture de lq light box

     close() {
        let closeIcon = document.querySelector('.close-lightbox-icon');
        closeIcon.addEventListener('click', () => {
            let lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';
        })
     }

     keyboard(currentMedia, currentMediaName) {
        document.addEventListener('keydown', (key) => {

            console.log('key', key);

            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            //PRESSER LA TOUCHE "Esc" pour fermer la light box

            if (key.code == "Escape") {
                let lightbox = document.getElementById('works-lightbox');
                lightbox.style.display = 'none';
            }

            // click a droit pour acceder a l'element de droit
            else if (key.code == "ArrowRight") {
                this.currentIndex += 1;

                if (this.currentIndex > currentMediaName.length - 1) {
                    this.currentIndex = 0;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }

            // click a guauche pour acceder a l'elt de gauche
            else if (key.code == "ArrowLeft") {
                this.currentIndex -= 1;

                if (this.currentIndex < 0) {
                    this.currentIndex = currentMedia.length - 1;
                    this.currentIndex = currentMediaName.length - 1;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
        });
     }
}