import Filter from "./filterTags.js";
import header from "../header/header.js";

// AFFICHAGE DE TOUS LES PHOTOGRAPHES PAR DEFAUT
export default class homePage{
    // construction de la section photogra
    displayPhotographers(data){
        console.log("-----data-----", data);
        let photographers = data.photographers;
        console.log('***photographers***', photographers);
        photographers.map(photographe => {
            let photographerSections = document.getElementById('photographers');
            let photographerArticles = document.createElement('article');

            photographerArticles.className = photographe.tags.join(' ') + ' articlePhotographer';

            let templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}"
                    title="${photographe.name}">
                <img src="../../assets/media/PortraitOfPhotographer/${photographe.portrait}" 
                        alt="${photographe.alt}">
                <h2 class = "name"> ${photographe.name} <h2>
            </a>
            <p class="location"> ${photographe.city}, ${photographe.country} </p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price"> ${photographe.price}</p>
            <ul class = "filter">${photographe.tags.map(tag => 
                `<li data-filter = "${tag}"> #${tag}</li>`
            ).join(" ")}
            </ul>
                        `
            photographerSections.appendChild(photographerArticles);
            photographerArticles.innerHTML = templatePhotographer;
        });
        new Filter().filterTags();

        new header().entete();
    }
}
