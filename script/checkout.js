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