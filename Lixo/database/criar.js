//Cria entradas no Firebase (POST)

import {postWikiTI, postWikiDP, postWikiMKT, postWikiFNC} from './prevenirWiki.js'


const setorItem = document.getElementById('cardSetor')
const descricaoItem = document.getElementById('cardDescricao')
const conteudoItem = document.getElementById('cardConteudo')

const btnCriar = document.getElementById('btnCriar')

//ANTIGO CODIGO QUE SO DA POST EM 1 COLEÇÃO
// btnCriar.addEventListener('click', async () => {
//     const cadastro = {
//         setor: setorItem.value,
//         descricao: descricaoItem.value,
//         conteudo: conteudoItem.value
//     }
  
//     const cadastroId = await postWiki(cadastro)
//     console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
  
//     setorItem.value = ''
//     descricaoItem.value = ''
  
//     alert(`WikiCard cadastrado com sucesso`);

//   })

//NOVO CODIGO QUE DA POST EM TODAS AS COLEÇÕES (VER DEPOIS COMO AUTOMATIZAR INVÉS DE REPETIR O CODIGO)
  btnCriar.addEventListener('click', async () => {
    const cadastro = {
        setor: setorItem.value,
        descricao: descricaoItem.value,
        conteudo: conteudoItem.value
    }
  
if (cadastro.setor == 'TI') {
    const cadastroId = await postWikiTI(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
} else if (cadastro.setor == 'Departamento Pessoal') {
    const cadastroId = await postWikiDP(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
} else if (cadastro.setor == 'Marketing') {
    const cadastroId = await postWikiMKT(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
} else if (cadastro.setor == 'Financeiro') {
    const cadastroId = await postWikiFNC(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
}

  
    setorItem.value = ''
    descricaoItem.value = ''
    conteudoItem.value = ''
  
    alert(`WikiCard cadastrado com sucesso`);

  })