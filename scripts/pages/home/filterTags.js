 export default class Filter {
    // cette fonction stock la premiere balise ul dans une variable puis,
    // charge tous les articles qui ont pour class "articlePhotographer" dans un tableau et écoute les éléments de la balise ul
    // 
     filterTags() {
        // console.log("=====FILTER======");
         let filters = document.querySelector('ul');
         let articles = document.querySelectorAll('.articlePhotographer');
         console.log("***TABLEAU DES DIFFERENTES CLASSES DE LA BALISE ARTICLE CHARGé****===>", articles);
         filters.addEventListener('click', event => {
        //    console.log("event", event);
             let classValue = event.target.classList.value;
        //        console.log("**--class de l'evenement--**", classValue.indexOf('actived'));
        //        console.log("*******************classValue", classValue);
             if (classValue.indexOf('actived') === -1){
                 event.target.classList.add('actived');

            //     console.log("document.querySelectorAll('ul li.actived')", document.querySelectorAll('ul li.actived'));
            //     console.log("event.target.classList", event.target.classList);

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
            //document.querySelector('ul li.actived').style.opacity = 0.5;
             filterSelected.push(currentFilter.getAttribute("data-filter"));
        //     console.log("currentFilter.getAttribute", currentFilter.getAttribute("data-filter"));
         });

        // console.log("filterSelected",filterSelected);
         return filterSelected;
     }

     // verifie si le 'filtre' a la meme valeur que la valeur 'article'
     filterArticleCompare(article) {
         let filters = this.getActiveFilters();
         let ValueOfClass = article.classList.value;
        // console.log("###value of class##", ValueOfClass);
         let classes = ValueOfClass.split(' ');
         //console.log("###class###", classes);
         let intersection = filters.filter(
             x => classes.includes(x)
         );
        
        // console.log("intersection", intersection);

         return filters.length === intersection.length;
     }

     // la fonction ci-dessous doit: 
     // prend un tableau d'article, et pour chaque article, 
     // afficher l'article s'il a la meme valeur que le filtre, ou le masquer si non
         sortDomArticle(articles){
            // console.log("TABLEAU D'articles PASSé EN PARAMETRE POUR LE TRI", articles);
             articles.forEach((article) => {
            // console.log("***chercher un article dans le tableau pour l'afficher ou le cacher s'il est active ou non ***", article);
                 if (this.filterArticleCompare(article)){
                     article.style.display = 'block'
                    // article.style.opacity = 1
                 } else {
                     article.style.display = 'none'
                    // article.style.opacity = 0.1
                 }
             });
         }
 }
