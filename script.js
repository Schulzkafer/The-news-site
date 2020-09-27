'use strict';
let buttonCreateArticle = document.querySelector('.entrar');

let articleContainer = document.querySelector('.articleContainer');


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

let senhaInput = document.querySelector('#senha-input');

let entrarNaConta = document.querySelector('#entrar-na-conta');
entrarNaConta.addEventListener('click', handler)

let createArticle; 

function handler () {
  if (nameInput.value == '' || senhaInput.value == '') return;
  document.querySelector('.bemvindo-window').firstElementChild.remove();
  document.querySelector('.bemvindo-window').insertAdjacentHTML('beforeend', `<p>Bemvindo,<br>${nameInput.value}!</p>`); 
  if (nameInput.value == 'admin' && senhaInput.value == 'admin') {
    Array.from(document.querySelectorAll('.exitButton-special-article')).map(x=>x.style.visibility = 'visible')
    document.querySelector('.bubble-window').insertAdjacentHTML('afterbegin', '<div id="Criar-novo-artigo">Criar novo artigo</div>');
    createArticle = document.querySelector('#Criar-novo-artigo');
    createArticle.onclick = function () {
      articleCreator.style.visibility = "visible";
    }
  } else {
   if (createArticle) {
    createArticle.remove();
    createArticle = '';
  }
  Array.from(document.querySelectorAll('.exitButton-special-article')).map(x=>x.style.visibility = 'hidden')
}
nameInput.value = '';
senhaInput.value = '';
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



let carregarArtigo = document.querySelector('#carregar-artigo');
let inputNAME = document.querySelector('#inputNAME');
let inputSector = document.querySelector('#inputSECTOR');
let inputIMG = document.querySelector('#inputIMG');
let textArea = document.querySelector('textarea');

class Article {
 constructor (sectorNav, nameofArticle, image, textArea) {
  this.sectorNav = sectorNav.slice(0,1).toUpperCase() + sectorNav.slice(1).toLowerCase();
  this.nameofArticle = nameofArticle;
  this.image = image || 'https://i.ytimg.com/vi/u1g7oNGw-Xs/hqdefault.jpg;';
  this.textArea = textArea;
}
putInMain() {
  this.article = document.createElement('article');
  this.article.classList = 'article';
  this.article.innerHTML = `<div class="exitButton exitButton-special-article" style="visibility:visible"><div class="cross"></div></div><div class="toCenter"><a href="#"><img src="${this.image}" alt="${this.sectorNav}"></a><a href="#" class="type-of-dance">${this.sectorNav}</a><a href="#" class="name-of-article"><h2>${this.nameofArticle}</h2></a></div>`;
  articleContainer.prepend(this.article);
  baseArticles.push(this.article);

  this.article.addEventListener('click', ()=>makeRealArticle(event.target.closest('.exitButton-special-article') ,this.article, this.nameofArticle, this.textArea));
  remover ();
}
}

carregarArtigo.onclick = function () {
 let stop = false;
 if (inputSector.value.toLowerCase() !== "samba" && inputSector.value.toLowerCase() !== "rumba" && inputSector.value.toLowerCase() !== "bachata" && inputSector.value.toLowerCase() !== "outro")  {
   document.querySelectorAll('.campo-obrigatorio')[0].style.visibility = 'visible';
   stop = true;
 }
 if (!inputNAME.value)  {
   document.querySelectorAll('.campo-obrigatorio')[1].style.visibility = 'visible';
 }
 if (!inputNAME.value || stop) return;

 let firstArticle = new Article(inputSector.value, inputNAME.value, inputIMG.value, textArea.value);
 firstArticle.putInMain();
 firstArticle.onclick = makeTestArticle;
 inputSector.value = '';
 inputNAME.value = '';
 inputIMG.value = '';
 textArea.value = '';
 stop = false;
 document.querySelectorAll('.campo-obrigatorio')[0].style.visibility = 'hidden';
 document.querySelectorAll('.campo-obrigatorio')[1].style.visibility = 'hidden';
 articleCreator.style.visibility = "hidden";
}

let articleCreator = document.querySelector('.article-container');


function remover () {
  let exitButtons = document.querySelectorAll('.exitButton-special-article');
  for (let elem of exitButtons) {
    elem.onclick = function () {
      let articleForDelete =  this.closest('.article');
      document.querySelector('.confirmWindow').style.visibility = 'visible';
      document.querySelector('.confirmWindow div div:first-child').onclick = function () {
        articleForDelete.remove();
        for (let i = 0; i < baseArticles.length; i++) {
          if (baseArticles[i].id == articleForDelete.id) {
            baseArticles.splice(i, 1);
            break;
          }
        }
        document.querySelector('.confirmWindow').style.visibility = 'hidden';
        return;
      }
      document.querySelector('.confirmWindow div div:last-child').onclick = function () {
        document.querySelector('.confirmWindow').style.visibility = 'hidden';
        return;
      }
    }

  }
}
remover ();


function removerForCreator () {
  document.querySelectorAll('.campo-obrigatorio')[0].style.visibility = 'hidden';
  document.querySelectorAll('.campo-obrigatorio')[1].style.visibility = 'hidden';
  articleCreator.style.visibility = "hidden";
}

let remButton = document.querySelector('.exitButton-special-articleContainer');
remButton.addEventListener('click', removerForCreator)




function makeTestArticle () {
  for (let elem of document.querySelectorAll('article')) {
    elem.onclick = function (goal) {
      if (goal.target.closest('.exitButton-special-article')) return;
      let forInput = '';
      if (elem.id == 'testArticleBachata') {
        forInput = '<h1>Bachata</h1><p>A Bachata (pronuncia-se "Batcháta") é um ritmo musical e uma dança originada da República Dominicana na década de 1960. Considera-se um híbrido do bolero (sobre tudo, o bolero rítmico) com outras influências musicais como por exemplo o chá-chá-chá e o tango.</p>'
      } else if (elem.id == 'testArticleSalsa') {
        forInput = '<h1>Salsa</h1><p>Posicione-se reto com os pés juntos. Seus ombros devem ficar retos e enquadrados, mas soltos. Deixe os braços levemente inclinados, mas também relaxados. A salsa é uma dança divertida, e você deve se sentir confortável na hora de dançar.</p>';
      } else if (elem.id == 'testArticleFestival') {
        forInput = `<h1>Festival</h1><pre>BAHIA
        Camaçari
        Festival de Dança Ballace | www.ballace.com.br
        Itabuna 
        Dança Costa do Cacau | festivaldcc@yahoo.com.br</pre>`;
      } else if (elem.id == 'testArticleJazz') {
        forInput = '<h1>Jazz</h1><p>A vinda de Louis Armstrong ao Brasil, em novembro de 1957, ficou marcada na vida do Rio, então capital federal. O GLOBO acompanhou de perto os passos do trompetista, saxofonista e cantor desde a sua chegada no dia 25, com a quarta mulher, Lucille, informando toda a repleta agenda, que incluía apresentações no Teatro Municipal, no Country Club, no Maracanãzinho e na Embaixada dos Estados Unidos. Mas o ponto alto da visita do músico americano foi um encontro com a nata da MPB e o presidente Juscelino Kubitschek. Antes do desembarque no Rio, o trompetista havia passado por São Paulo, vindo de turnê em Montevidéu.</p>'
      }
      let nwin = window.open('about:blank');
      nwin.document.body.insertAdjacentHTML('afterbegin', forInput);
      nwin.document.body.style.backgroundColor = "#E0FFFF";
      nwin.document.body.style.margin = "20px";
      nwin.document.body.style.outline =  '2px solid #000';
      nwin.document.body.style.padding =  '5px';
    }
  }
}
makeTestArticle ();

function makeRealArticle (goal,real, name, text) {
  if (goal) return;
  let nwin = window.open('about:blank');
  nwin.document.body.insertAdjacentHTML('afterbegin', `<pre>${text}</pre>`);
  nwin.document.body.style.backgroundColor = "#E0FFFF";
  nwin.document.body.style.margin = "20px";
  nwin.document.body.style.outline =  '2px solid #000';
  nwin.document.body.style.padding =  '5px';
}

let sectors= Array.from(document.querySelectorAll('nav a'));
sectors.map(x=> x.addEventListener('click', sorting));


let baseArticles = Array.from(document.querySelectorAll('article'));

function sorting (goal) {
  goal = goal.target.innerHTML;
  if (goal == 'Todos') {
   for (let elem of baseArticles) {
    document.querySelector('.articleContainer').append(elem)
  }
  return;
}
let allArticles = Array.from(document.querySelectorAll('.type-of-dance'));
allArticles.map(x=>x.closest('article').remove())

for (let elem of baseArticles) {
 if (elem.children[1].children[1].innerHTML == goal) {
  document.querySelector('.articleContainer').append(elem)
}
}
}