 export default class Filter {
     filterTags() {
         console.log("=====FILTER======");
         let filters = document.querySelector('ul');
         let articles = document.querySelector('.articlePhotographer');

         let array = [];
         filters.addEventListener('click', event => {
            console.log("**evenement**", event);
             let classValue = event.target.classList.value;
                console.log("**--class de l'evenement--**", classValue.indexOf('actived'));
             if (classValue.indexOf('actived') === -1){
                 event.target.value;
                 console.log("actived======>", event.target.value);

                 array.push(event.target.value);
                 console.log("array======>", array);
             } else {
                 event.target.classList.remove('actived');
             }

             this.sortDomArticle(articles);
         });
        }

     // fonction qui recupere tous les filtres ayant la classe 'actived' et les plassent dans un tableau 'filterSelected'
     getActiveFilters() {
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
         let classes = ValueOfClass.split(' ');
         let intersection = filters.filter(
             x => classes.includes(x)
         );

         return filters.length == intersection.length;
     }

     // la fonction ci-dessous doit: 
     // prendre un tableau d'article, et pour chaque article, 
     // afficher l'article s'il a la meme valeur que le filtre, ou le masquer si non
     sortDomArticle(articles){
        // var items = ["item1", "item2", "item3"]
        //     var copie = [];

        //     items.forEach(function(item){
        //     copie.push(item);
        //     });
        //     console.log("copie-------", copie);
            console.log("articles", articles);
         articles.forEach(function(article){
            console.log("***forEash**ARTICLE**in sortDomArticle()**", article);
             if (this.filterArticleCompare(article)){
                article.style.display = 'block';
             } else {
                article.style.display = 'none';
             }
         });
     }
 }
