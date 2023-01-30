
export default class ImageFactory {
    // CRÉER UN ÉLÉMENT img AVEC LES ATTRIBUTS src, alt, role
    createHTML(elt){
        let eltImg = document.createElement('img');
        eltImg.setAttribute('src', elt.image);
        eltImg.setAttribute('alt', elt.alt);
        eltImg.setAttribute('title', elt.title);
        eltImg.setAttribute('aria-hidden', "true");
        eltImg.setAttribute('aria-label', elt.ariaLabel);
        eltImg.setAttribute('role', 'button');
        eltImg.className = 'ph-media';

        console.log(eltImg);
        return eltImg;
    }
}