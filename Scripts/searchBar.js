// function search_animal() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('animals');
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
// }

import { getWikiTI, getWikiDP, getWikiMKT, getWikiFNC } from '../Models/prevenirWiki.js'

function searchBar () {
    let input = document.getElementsByClassName('form-control').value
    input = input.toLowerCase();
    let x = document.
}

//https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/