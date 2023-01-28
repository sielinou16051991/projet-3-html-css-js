import GalleryFactory from "../../factories/galeryFactory.js";

export default class DifferentSort {
    // Evénements, ouvre/ferme le dropDownMenu
    dropDown(data){
        console.log('differentSort');
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            console.log('click open');
            arrowOpen[0].addEventListener('click', () => {
                console.log('click open');
                hiddenSort[0].style.display = "block";
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
            console.log('click close');
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'none';
            });
        }
    }

    // tri sur les médias en fonction de la popularitée, des donnée et de la taille
    sortMedias(data) {
        let mediaArraySort = [];
        let media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none"
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                // tri en fonction de la popularité
                mediaArraySort = media.sort((a, b) => {
                    return b.likes - a.likes;
                });
            } else if (index == 1) {
                btnSort.innerHTML = `Data`;

                // tri en fonction de la date
                mediaArraySort = media.sort((a, b) => {
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                // tri en fonction du titre
                mediaArraySort = media.sort((a, b) => {
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase){
                        return 1;
                    }
                })
            }
            this.displaySortMedia(mediaArraySort);
        }));
    }

    displaySortMedia(mediaArraySort) {
        // AFFICHAGE PHOTOGRAPHES TRAVAILLE AVEC SORT
        document.getElementById('photos-taken').innerHTML = "";
        new GalleryFactory().builder(mediaArraySort);
    }
}