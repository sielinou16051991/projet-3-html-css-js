

// AFFICHAGE DE TOUS LES PHOTOGRAPHES PAR DEFAUT
export default class HomePage {
    // construction de la section photogra
    photographe;
    phoyographerArticle;
    photographe;
    photographe;
    photographe;
    portrait;
    photographe;
    photographe;
    city;
    country;
    photographe;
    photographe;
    tagline;
    photographe;
    price;
    photographerArticle;
    tags;
    displayPhotographers(data) {
        console.log("-----data-----", data);
        let photographers = data.photographers;
        photographers.map(photographe => {
            let photographerSections = document.getElementById('photographers');
            let photographerArticles = document.createElement('article');

            this.photographerArticle.className = this.photographe.tags.join(' ') + ' articlePhotographer';

            let templatePhotographer = `
            <a href="photographers.html?id=${this.photographe.id}"
                    title="${this.photographe.name}>
                <img src="${this.photographe.portrait}" alt="${this.photographe.alt}">
                <h2 class = "name"> ${this.photographe.name} <h2>
            </a>
            <p class="location"> ${this.photographe.city}, ${this.photographe.country} </p>
            <p class="tagline">${this.photographe.tagline}</p>
            <p class="price"> ${this.photographe.price}</p>

                        `
            photographerSections.appendChild(photographerArticles);
            photographerArticles.innerHTML = templatePhotographer;
        });


    }
}
