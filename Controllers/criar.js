//CRI ENTRADAS NO FIREBASE (POST)

import {postWikiTI, postWikiDP, postWikiMKT, postWikiFNC} from '../Models/prevenirWiki.js'


const setorItem = document.getElementById('cardSetor')
const descricaoItem = document.getElementById('cardDescricao')
const conteudoItem = document.getElementById('cardConteudo')

const btnCriar = document.getElementById('btnCriar')


//NOVO CODIGO QUE DA POST EM TODAS AS COLEÇÕES (VER DEPOIS COMO AUTOMATIZAR INVÉS DE REPETIR O CODIGO)
  btnCriar.addEventListener('click', async () => {
    const cadastro = {
        setor: setorItem.value,
        descricao: descricaoItem.value,
        conteudo: conteudoItem.value
    }

//MELHORAR POSTERIORMENTE ? TRY CATCH ?
if (cadastro.setor == 'TI' && cadastro.descricao != "" && cadastro.conteudo != "") {
    const cadastroId = await postWikiTI(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
    alert(`WikiCard cadastrado com sucesso`);
    setorItem.value = ''
    descricaoItem.value = ''
    conteudoItem.value = ''
} else if (cadastro.setor == 'Departamento Pessoal' && cadastro.descricao != "" && cadastro.conteudo != "") {
    const cadastroId = await postWikiDP(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
    alert(`WikiCard cadastrado com sucesso`);
    setorItem.value = ''
    descricaoItem.value = ''
    conteudoItem.value = ''
} else if (cadastro.setor == 'Marketing' && cadastro.descricao != "" && cadastro.conteudo != "") {
    const cadastroId = await postWikiMKT(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
    alert(`WikiCard cadastrado com sucesso`);
    setorItem.value = ''
    descricaoItem.value = ''
    conteudoItem.value = ''
} else if (cadastro.setor == 'Financeiro' && cadastro.descricao != "" && cadastro.conteudo != "") {
    const cadastroId = await postWikiFNC(cadastro)
    console.log(`WikiCard cadastrado com sucesso ${cadastroId}`)
    alert(`WikiCard cadastrado com sucesso`);
    setorItem.value = ''
    descricaoItem.value = ''
    conteudoItem.value = ''
} else alert(`Os dados informados estão incorretos e/ou incompletos \n...\nWikiCard não cadastrado\n`)

  })