export default class DifferentSort {
    dropDown(data){
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "block";
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
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
        let sortbtn = Array.from(document.getElementsByClassName('sort'));

        sortbtn.forEach((btn, index) => btn.addEventListener('click', () => {
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
        document.getElementById('photos-taken').innerHTML = " ";
        new GalleryFactory().builder(mediaArraySort);
    }
}