// Script pour la page panier
const cart = [];
const numberOfItems = localStorage.length;
for (let i = 0; i < numberOfItems; i++) {
  const item = localStorage.getItem(localStorage.key(i));
  const itemObject = JSON.parse(item);
  cart.push(itemObject);
}

// Afficher les articles du panier
cart.forEach((item) => {
  displayItem(item);
});

// Création des éléments HTML
function displayItem(item) {
  const article = document.createElement("article");
  article.classList.add("cart__item");
  article.dataset.id = item.id;
  article.dataset.color = item.color;
  const cart__items = document.querySelector("#cart__items");
  cart__items.appendChild(article);
  const ItemImg = document.createElement("div");
  ItemImg.classList.add("cart__item__img");
  article.appendChild(ItemImg);
  const image = document.createElement("img");
  image.src = item.imageUrl;
  image.alt = item.altTxt;
  ItemImg.appendChild(image);
  const ItemContent = document.createElement("div");
  ItemContent.classList.add("cart__item__content");
  article.appendChild(ItemContent);
  const description = document.createElement("div");
  description.classList.add("cart__item__content__description");
  ItemContent.appendChild(description);
  const name = document.createElement("h2");
  name.textContent = item.name;
  description.appendChild(name);
  const color = document.createElement("p");
  color.textContent = item.color;
  description.appendChild(color);
  let price = document.createElement("p");
  fetch(`http://localhost:3000/api/products/${item.id}`)
    .then((reponse) => reponse.json())
    .then((item) => {
      price.textContent = item.price + " €";
      description.appendChild(price);
    });
  const settings = document.createElement("div");
  settings.classList.add("cart__item__content__settings");
  ItemContent.appendChild(settings);
  const quantity = document.createElement("div");
  quantity.classList.add("cart__item__content__settings__quantity");
  settings.appendChild(quantity);
  const quantityp = document.createElement("p");
  quantityp.textContent = "Qté :";
  quantity.appendChild(quantityp);
  const quantityinput = document.createElement("input");
  quantityinput.type = "number";
  quantityinput.classList.add("itemQuantity");
  quantityinput.name = "itemQuantity";
  quantityinput.min = "1";
  quantityinput.max = "100";
  quantityinput.value = item.quantity;
  quantityinput.addEventListener("input", (e) =>
    updatePriceAndQuantity(item.id + "_" + item.color, quantityinput.value)
  );

  // Supprimer un article du panier
  quantity.appendChild(quantityinput);
  const settingsdelete = document.createElement("div");
  settingsdelete.classList.add("cart__item__content__settings__delete");
  settingsdelete.addEventListener("click", (e) => {
    if (confirm("Voulez-vous vraiment supprimer cet article du panier ?"))
      localStorage.removeItem(item.id + "_" + item.color);
    article.remove();
    location.reload();
  });
  settings.appendChild(settingsdelete);
  const deleteItem = document.createElement("p");
  deleteItem.classList.add("deleteItem");
  deleteItem.textContent = "Supprimer";
  settingsdelete.appendChild(deleteItem);
}

// Afficher la quantité total
displayTotalQuantity();
function displayTotalQuantity() {
  const totalQuantity = document.querySelector("#totalQuantity");
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);
  totalQuantity.textContent = total;
}

// Afficher le prix total
displayTotalPrice();
function displayTotalPrice() {
  const totalPrice = document.querySelector("#totalPrice");
  calculerPrixTotal(cart).then((e) => (totalPrice.textContent = e));
}

async function calculerPrixTotal(panier) {
  let prixTotal = 0;

  for (const item of panier) {
    const response = await fetch(
      `http://localhost:3000/api/products/${item.id}`
    );
    const data = await response.json();
    const prixProduit = data.price;
    prixTotal += prixProduit * item.quantity;
  }

  return prixTotal;
}

// Enregistrer la nouvelle quantité
function saveNewQuantity() {
  localStorage.clear();
  cart.forEach((item) => {
    localStorage.setItem(item.id + "_" + item.color, JSON.stringify(item));
  });
}

// Mettre à jour le prix et la quantité
function updatePriceAndQuantity(id, newvalue, item) {
  const itemToUpdate = cart.find((item) => item.id + "_" + item.color === id);
  itemToUpdate.quantity = Number(newvalue);
  displayTotalQuantity();
  displayTotalPrice();
  saveNewQuantity(item);
}

// Regex pour vérifier l'adresse email
let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

// Envoyer la commande
const orderButton = document.querySelector("#order");
orderButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Votre panier est vide");
    return;
  }
  const firstName = document.querySelector("#firstName");
  if (firstName.value.length < 2) {
    document.querySelector("#firstNameErrorMsg").textContent =
      "Veuillez entrer votre prénom";
    return false;
  }
  const lastName = document.querySelector("#lastName");
  if (lastName.value.length < 2) {
    document.querySelector("#lastNameErrorMsg").textContent =
      "Veuillez entrer votre nom";
    return false;
  }
  const address = document.querySelector("#address");
  if (address.value.length < 5) {
    document.querySelector("#addressErrorMsg").textContent =
      "Veuillez entrer votre adresse";
    return false;
  }
  const city = document.querySelector("#city");
  if (city.value.length < 2) {
    document.querySelector("#cityErrorMsg").textContent =
      "Veuillez entrer votre ville";
    return false;
  }
  const email = document.querySelector("#email");
  if (!regex.test(email.value)) {
    document.querySelector("#emailErrorMsg").textContent =
      "Veuillez entrer votre email";
    return false;
  }
  const form = document.querySelector(".cart__order__form");
  const contact = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    address: form.address.value,
    city: form.city.value,
    email: form.email.value,
  };
  const products = cart.map((item) => item.id);
  const order = { contact, products };
  const options = {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Récupérer l'ID de la commande
  fetch("http://localhost:3000/api/products/order", options)
    .then((response) => response.json())
    .then((data) => {
      localStorage.clear();
      localStorage.setItem("orderId", data.orderId);
      window.location.href = "confirmation.html";
    });
});
