fetch('http://localhost:3000/api/products') 


    .then(response => response.json())
    
    .then(function (info) {
    console.log(info);
    for (let i = 0; i < info.length; i++){ 
        let article = (document.getElementById( "items" ).innerHTML +=
        `<a href="./product.html?id=${info[i]._id}">
        <article>
          <img src="${info[i].imageUrl}">
          <h3 class="productName">${info[i].name}</h3>
          <p>${info[i].price}</p>
          <p class="productDescription">${info[i].description}</p>
        </article>
        </a>`
        );}
    })
    .catch(console.log("error"));
    