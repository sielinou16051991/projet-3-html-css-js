export default class Api {

    async getData() {

        console.log("=====");
        console.log("===API===");
        console.log("=====");
        
        // let base_url = '../data/db.json';
        let base_url = 'C:\Users\SIELINOU\Desktop\FORMATION\FORMATION_FRONTEND\projet-3-html-css-js\data\db.json';
        let res = await fetch(base_url);
        let data = await res.json();
        console.log("-----data-----", data);

        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];

        console.log("===API FIN===");
        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        }
    }
}
