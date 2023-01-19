
export default class ImageFactory {
    // CRÉER UN ÉLÉMENT img AVEC LES ATTRIBUTS src, alt, role
    createHTML(elt){
        let eltImg = document.createElement('img');
        eltImg.setAttribute('src', elt.image);
        eltImg.setAttribute('alt', elt.alt);
        eltImg.setAttribute('role', 'button');
        eltImg.className = 'ph-media';

        return eltImg;
    }
}