import Api from "../origin/Api.js";
import homePage from "./home/homePage.js";
import phProfile from "./photographers/phProfile.js";
import DifferentSort from "./photographers/DifferentSort.js";

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
            return
        } else {
            new homePage().displayPhotographers(data);
        }
    });
})();