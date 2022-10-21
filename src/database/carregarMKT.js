//Recupera entradas do Firebase (GET)
import { getWikiMKT } from './prevenirWiki.js'

const dataCard = document.getElementById('data');

//Cria cards dinamicamente
async function loadData() {
  let i = 0;
  const data = await getWikiMKT()

  dataCard.innerHTML = data.map(d => `
    <div class="card border-primary mb-3 fb-item" style="max-width: 20rem;">
    <div class="card-header">${d.setor}</div>
    <div class="card-body">
      <h4 class="card-title">${d.descricao}</h4>
      <button type="button" class="btn btn-lg btn-primary fb-item" id="carregar-card${i++}">Carregar</button>
      <p hidden class="card-text">${d.conteudo}</p>
    </div>
  </div>
   `,
  ).join('')


  //Elimina os cards e mostra a informação da Wiki
  for (let i = 0; i <= data.length; i++) {
    let btnCarregar = document.getElementById(`carregar-card${i}`)

    btnCarregar.addEventListener('click', () => {

      dataCard.innerHTML = data[i].conteudo;

      document.body.appendChild(dataCard)

    })
  }
}

document.onload = loadData();