let result = document.querySelector("#cartItems");
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
          <td><button id="del" onclick="deleteButtons()">Delete</button></td>
        </tr>
        </tbody>
        `
    })
}

function deleteButtons(){
  dButton = [...document.querySelectorAll('#del')];
  dButton.forEach((item)=>{
      item.addEventListener('click', deleteProduct)
      localStorage.setItem('checkoutStorage', JSON.stringify(checkoutStorage));
})
}

function deleteProduct(event){
  result.innerHTML= ""
  dButton = [...document.querySelectorAll('#del')];
  let start = dButton.indexOf(event.target);
  flowers.splice(start, 1);
  localStorage.setItem('checkoutStorage', JSON.stringify(checkoutStorage));
  displayProducts()
}

deleteButtons()
checkoutDisplay()