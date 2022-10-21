//Recupera entradas do Firebase (GET)

import {getWiki} from './prevenirWiki.js'


const dataCard = document.getElementById('data');

//Cria cards dinamicamente
async function loadData() {
   const data = await getWiki()

   dataCard.innerHTML = data.map(d => `
   <div class="card border-primary mb-3 fb-item" style="max-width: 20rem;">
   <div class="card-header">${d.titulo}</div>
   <div class="card-body">
     <h4 class="card-title">${d.descricao}</h4>
     <button type="button" class="btn btn-lg btn-primary fb-item" id="carregar-card">Carregar</button>
   </div>
 </div>
  `,
  console.log(data),
  ).join('')

//Elimina os cards e mostra a informação da Wiki
  const btnCarregar = document.getElementById('carregar-card')

   btnCarregar.addEventListener('click', () => {

       dataCard.innerHTML = data.map(function(descr) { 
         return `${descr.conteudo}`;
        })

      document.body.appendChild(dataCard)
})

}

document.onload = loadData();