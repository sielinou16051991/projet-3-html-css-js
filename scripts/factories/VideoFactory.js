export default class VideoFactory {
    // CRÉER UN ÉLÉMENT video AVEC LES ATTRIBUT src, alt, role
    createHTML(elt){
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute('src', elt.video);
        eltVideo.setAttribute('alt', elt.alt);
        eltVideo.setAttribute('title', elt.title);
        eltVideo.setAttribute('aria-hidden', "true");
        eltVideo.setAttribute('aria-label', elt.ariaLabel);
        // eltVideo.setAttribute(controls);
        console.log('eltVideo.setAttribute(controls);', eltVideo.setAttribute('controls', elt.controls));
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph-video';

        return eltVideo;
    }
}