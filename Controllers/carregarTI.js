//RECUPERA ENTRADAS DO FIREBASE (GET)
import { getWikiTI } from '../Models/prevenirWiki.js'

const dataCard = document.getElementById('data');

let arrayBusca = [];

//CRIA CARDS DINAMICAMENTE
async function loadData() {
  let i = 0;
  const data = await getWikiTI()

  dataCard.innerHTML = data.map(d => `
    <div class="card border-primary mb-3 fb-item" id="cardVisibility" style="max-width: 20rem;">
    <div class="card-header">${d.setor}</div>
    <div class="card-body">
      <h4 class="card-title">${d.descricao}</h4>
      <button type="button" class="btn btn-lg btn-primary" id="carregar-card${i++}">Carregar</button>
      <p hidden class="card-text">${d.conteudo}</p>
    </div>
  </div>
   `,
  ).join('')



  //FILTRA OS CARDS PELA DESCRIÇÃO E MOSTRA APENAS OS RELEVANTES (AINDA EM IMPLANTAÇÃO)
  arrayBusca = data.map(desc => desc.descricao)
  console.log(arrayBusca);


  const filtro = document.getElementById("inputBuscar")

  filtro.addEventListener("input", evento => {
    const value = evento.target.value.toLowerCase()

    arrayBusca.forEach(desc => {
      if (desc.toLowerCase().includes(value)) {
        document.getElementById('cardVisibility').style.display = "inline-flex"
      } else {
        document.getElementById('cardVisibility').style.display = "none"
      }

    })
  })


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