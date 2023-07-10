const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

const paintingsArray = [];
const actionFiguresArray = [];
function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type === 'Paintings') {
      paintingsArray.push(productsArray[i]);
    } else if (productsArray[i].type === 'Action Figures') {
      actionFiguresArray.push(productsArray[i]);
    }
  } return paintingsArray, actionFiguresArray
}
separateItems(productsArray);

function cardPaintings(paintingsArray) {
  const ul = document.querySelector(".card_paintings");
  
for(let i = 0; i < paintingsArray.length; i++) {
  const prod = paintingsArray[i];

  const li = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const names = document.createElement("p");
  const prices = document.createElement("span");

  img.src = prod.image
  names.innerText = prod.name
  prices.innerText = prod.price
  
  div.append(names, prices)
  li.append(img, div)
  ul.append(li)
}

}

cardPaintings(paintingsArray);

function cardActionfigures(actionFiguresArray) {
  const ulAf = document.querySelector(".card_actionfigures");
  
for(let i = 0; i < actionFiguresArray.length; i++) {
  const prodAf = actionFiguresArray[i];

  const liAf = document.createElement("li");
  const imgAf = document.createElement("img");
  const divAf = document.createElement("div");
  const namesAf = document.createElement("p");
  const pricesAf = document.createElement("span");

  imgAf.src = prodAf.image
  namesAf.innerText = prodAf.name
  pricesAf.innerText = prodAf.price
  
  divAf.append(namesAf, pricesAf)
  liAf.append(imgAf, divAf)
  ulAf.append(liAf)
}

}

cardActionfigures(actionFiguresArray);