import Api from "../origin/Api.js";
import homePage from "./home/homePage.js";
import phProfile from "./photographers/phProfile.js";
import DifferentSort from "./photographers/DifferentSort.js";
import MediaBuilder from "./photographers/mediaBuilder.js";

(function appDispatch() {
    console.log("=====");
    console.log("INDEX");
    console.log("======");
    new Api().getData().then((data) => {
        console.log("data+++++++++", data);
        if(window.location.pathname.includes("/photographerPage.html")) {
           // appel du profile du photogrqphe
            new phProfile().photographerProfil(data);

            // appel des differents tris
            new DifferentSort().dropDown(data);

            // chargement des photos de la galérie du photographe choisi
            console.log("media");
            new MediaBuilder().photographersMedias(data);
            return
        } else {
            console.log("----données de la page d'accueuil----", data);
            new homePage().displayPhotographers(data);
        }
    }).catch(() => {
        console.error('ERREUR DE CHARGEMENT DE L\'API');
    });
})();