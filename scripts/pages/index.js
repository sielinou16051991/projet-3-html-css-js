import HomePage from "./home/homePage";
import Api from "../origin/Api";


(function appDispatch() {
    console.log("=====");
    console.log("INDEX");
    console.log("======");
    new Api().getData().then((data) => {
        console.log("data", data);
       new HomePage().displayPhotographers(data);
    }).catch(() => {
        console.error("ECHEC LOR DU CHARGEMENT DE DONNEES PAR L'API");
    });
    console.log("appDispach", appDispatch());
})();
