import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./VideoFactory.js";

export default class MediaFactory {
    
    renderMedia(elt){
        let factory = null;
        if(elt.hasOwnProperty('image')) {
            factory = new ImageFactory();
            console.log('factory image', factory);
        } else if (elt.hasOwnProperty('video')) {
            factory = new VideoFactory();
            console.log('factory video', factory);
        }
        return factory.createHTML(elt);
    }
}