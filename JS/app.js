fetch('http://localhost:3000/api/products')

.thena(response)

.then(data)
for(let data = 0; i < data.length; i++)
document.querySelector(".cart__items")
` <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
<div class="cart__item__img">
  <img src="${data[i].imageUrl}" alt="Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${data[i].name}</h2>
    <p>${data[i].color}</p>
    <p>${data[i].price}</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p></p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">${data[i].pop}</p>
    </div>
  </div>
</div>
</article>
<a href="./product.html?id=${info[i]._id}">
        <article>
          <img src="${info[i].imageUrl}">
          <h3 class="productName">${info[i].name}</h3>
          <p>${info[i].price}</p>
          <p class="productDescription">${info[i].description}</p>
        </article>
        </a>`

.catch(console.log(err))