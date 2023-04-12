let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id)
fetch('http://localhost:3000/api/products/'+id) 


    .then(res => res.json())
    
    .then(function (achat) {
    console.log(achat);
    
    document.querySelector( ".item__img" ).innerHTML +=
    `<img src="${achat.imageUrl}" alt="${achat.altTxt}">`;

    document.getElementById( "title" ).innerHTML +=
    `${achat.name}`;

    document.getElementById( "price" ).innerHTML +=
    `${achat.price}`;

    document.getElementById( "description" ).innerHTML +=
    `${achat.description}`;
    })
    .catch(console.log("error"));
