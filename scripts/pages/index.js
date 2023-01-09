import Api from "../origin/Api.js";
import homePage from "./home/homePage.js";

(function appDispatch() {
    console.log("=====");
    console.log("INDEX");
    console.log("======");
    new Api().getData().then((data) => {
        console.log("data", data);
       new homePage().displayPhotographers(data);
    });
})();