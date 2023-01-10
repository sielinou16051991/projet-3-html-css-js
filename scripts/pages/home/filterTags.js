 export default class Filter {
     filterTags() {
         console.log("=====FILTER======");
         let filters = document.querySelector('ul');
         let articles = document.querySelectorAll('.articlePhotographer');
         let classValue = [] ;
         console.log("***TABLEAU DES DIFFERENTES CLASSES DE LA BALISE ARTICLE CHARGé****===>", articles);
         filters.addEventListener('click', event => {
            /*
            classValue = event.target.dataset.filter;
            console.log("event", event);
            if (){

            } else {

            }
*/
            
             let classValue = event.target.classList.value;
             console.log("event", event);
                console.log("**--class de l'evenement--**", classValue.indexOf('actived'));
                console.log("*******************classValue", classValue);
             if (classValue.indexOf('actived') === -1){
                 event.target.classList.add('actived');
                 console.log("event.target.classList", event.target.classList);
             } else {
                 event.target.classList.remove('actived');
             }

                this.sortDomArticle(articles);
         });
        }

     // fonction qui recupere tous les filtres ayant la classe 'actived'
     // (tous les li.actived qui sont dans ul) et les plassent dans un tableau 'filterSelected'
     getActiveFilters() {
                 // var items = ["item1", "item2", "item3"]
         //     var copie = [];

         //     items.forEach(function(item){
         //     copie.push(item);
         //     });
         //     console.log("copie-------", copie);
         let currentFilters = document.querySelectorAll('ul li.actived');
         let filterSelected = [];

         currentFilters.forEach((currentFilter) => {
             filterSelected.push(currentFilter.getAttribute("data-filter"));
         });

         return filterSelected;
     }

     // verifie si le 'filtre' a la meme valeur que la valeur 'article'
     filterArticleCompare(article) {
         let filters = this.getActiveFilters();
         let ValueOfClass = article.classList.value;
         //console.log("###value of class##", ValueOfClass);
         let classes = ValueOfClass.split(' ');
         //console.log("###class###", classes);
         let intersection = filters.filter(
             x => classes.includes(x)
         );

         return filters.length === intersection.length;
     }

     // la fonction ci-dessous doit: 
     // prend un tableau d'article, et pour chaque article, 
     // afficher l'article s'il a la meme valeur que le filtre, ou le masquer si non
         sortDomArticle(articles){
             console.log("TABLEAU D'articles PASSé EN PARAMETRE POUR LE TRI", articles);
             articles.forEach((article) => {
             console.log("***chercher un article dans le tableau pour l'afficher ou le cacher s'il est active ou non ***", article);
                 if (this.filterArticleCompare(article)){
                     article.style.display = 'block'
                 } else {
                     article.style.display = 'none'
                 }
             });
         }
 }
