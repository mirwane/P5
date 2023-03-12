const orderId = localStorage.getItem("orderId");
const orderIdSpan = document.getElementById("orderId");
orderIdSpan.innerHTML = orderId;
localStorage.clear();
