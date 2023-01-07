// export default class Filter {
//     filterTags() {
//         console.log("=====FILTER======");
//         let filters = document.querySelector('ul');
//         let articles = document.querySelector('.articlePhotographer');

//         filters.addEventListener('click', event => {
//             let classValue = event.target.classList.value;

//             if (classValue.indexOf('actived') === -1){
//                 event.target.classList.add('actived')
//             } else {
//                 event.target.classList.remove('actived')
//             }

//             this.sortDomArticle(articles);
//         });
//     }

//     // fonction qui recupere tous les filtres ayant la classe 'actived' et les plassent dans un tableau 'filterSelected'
//     getActiveFilters() {
//         let currentFilters = document.querySelectorAll('ul li.actived');
//         let filterSelected = [];

//         currentFilters.forEach((currentFilter) => {
//             filterSelected.push(currentFilter.getAttribute("data-filter"));
//         });

//         return filterSelected;
//     }

//     // verifie si le 'filtre' a la meme valeur que la valeur 'article'
//     filterArticleCompare(article) {
//         let filters = this.getActiveFilters();
//         let ValueOfClass = article.classList.value;
//         let classes = ValueOfClass.split(' ');
//         let intersection = filters.filter(
//             x => classes.includes(x)
//         );

//         return filters.length === intersection.length;
//     }

//     // afficher ou masquer l'article
//     sortDomArticle(articles){
//         articles.forEach((article) => {
//             if (this.filterArticleCompare(article)){
//                 article.style.display = 'block';
//             } else {
//                 article.style.display = 'none';
//             }
//         })
//     }
// }
