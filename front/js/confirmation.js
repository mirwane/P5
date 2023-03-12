// Récupération de l'orderId
const orderId = localStorage.getItem("orderId");
const orderIdSpan = document.getElementById("orderId");
orderIdSpan.innerHTML = orderId;
// Vider le localStorage
localStorage.clear();
