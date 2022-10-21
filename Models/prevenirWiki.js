//Gerencia POST e GET no Firebase
import app from './app.js'


import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'


export async function postWikiTI(cadastro) {
    const db = getFirestore(app) 
    const prevwikiCollection = collection(db, 'TI')
    const docReference = await addDoc(prevwikiCollection, cadastro)
    return docReference.id
}

export async function postWikiDP(cadastro) {
    const db = getFirestore(app) 
    const prevwikiCollection = collection(db, 'DP')
    const docReference = await addDoc(prevwikiCollection, cadastro)
    return docReference.id
}

export async function postWikiMKT(cadastro) {
    const db = getFirestore(app) 
    const prevwikiCollection = collection(db, 'MKT')
    const docReference = await addDoc(prevwikiCollection, cadastro)
    return docReference.id
}

export async function postWikiFNC(cadastro) {
    const db = getFirestore(app) 
    const prevwikiCollection = collection(db, 'FNC')
    const docReference = await addDoc(prevwikiCollection, cadastro)
    return docReference.id
}


export async function getWikiTI() {
    const db = getFirestore(app)
    const prevwikiCollection = collection(db, 'TI')
    const prevwikiCollectionSnapshot = await getDocs(prevwikiCollection);
    const dados = prevwikiCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}

export async function getWikiDP() {
    const db = getFirestore(app)
    const prevwikiCollection = collection(db, 'DP')
    const prevwikiCollectionSnapshot = await getDocs(prevwikiCollection);
    const dados = prevwikiCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}

export async function getWikiMKT() {
    const db = getFirestore(app)
    const prevwikiCollection = collection(db, 'MKT')
    const prevwikiCollectionSnapshot = await getDocs(prevwikiCollection);
    const dados = prevwikiCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}

export async function getWikiFNC() {
    const db = getFirestore(app)
    const prevwikiCollection = collection(db, 'FNC')
    const prevwikiCollectionSnapshot = await getDocs(prevwikiCollection);
    const dados = prevwikiCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}