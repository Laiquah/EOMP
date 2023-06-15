let checkoutFlowers = JSON.parse(localStorage.getItem('checkoutStorage'))
console.log(checkoutFlowers);
let newFlower = document.querySelector('#cartItems')

function checkoutDisplay() {
    checkoutFlowers.forEach((item) => {
        newFlower.innerHTML += `
        <tbody id="admin">
        <tr>
          <td id="newTitle">${item.title}</td>
          <td id="newImage"><img src="${item.image}" alt="logo" loading="lazy"></td>
          <td id="newDesc">${item.description}</td>
          <td id="newPrice">${item.price}</td>
        </tr>
        </tbody>
        `
    })

}

checkoutDisplay()
   


// var cart = [];

// function addToCart(id, title, image, description, price) {
//   var item = {
//     id: id,
//     title: title,
//     image: image,
//     description: description,
//     price: price,
//   };

//     cart.push(item);
//     updateCart();
// }

// function updateCart() {
//   var cartItemsElement = document.querySelector("#cartItems");
//   cartItemsElement.innerHTML = "";

//     for (var i = 0; i < cart.length; i++) {
//     var item = cart[i];

//     var li = document.createElement("li");

//     li.innerHTML = item.id + item.title + item.image + item.description + item.price;

//     cartItemsElement.appendChild(li);
//   }
// }
