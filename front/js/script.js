fetch('http://localhost:3000/api/products')
.then(reponse => reponse.json())
.then ((data) => produit(data))

function produit(data) {
    //console.log(data)
    const imageUrl = data[0].imageUrl
    //console.log("url de l'image", imageUrl)
    const anchor = document.createElement("a")
    anchor.href = imageUrl
    anchor.text = "test"
    const items = document.querySelector("#items")
    items.appendChild(anchor) 
    //console.log("nous")
}
