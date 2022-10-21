import { getStorage, ref } from "/firebase/storage/";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage, 'Prev2.png');

const teste = document.getElementById('imgTeste');
teste.appendChild(storageRef)

  //----------------------FILTRO PELA SEARCHBAR----------------------


//    let filtrar = document.getElementById('inputBuscar')

//    filtrar.addEventListener('input', () => {

//    let input = document.getElementsByClassName('form-control').value
//    input = input.toLowerCase();
//    let x = arrayBusca;

//    for (let a = 0; a <= x.length; a++) {
//      console.log(a);
//      console.log(x[a]);
//     //  if(x[a].toLowerCase().includes(input)) {
//      if(x[a].toLowerCase().indexOf(input) > -1) {
//        document.getElementById('cardVisibility').style.visibility = 'visible';
//      } else {
//        document.getElementById('cardVisibility').style.visibility = 'hidden';
//      }
//    }
//  })


//--------------------------------------------


// inputBuscar.addEventListener("input", (evento) => {
//   let value = evento.target.value;

//   if (value && value.trim().length > 0){

//      value = value.trim().toLowerCase()
//     // 4. return the results only if the value of the search is included in the person's name
//     // we need to write code (a function for filtering through our data to include the search input value)

// } else {
//     return
// }
// }

// function setList(results){

//   for (const person of results){
//       // creating a li element for each result item
//       const resultItem = document.createElement('li')

//       // adding a class to each item of the results
//       resultItem.classList.add('result-item')

//       // grabbing the name of the current point of the loop and adding the name as the list item's text
//       const text = document.createTextNode(person.name)

//       // appending the text to the result item
//       resultItem.appendChild(text)

//       // appending the result item to the list
//       list.appendChild(resultItem)
//   }
// }


//--------------------------------------------


// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }


//--------------------------------------------


// let buscar = document.getElementById('inputBuscar')

// buscar.addEventListener('input', () => {

// //  function searchBar(item){
//   let collection = arrayBusca;
//   for (i = 0 ; i < collection.length ; i++){
//       if (collection[i].toLowerCase().indexOf(item) > -1) {
//           collection[i].style.display = "inline-flex";
//           } else {
//               collection[i].style.display = "none";
//               }
//   }
//  }



// })


//--------------------------------------------


// const filtro = document.getElementById("inputBuscar")

// // let filtro = []
// let arr = []
// arr = arrayBusca

// filtro.addEventListener("input", evento => {
//   const value = evento.target.value.toLowerCase()
//    arr.foreach(d => {
//     // arrayBusca.forEach(d => {
//       const visibilidade = 
//       d.descricao.toLowerCase().includes(value)
//       d.element.classList.toggle("hide", !visibilidade)
//   })
// })