//RECUPERA ENTRADAS DO FIREBASE (GET)
import { getWikiMKT } from '../Models/prevenirWiki.js'

const dataCard = document.getElementById('data');

//CRIA CARDS DINAMICAMENTE
async function loadData() {
  let i = 0;
  const data = await getWikiMKT()

  dataCard.innerHTML = data.map(d => `
    <div class="card border-primary mb-3 fb-item" style="max-width: 20rem;">
    <div class="card-header">${d.setor}</div>
    <div class="card-body">
      <h4 class="card-title">${d.descricao}</h4>
      <button type="button" class="btn btn-lg btn-primary" id="carregar-card${i++}">Carregar</button>
      <p hidden class="card-text">${d.conteudo}</p>
    </div>
  </div>
   `,
  ).join('')


  //OCULTA OS CARDS E MOSTRA A INFORMAÇÃO SELECIONADA
  for (let i = 0; i <= data.length; i++) {
    let btnCarregar = document.getElementById(`carregar-card${i}`)

    btnCarregar.addEventListener('click', () => {

      dataCard.innerHTML = data[i].conteudo;

      dataCard.style.backgroundImage = "none";

      document.body.appendChild(dataCard);

    })
  }
}

document.onload = loadData();