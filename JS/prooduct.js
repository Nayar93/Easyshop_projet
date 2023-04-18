let params = new URLSearchParams(document.location.search);
let id = params.get("id");
(console.log(id));
async function displayProduct(){
    const response = await
    fetch('http://localhost:3000/api/products/'+id)
    
    const achat = await response.json()
    
    .then(function (achat) {
    (console.log(achat));
    
    document.querySelector( ".item__img" ).innerHTML +=
    `<img src="${achat.imageUrl}" alt="${achat.altTxt}">`;

    document.getElementById( "title" ).innerHTML +=
    `${achat.name}`;

    document.getElementById( "price" ).innerHTML +=
    `${achat.price}`;

    document.getElementById( "description" ).innerHTML +=
    `${achat.description}`;

    for( color of achat.colors ){
        document.getElementById( "colors" ).innerHTML +=
    `<option value="${color}">${color}</option>`;
    };


    })

    .catch(error => console.error(error));
};
displayProduct()

function getValue(){

    var button = document.getElementById("addToCart").value;

  const color = document.getElementById("colors").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  console.log(id, color, price, quantity);

  const arrayKanap = [id, color, quantity, price];
  console.table(arrayKanap);


//   arrayKanap = localStorage.getItem("arrayKanap");
//   if(arraykanap === null){
//   }else{
//   }

console.log(localStorage);


};
getValue();