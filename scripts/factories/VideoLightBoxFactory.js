export default class VideoLightBoxFactory {
    createHTML(elt) {
       let content = document.createElement('div');
       let videoLightBox = document.createElement('video');
        videoLightBox.setAttribute('src', elt.video);
        videoLightBox.setAttribute('alt', elt.alt);
        videoLightBox.setAttribute('title', elt.title);
        videoLightBox.setAttribute('aria-hidden', "true");
        videoLightBox.setAttribute('aria-label', elt.ariaLabel);
        videoLightBox.setAttribute('controls', 'controls');
        content.appendChild(videoLightBox);
        content.className = 'ph-media';
        console.log('content', content);
        return content;
    }

    
}