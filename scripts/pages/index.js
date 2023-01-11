import Api from "../origin/Api.js";
import homePage from "./home/homePage.js";
import phProfile from "./photographers/phProfile.js"

(function appDispatch() {
    console.log("=====");
    console.log("INDEX");
    console.log("======");
    new Api().getData().then((data) => {
        console.log("data+++++++++", data);
        if(window.location.pathname.includes("/photographerPage.html")){
            new phProfile().photographerProfil(data);
        } else {
            new homePage().displayPhotographers(data);
        }
    });
})();