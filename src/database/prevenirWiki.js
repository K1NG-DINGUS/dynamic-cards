//Gerencia POST e GET no Firebase
import app from './app.js'


import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'


//CODIGO ANTIGO DE TESTE
// export async function postWiki(cadastro) {
//     const db = getFirestore(app) 
//     const testeCollection = collection(db, 'teste')
//     const docReference = await addDoc(testeCollection, cadastro)
//     return docReference.id
// }

export async function postWikiTI(cadastro) {
    const db = getFirestore(app) 
    const testeCollection = collection(db, 'TI')
    const docReference = await addDoc(testeCollection, cadastro)
    return docReference.id
}

export async function postWikiDP(cadastro) {
    const db = getFirestore(app) 
    const testeCollection = collection(db, 'DP')
    const docReference = await addDoc(testeCollection, cadastro)
    return docReference.id
}

export async function postWikiMKT(cadastro) {
    const db = getFirestore(app) 
    const testeCollection = collection(db, 'MKT')
    const docReference = await addDoc(testeCollection, cadastro)
    return docReference.id
}

export async function postWikiFNC(cadastro) {
    const db = getFirestore(app) 
    const testeCollection = collection(db, 'FNC')
    const docReference = await addDoc(testeCollection, cadastro)
    return docReference.id
}

//CODIGO ANTIGO DE TESTE
// export async function getWiki() {
//     const db = getFirestore(app)
//     const testeCollection = collection(db, 'teste')
//     const testeCollectionSnapshot = await getDocs(testeCollection);
//     const dados = testeCollectionSnapshot.docs.map(doc => doc.data());
//     return dados;
// }

export async function getWikiTI() {
    const db = getFirestore(app)
    const testeCollection = collection(db, 'TI')
    const testeCollectionSnapshot = await getDocs(testeCollection);
    const dados = testeCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}

export async function getWikiDP() {
    const db = getFirestore(app)
    const testeCollection = collection(db, 'DP')
    const testeCollectionSnapshot = await getDocs(testeCollection);
    const dados = testeCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}

export async function getWikiMKT() {
    const db = getFirestore(app)
    const testeCollection = collection(db, 'MKT')
    const testeCollectionSnapshot = await getDocs(testeCollection);
    const dados = testeCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}

export async function getWikiFNC() {
    const db = getFirestore(app)
    const testeCollection = collection(db, 'FNC')
    const testeCollectionSnapshot = await getDocs(testeCollection);
    const dados = testeCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}