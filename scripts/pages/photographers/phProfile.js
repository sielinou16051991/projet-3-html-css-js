export default class phProfile {
    photographerProfil (data){
        console.log("photographerProfil ++++++++++");
        let photographersData = data.photographers;
        const id = window.location.search.split('id=')[1];
        const photographers = !id ? photographersData : photographersData.filter(photographerId => photographerId.id == id);
        let phProphileId = document.getElementById('ph-prophile-header');
        const templatePhProphileId = `
                <article aria-label="le profil du photographe" class="ph-profil">
                    <div class='ph-infos'>
                        <h2>${photographers[0].name}</h2>
                        <p class="ph-city>${photographers[0].city}, ${photographers[0].country}</p>
                    </div>
                </article>
        `
        phProphileId.innerHTML= templatePhProphileId;
    }
}