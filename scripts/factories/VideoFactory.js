export default class VideoFactory {
    // CRÉER UN ÉLÉMENT video AVEC LES ATTRIBUT src, alt, role
    createHTML(elt){
        // 
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute('src', elt.video);
        eltVideo.setAttribute('alt', elt.alt);
        eltVideo.setAttribute('title', elt.title);
        eltVideo.setAttribute('aria-hidden', "true");
        eltVideo.setAttribute('aria-label', elt.ariaLabel);
        // eltVideo.setAttribute('controls', elt.controls);
        // console.log('eltVideo.setAttribute(controls);', eltVideo.setAttribute('controls', elt.controls));
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph-media';
        // console.log("eltVideo", eltVideo.innerHTML);
        // let v = document.querySelector('video');
        
        // console.log("v", v);
        // let templateI = `<i class="fa fa-play" aria-hidden="true"></i>
        //                     ${eltVideo}`;
        // return templateI;
        return eltVideo;
    }
}