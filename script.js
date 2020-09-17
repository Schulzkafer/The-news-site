'use strict';
// let buttonCreateArticle = document.querySelector('.entrar');

let articleContainer = document.querySelector('.articleContainer');

class Article {
  constructor (sectorNav, nameofArticle, image) {
this.sectorNav = sectorNav;
this.nameofArticle = nameofArticle;
this.image = image || 'https://i.ytimg.com/vi/u1g7oNGw-Xs/hqdefault.jpg;';
  }
  putInMain() {
   let article = `<article class="article"><div class="toCenter"><a href="#"><img src="${this.image}"></a><a href="#" class="type-of-dance">${this.sectorNav}</a><a href="#" class="name-of-article"><h2>${this.nameofArticle}</h2></a></div></article>`;
  
   articleContainer.insertAdjacentHTML('beforeend', article)
  }
}




//buttonCreateArticle.onclick = function () {
  // let firstArticle = new Article('Rumba', 'Historia da rumba no Brasil');
  // firstArticle.putInMain();
//}
let modalWindow = document.querySelector('.modal-window');
let buttonEnter = document.querySelector('.entrar');

let entranceWindow = document.querySelector('.entrance-window'); 
buttonEnter.onclick = function() {
  modalWindow.style.visibility = "visible";
  entranceWindow.style.visibility = "visible";
 
}
 modalWindow.onclick = function() {
  modalWindow.style.visibility = "hidden";
  entranceWindow.style.visibility = "hidden";
 }
 
let nameInput = document.querySelector('#name-input');
// nameInput.addEventListener('keydown', handlerNameInput);
// function handlerNameInput (event) {
//   if (event.key == 'Enter') {
//     nameInput.value='';
//   }
// }

let senhaInput = document.querySelector('#senha-input');
// senhaInput.addEventListener('keydown', handlerSenhaInput);
// function handlerSenhaInput (event) {
//   if (event.key == 'Enter') {
//     senhaInput.value='';
//   }
// }

 let entrarNaConta = document.querySelector('#entrar-na-conta');
entrarNaConta.addEventListener('click', handler)

function handler () {
document.querySelector('.bemvindo-window').firstElementChild.remove();
  document.querySelector('.bemvindo-window').insertAdjacentHTML('beforeend', `<p>Bemvindo,<br>${nameInput.value}!</p>`); 
  nameInput.value='';
   senhaInput.value='';
  modalWindow.style.visibility = "hidden";
  entranceWindow.style.visibility = "hidden";
}

let bubbleWindow = document.querySelector('.container-for-bubble-window');
let menu = document.querySelector('.menu');

document.body.onclick = function (evt) {
  if (evt.target.closest('.menu')) {
    if (bubbleWindow.style.visibility == "visible") {
      bubbleWindow.style.visibility = 'hidden';
  } else {
    bubbleWindow.style.visibility = "visible";
  }
  } else {
  if (!evt.target.closest('.container-for-bubble-window') && bubbleWindow.style.visibility == "visible" && !evt.target.closest('.menu')) bubbleWindow.style.visibility = 'hidden';
}
}

let createArticle = document.querySelector('#Criar-novo-artigo');