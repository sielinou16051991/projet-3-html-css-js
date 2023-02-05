import GalleryFactory from "../../factories/galeryFactory.js";
import LikesSubscriber from "./Likes.js";

export default class MediaBuilder {
    // appelle la GalleryFactory pour créer la section média avec la fonction 'Like' et la boîte
    photographersMedias(data) {
        console.log('chargement de la galerie du photographe');
        let media = data.media;
        let gallery = new GalleryFactory().builder(media);
        this.boxLikesAndPrice(gallery.totalLike, data.photographers);

        new LikesSubscriber();
    }

    // creation d'une boîte contenant le nombre total de likes et le prix du photographe
    boxLikesAndPrice(totalLike, photographers) {
        const id = window.location.search.split('id=')[1];

        console.log('id=', id);
        photographers.forEach(element => {
            console.log('element', element);
            if (id == element.id) {
                let box = document.getElementById('box');
                let boxTemplate = `
                        <span id="total-likes">${totalLike}</span>
                        <i class="fas fa-heart" aria-label='likes'></i>
                        <span>${element.price} €/ jour</span>
                `
                box.innerHTML = boxTemplate;
            }
        });
    }
}