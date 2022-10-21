//Recupera entradas do Firebase (GET)

import {getWikiTI} from './prevenirWiki.js'

let i = 0;
const dataCard = document.getElementById('data');

//Cria cards dinamicamente
async function loadData() {
   const data = await getWikiTI()

    dataCard.innerHTML = data.map(d => `
    <div class="card border-primary mb-3 fb-item" style="max-width: 20rem;">
    <div class="card-header">${d.setor}</div>
    <div class="card-body">
      <h4 class="card-title">${d.descricao}</h4>
      <button type="button" class="btn btn-lg btn-primary fb-item" id="carregar-card${i++}">Carregar</button>
    </div>
  </div>
   `,
   console.log(data),
   console.log(i)
   ).join('')

//Elimina os cards e mostra a informação da Wiki
   const btnCarregar = document.getElementById('carregar-card')

    btnCarregar.addEventListener('click', () => {

        dataCard.innerHTML = data.map(function(d) { 
          return `${d.conteudo}`;
         })

      document.body.appendChild(dataCard)
 })

}

document.onload = loadData();

// for (let i = 0; i < data.length; i++) {

//   dataCard.innerHTML = `
//   <div class="card border-primary mb-3 fb-item" style="max-width: 20rem;">
//   <div class="card-header">${data.setor}</div>
//   <div class="card-body">
//     <h4 class="card-title">${data.descricao}</h4>
//     <button type="button" class="btn btn-lg btn-primary fb-item" id="carregar-card">Carregar</button>
//   </div>
// </div>
//  `
//   console.log(i)
// }

// const btnCarregar = document.getElementById('carregar-card')

// btnCarregar.addEventListener('click', () => {

//     dataCard.innerHTML = data.map(function(d) { 
//       return `${d.conteudo}`;
//      })

//    document.body.appendChild(dataCard)
// })

