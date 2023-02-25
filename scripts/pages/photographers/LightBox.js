
export default class LightBox {
    constructor() {
        this.currentIndex = 0;
    }

    // initialisation de la lightbox
    initLightBox(currentMedia, currentMediaName) {
        let getMedias = Array.from(document.getElementsByClassName('ph-media'));
        let getVideo = Array.from(document.getElementsByTagName('video'));
        //console.log('getMedias', getMedias);
        //console.log('getMedias.localName', getMedias.localName);

        console.log('getVideo', getVideo);
       // getVideo.forEach((elt) => {
         //   console.log('elt', elt);
            // let articleVideo = document.getElementsByTagName('video')[0].localName;
            //console.log('elt.setAttribute(controls)', articleVideo);
            //console.log('elt.setAttribute(controls)', elt.setAttribute(controls));
         //  elt.setAttribute('controls', elt.controls);
        //})
    //     if (element.video != undefined) {
    //         templateI = `<i class="fa fa-play visibility" aria-hidden="true"></i>`;
            
    //    }
   // console.log('currentMedia', currentMedia);
    //console.log('currentMediaName', currentMediaName);

        getMedias.forEach((elt) => {

            console.log('elt', elt);
        })

        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
            // console.log('mediaWorks', mediaWorks, mediaWorks.tagName);
            console.log('index', index);

            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            let videoControler = document.querySelector('video');
            let a;
            if (lightBoxMedia.firstElementChild && lightBoxMedia.firstElementChild.tagName == "VIDEO") {
                //console.log('mediaWorks', mediaWorks);
                lightBoxMedia.firstElementChild.setAttribute('controls', true).display;
                //a=lightBoxMedia.firstElementChild.setAttribute('controls', true).toString();
                // console.log('a', lightBoxMedia.firstElementChild.setAttribute('controls', true).outerHTML.toString());

                // lightBoxMedia.firstElementChild.setAttribute('controls', lightBoxMedia.firstElementChild.contains);
                //  && mediaWorks.tagName == 'VIDEO'
                //console.log('mediaWorks', mediaWorks, mediaWorks.tagName);
                //videoControler.setAttribute('controls', videoControler.controls);
            }
            // videoControler.setAttribute('controls', videoControler.controls);
            // let tempVideo = lightBoxMedia.getElementsByTagName('video');
            //tempVideo[0].setAttribute('controls', tempVideo[0].controls); 
            // tempVideo[0].setAttribute('controls', tempVideo[0].controls)
            //  if(tempVideo.length > 0) {
            //     console.log("tempVideo", tempVideo, tempVideo.length, tempVideo[0]);
            //     for (i= 0; i<tempVideo.length; i++) {
            //         let elt = tempVideo[i];
            //         console.log("elt avant", elt);
            //         elt.setAttribute('controls', elt.controls);
            //         console.log("elt apres", elt);
            //     }
            //     tempVideo.forEach((elt) => {
            //         console.log("elt avant", elt);
            //         elt.setAttribute('controls', elt.controls);
            //         console.log("elt apres", elt);
            //     });
            //  }
            //console.log('videoControler', videoControler);
           //let control = currentMedia[index];
            let src = currentMedia[index];
            let nameSrc = currentMediaName[index];
            this.currentIndex = index;
           // src= a;

             console.log('src', src);
           // console.log('mediaWorks', mediaWorks);
           // console.log('mediaWorks', document.querySelector("video"));
            //    let play = document.querySelector('video');
            //    console.log("play", play);
           // play.setAttribute(controls);
        //    src.setAttribute('controls', src.controls);
            document.getElementById('works-lightbox').style.display = 'block';
            //lightBoxMedia.innerHTML = `${control}`;
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${nameSrc}`;
        }))


        this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName);
        this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName);
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

     // 6) fermeture de la light box

     close() {
        let closeIcon = document.querySelector('.close-lightbox-icon');
        closeIcon.addEventListener('click', () => {
            let lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';
        })
     }

     // RACOURCIS CLAVIER POUR PARCOURIRE LES PHOTOS DANS LA LIGHTBOX
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