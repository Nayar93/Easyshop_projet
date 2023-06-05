var data = sessionStorage.getItem('arrayKanap');

  fetch('http://localhost:3000/api/products')



//     .then(res => res.json())
    
//     .then(function (info) {
//     console.log(info);
//     for (let i = 0; i < info.length; i++){

//   document.querySelector( ".item__img" ).innerHTML +=
//     `<img src="${achat.imageUrl}" alt="${achat.altTxt}">`;

//     document.getElementById( "title" ).innerHTML +=
//     `${achat.name}`;

//     document.getElementById( "price" ).innerHTML +=
//     `${achat.price}`;

//     document.getElementById( "description" ).innerHTML +=
//     `${achat.description}`;

//     for( color of achat.colors ){
//         document.getElementById( "colors" ).innerHTML +=
//     `<option value="${color}">${color}</option>`;
//     };}
// });
// // let params = new URLSearchParams(document.location.search);
// // let id = params.get("id");
// //         fetch('http://localhost:3000/api/products/'+id)
        
// //         .then(res => res.json())
        
// //         .then(function (achat) {
// //         (console.log(achat));
        
// //         document.getElementById( "totalPrice" ).innerHTML +=
// //     `${achat.price}`;

// //     document.getElementById( "totalQuantity" ).innerHTML +=
// //     `${achat.quantity}`;

// //     document.getElementById( "firstNameErrorMsg" ).innerHTML +=
// //     `${achat.description}`;
    
    
// //         })
    
//         .catch(error => console.error(error));

//         if (arKanap === null) {
//             let getKanap = [id, quantitys, color, prices];
//             let jsonKanap = JSON.stringify(getKanap);
//             window.localStorage.setItem ("arKanap", jsonKanap);
//         }
//         else {
//             let parseKanap = JSON.parse(arKanap);
//             parseKanap.push(id, quantitys, color, prices);
//             let jsonParseKanap = JSON.stringify(parseKanap);
//             localStorage.setItem ("arKanap", jsonParseKanap);
//         }
//         console.log(localStorage);