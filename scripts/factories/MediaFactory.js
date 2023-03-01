import LightBox from "../pages/photographers/LightBox.js";
import ImageFactory from "./ImageFactory.js";
import VideoFactory from "./VideoFactory.js";
import VideoLightBoxFactory from "./VideoLightBoxFactory.js";

export default class MediaFactory {
    
    renderMedia(elt, type){
        let factory = null;
        console.log('elt media', elt);
        if(elt.hasOwnProperty('image')) {
            factory = new ImageFactory();
           // console.log('factory image', factory);
            return factory.createHTML(elt);
        } else if (elt.hasOwnProperty('video')) {
            if (type == 'LightBox') {
                factory = new VideoLightBoxFactory();
            } else if (type == 'Galery') {
                factory = new VideoFactory();
               // console.log('factory video', factory);
                console.log('VideoLightBoxFactory video', factory);
            }
            return factory.createHTML(elt);
        } 
    }
}