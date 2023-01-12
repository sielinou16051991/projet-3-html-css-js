export default class phProfile {
    photographerProfil (data){
        console.log("photographerProfil ++++++++++");
        let photographersData = data.photographers;
        const id = window.location.search.split('id=')[1];
        const photographers = !id ? photographersData : photographersData.filter(photographerId => photographerId.id == id);
        let phProphileId = document.getElementById('ph-prophile-header');
        const templatePhProphileId = `
                <article class="ph-profil" aria-label="le profil du photographe">
                    <div class='ph-infos'>
                        <h2>${photographers[0].name}</h2>
                        <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                        <p class="ph-tagline">${photographers[0].tagline}</p>
                        <p >${photographers[0].tags.map(tag => `<a class="ph-tags" href="index.html">#${tag}</a>`).join(" ")}</p>
                    </div>
                    <button class="ph-contact" title="contactez-moi">Contactez-moi</button>
                    <a href="#" class="ph-image"><img src="${photographers[0].portrait}"></a>
                </article>
        `
        phProphileId.innerHTML= templatePhProphileId;
    }
}