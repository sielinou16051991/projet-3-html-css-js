import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./VideoFactory.js";

export default class MediaFactory {
    
    renderMedia(elt){
        let factory = null;
        if(elt.hasOwnProperty('image')) {
            factory = new ImageFactory();
        } else if (elt.hasOwnProperty('video')) {
            factory = new VideoFactory();
        }
        return factory.createHTML(elt);
    }
}