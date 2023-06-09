let result = document.querySelector("#tableRow");
let addBtn = document.querySelector("#addbtn");
let tempName = document.querySelector("#exampleInputName");
let tempImg = document.querySelector("#exampleInputImage");
let tempDes = document.querySelector("#exampleInputDescription");
let tempPrice = document.querySelector("#exampleInputPrice");
let flower = JSON.parse(localStorage.getItem("products"));
let tempID = 19;

let flowers = JSON.parse(localStorage.getItem("products"));
  // ? JSON.parse(localStorage.getItem("products"))
//   : localStorage.setItem(
//       "products",
//       JSON.stringify([
//         {
//           id: 1,
//           image:
//             "https://i.postimg.cc/HLhMzNgF/biel-morro-kc-Ki-Bc-DTJt4-unsplash.jpg",
//           title: "Rose",
//           description:
//             '"A rose is a delicate flower with velvety petals that unfold in a symmetrical pattern, showcasing its timeless elegance. Its captivating fragrance and vibrant colors make it a symbol of love, beauty, and passion."',
//           price: "R 100.00",
//         },
//         {
//           id: 2,
//           title: "Sunflower",
//           image:
//             "https://i.postimg.cc/N09Fsf3P/jordan-cormack-79-Ruac-Ui-XUI-unsplash.jpg",
//           description:
//             '"A sunflower is a tall and majestic flower that stands proudly with its vibrant yellow petals and a dark center filled with seeds. Its large, cheerful blooms follow the movement of the sun, symbolizing positivity, happiness, and a sunny disposition."',
//           price: "R 160.00",
//         },
//         {
//           id: 3,
//           image:
//             "https://i.postimg.cc/zDjz1gLG/serafima-lazarenko-i-Vu-WPrf-CZI-unsplash.jpg",
//           title: "Lily",
//           description:
//             '"A lily is an exquisite flower with elegant, trumpet-shaped blooms and long, slender stems. Its delicate petals, often in shades of white, pink, or orange, exude a sweet fragrance, adding a touch of grace and purity to any setting."',
//           price: "R 500.00",
//         },
//         {
//           id: 4,
//           image:
//             "https://i.postimg.cc/tJSt0gQC/nazim-zafri-VHhn5t-XVFVk-unsplash.jpg",
//           title: "Jasmine",
//           description:
//             '"Jasmine is a fragrant flower with small, delicate white blossoms that release a sweet and intoxicating scent, especially in the evening. Its vining nature allows it to gracefully climb and adorn trellises, walls, and fences, creating a romantic and enchanting atmosphere wherever it blooms."',
//           price: "R 70.00",
//         },
//         {
//           id: 5,
//           image:
//             "https://i.postimg.cc/9X4p6GgG/micheile-henderson-ROs-Xqv-Rzhi-Q-unsplash.jpg",
//           title: "Daisy",
//           description:
//             '"A daisy is a simple and charming flower with a sunny yellow center surrounded by delicate white petals. Its cheerful and unassuming nature makes it a symbol of innocence, purity, and the beauty found in simplicity."',
//           price: "R 150.00",
//         },
//         {
//           id: 6,
//           image: "https://i.postimg.cc/fLq14t0k/tulip.jpg",
//           title: "Tulip",
//           description:
//             '"A tulip is a graceful flower with smooth, upright stems and vibrant, cup-shaped blooms that come in a variety of colors, including red, yellow, pink, and purple. Its elegant form and striking colors make it a symbol of spring, renewal, and beauty."',
//           price: "R 200.00",
//         },
//         {
//           id: 7,
//           image: "https://i.postimg.cc/0N84bdYb/dahlia.jpg",
//           title: "Dahlia",
//           description:
//             '"A dahlia is a stunning flower with intricate, layered petals that form a beautiful and symmetrical bloom. Available in a wide range of colors and sizes, dahlias showcase a remarkable diversity, bringing vibrancy and elegance to gardens and floral arrangements alike."',
//           price: "R 140.00",
//         },
//         {
//           id: 8,
//           image:
//             "https://i.postimg.cc/P5SFMdFy/earl-wilcox-o1240roc-II-unsplash.jpg",
//           title: "Orchid",
//           description:
//             '"An orchid is an exquisite flower with intricate, delicate blooms that often display vibrant colors and intriguing patterns. Its elegant and exotic appearance, combined with its reputation as a symbol of luxury and refinement, makes the orchid a captivating and sought-after addition to any floral collection or display."',
//           price: "R 200.00",
//         },
//         {
//           id: 9,
//           image:
//             "https://i.postimg.cc/ydjJDrND/annie-spratt-Pgx-HC2p-XFUc-unsplash.jpg",
//           title: "Snowberries",
//           description:
//             '"Snowberries are small, round berries that grow in clusters and are known for their distinctive white color. These berries create a striking contrast against their dark green foliage, adding a touch of winter charm to gardens and landscapes."',
//           price: "R 200.00",
//         },
//         {
//           id: 10,
//           image: "https://i.postimg.cc/QN5vYtdN/lavendar.jpg",
//           title: "Lavender",
//           description:
//             '"Lavender is a fragrant herb with slender, silver-green foliage and clusters of small, aromatic purple flowers that adorn its stems. Its soothing scent and calming properties have made it a popular choice for aromatherapy, as well as a delightful addition to gardens, attracting bees and butterflies with its beauty."',
//           price: "R 412.00",
//         },
//         {
//           id: 11,
//           image:
//             "https://i.postimg.cc/x17xJtZT/richard-burlton-l-VR-Hh-H-Qek-unsplash.jpg",
//           title: "Aster",
//           description:
//             '"Aster is a dainty flower with vibrant petals that come in shades of purple, pink, blue, and white, resembling a small star. Its delicate yet resilient nature and late-season blooming make it a beloved addition to gardens, providing a burst of color and attracting pollinators as the summer comes to a close."',
//           price: "R 12.00",
//         },
//         {
//           id: 12,
//           image: "https://i.postimg.cc/qM4DmxFQ/marigold.jpg",
//           title: "Marigold",
//           description:'"Marigolds are cheerful and vibrant flowers with golden, orange, and yellow petals that resemble rays of sunshine. Their compact size and resilience make them a popular choice for borders and containers, adding a burst of color and a touch of warmth to any garden or landscape."',
//           price: "R 240.00",
//         },
//         {
//           id: 13,
//           image: "https://i.postimg.cc/zf6N0CPx/aj-Mcs-Nra2-VRQQ-unsplash.jpg",
//           title: "Cherry Blossom",
//           description:
//             '"Cherry blossoms are delicate and ethereal flowers that grace the branches of cherry trees, creating a breathtaking sight. Their soft pink or white petals, blooming en masse, symbolize the arrival of spring and evoke a sense of beauty, transience, and renewal."',
//           price: "R 1050.00",
//         },
//         {
//           id: 14,
//           image:
//             "https://i.postimg.cc/bN7QcWSP/katrin-hauf-r-VCJf-t-ASn4-unsplash.jpg",
//           title: "Bellflower",
//           description:
//             '"Bellflowers, also known as Campanula, are charming and bell-shaped flowers that come in various shades of blue, purple, pink, and white. Their graceful, drooping blooms and slender stems add an elegant touch to gardens and floral arrangements, enchanting with their whimsical beauty."',
//           price: "R 130.00",
//         },
//         {
//           id: 15,
//           image: "https://i.postimg.cc/RZ37G3vX/dandelion.jpg",
//           title: "Dandelion",
//           description:
//             '"A dandelion is a resilient and tenacious weed with bright yellow flowers that transform into fluffy seed heads known as "blowballs." These blowballs disperse in the wind, carrying the dandelions seeds far and wide, making it a symbol of resilience, wishes, and childhood memories of blowing the seeds and making a wish."',
//           price: "R 550.00",
//         },
//         {
//           id: 16,
//           image:
//             "https://i.postimg.cc/Dwykdj5r/rob-pumphrey-QHWFAlp3idg-unsplash.jpg",
//           title: "Myosotis",
//           description:
//             '"Myosotis, commonly known as forget-me-not, is a delicate and charming flower with tiny, five-petaled blooms in shades of blue, pink, or white. Its dainty appearance and the distinctive yellow or white center create a lovely contrast, while its name evokes sentiments of remembrance, loyalty, and enduring love."',
//           price: "R 2200.00",
//         },
//         {
//           id: 17,
//           image: "https://i.postimg.cc/xC9brqSr/pansy.jpg",
//           title: "Pansy",
//           description:
//             '"Pansies are delightful flowers with velvety petals that come in a wide array of vibrant colors, including shades of purple, yellow, orange, and white. Their distinct "faces" with contrasting hues and delicate patterns add a touch of whimsy and cheerfulness to gardens and floral displays, making them a beloved symbol of free-spiritedness and joy."',
//           price: "R 100.00",
//         },
//         {
//           id: 18,
//           image: "https://i.postimg.cc/DwqZ2F67/strawflower.jpg",
//           title: "Strawflower",
//           description:
//             '"Strawflowers are unique flowers with papery petals that retain their vibrant colors even after they have been picked and dried. Their petals, which can be shades of yellow, orange, pink, or red, give them a straw-like appearance, adding an intriguing texture and durability to bouquets and crafts."',
//           price: "R 50.00",
//         },
//       ])
//     );

displayProducts();

function displayProducts() {
  Object.keys(flowers).forEach((flower) => {
    let data = flowers[flower];
    let p = document.querySelector("#tableRow");
    // console.log(data.description);
    p.innerHTML += `
      <div class="table-responsive">
      <tbody id="admin">
        <tr>
          <th scope="row" id="newId">${data.id}</th>
          <td id="newTitle">${data.title}</td>
          <td id="newImage"><img src="${
            data.image
          }" alt="logo" loading="lazy"></td>
          <td id="newDesc">${data.description}</td>
          <td id="newPrice">${data.price}</td>
          <td>
          <button type="button" class="btn" data-bs-toggle="modal" id="edit" data-bs-target='#editModal${
            data.id
          }'>
            Edit
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id='editModal${
            data.id
          }' tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="editModalLabel">Edit your product</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">ID:</label>
                  <input type="ID" class="form-control" id="ID${
                    data.id
                  }" aria-describedby="emailHelp" value="${data.id}">
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Product name:</label>
                  <input type="Product" class="form-control" id="Name${
                    data.id
                  }" aria-describedby="emailHelp" value="${data.title}">
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Image URL:</label>
                  <input type="text" class="form-control" id="image${
                    data.id
                  }" aria-describedby="emailHelp" value="${data.image}">
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Description:</label>
                  <textarea class="form-control" id="description${data.id}">${
      data.description
    }</textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Price:</label>
                  <input type="Price" class="form-control" id="price${
                    data.id
                  }" aria-describedby="emailHelp" value="${data.price}">
                </div>
              </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" id="sc" class="btn btn-primary" onclick='new Editflower(${JSON.stringify(
                    data
                  )})'>Save changes</button>
                </div>
              </div>
            </div>
          </div></td>
          <td><button id="del" onclick="deleteButtons()">Delete</button></td>
        </tr>
      </tbody>
      </div>
      `;
  });
  deleteButtons()
}

// function deleteItems() {
//   const deleteButtons = [...document.querySelectorAll("#del")];
//   console.log(deleteButtons);
//   deleteButtons.forEach((dele, i) => {
//     dele.addEventListener("click", (e) => {
//       const roww = e.target.parentElement.parentElement;
//       roww.remove();
//       flowers.splice(e.target[i], 1);
//       console.log(flowers);
//       localStorage.setItem("products", JSON.stringify(flowers));
//     });
//   });
// }

function deleteButtons(){
  dButton = [...document.querySelectorAll('#del')];
  dButton.forEach((item)=>{
      item.addEventListener('click', deleteProduct)
      localStorage.setItem("products", JSON.stringify(flowers));
})
}

function deleteProduct(event){
  result.innerHTML= ""
  let start = dButton.indexOf(event.target);
  flowers.splice(start, 1);
  localStorage.setItem("products", JSON.stringify(flowers));
  displayProducts()
}

addBtn.addEventListener("click", addProduct);

function addProduct(){
  result.innerHTML = ""
  event.preventDefault();
  if(tempName.value == '', tempImg.value == '', tempDes.value == '', tempPrice.value == ''){
      alert('Please add in a new Product!')
      displayProducts();
  } else {
      
      flowers.push({
             id: tempID,
             title: tempName.value,
             image: tempImg.value,
             description: tempDes.value,
             price: tempPrice.value
      });
      tempID++
      tempName.value = '', tempImg.value = '', tempDes.value = '', tempPrice.value = '';
      localStorage.setItem("products", JSON.stringify(flowers));
      displayProducts();
  }
}

let asc = true;
function sortProduct(){
  console.log(parseInt(flowers[0].price.split(' ')[1]))
if(asc === true){
  asc = false;
  flowers= flowers.sort((a, b) => {
    if (parseInt(a.price.split(' ')[1]) < parseInt(b.price.split(' ')[1])) {
        return -1;
    } else if (parseInt(a.price.split(' ')[1]) > parseInt(b.price.split(' ')[1])) {
        return 1;
    } else {
      return 0;
    }
});
} else {
  asc = true
flowers= flowers.sort((a, b) => {
      if (parseInt(a.price.split(' ')[1]) < parseInt(b.price.split(' ')[1])) {
          return 1;
      } else if (parseInt(a.price.split(' ')[1]) > parseInt(b.price.split(' ')[1])) {
          return -1;
      } else {
        return 0;
      }
  });
}
result.innerHTML = '';
displayProducts();
}

// function addItems() {
//   console.log("I WORK");
//   let id = document.querySelector("#exampleInputID");
//   let title = document.querySelector("#exampleInputName");
//   let image = document.querySelector("#exampleInputImage");
//   let description = document.querySelector("#exampleInputDescription");
//   let price = document.querySelector("#exampleInputPrice");

//   let newPartOfArray = {
//     id: tempID,
//     title: title.value,
//     image: image.value,
//     description: description.value,
//     price: price.value,
//   };
//   tempID++
//   flowers.push(newPartOfArray);

//   let p = document.querySelector("#tableRow");

//   p.innerHTML = "";
//   displayProducts();
//   localStorage.setItem("products", JSON.stringify(flowers));
// }

// const newFlower = {
//   id: flowers.length + 1,
//   name: title,
//   description: description,
//   price: price
// };

// products.push(newFlower);
// localStorage.setItem("products", JSON.stringify(flowers));

function Editflower(data) {
  let begin = flowers.findIndex((p) => {
    location.reload();
    return p.id == data.id;
  });
  this.id = document.querySelector(`#ID${data.id}`).value;
  this.title = document.querySelector(`#Name${data.id}`).value;
  this.image = document.querySelector(`#image${data.id}`).value;
  this.description = document.querySelector(`#description${data.id}`).value;
  this.price = document.querySelector(`#price${data.id}`).value;
  flowers[begin] = Object.assign({}, this);
  localStorage.setItem("products", JSON.stringify(flowers));
  displayProducts();
}

// const newFlower =

// deleteItems();
// editItems();

// function editItems() {
//   console.log("HELLO I WORK!");
//   const saveButtons = [...document.querySelectorAll("#sc")];
//   saveButtons.forEach((save, i) => {
//     save.addEventListener("click", (e) => {
//       e.preventDefault()
// let changeId = [...document.querySelectorAll('#ID')]
// let changeName = [...document.querySelectorAll("#Name")];
// let changeImage = [...document.querySelectorAll("#image")];
// let changeDesc = [...document.querySelectorAll("#description")];
// let changePrice = [...document.querySelectorAll("#price")];
// let itemId = [...document.querySelectorAll('#newId')]
// let itemNames = [...document.querySelectorAll("#newTitle")];
// let itemDescription = [...document.querySelectorAll("#newDesc")];
// let itemPrices = [...document.querySelectorAll("#newPrice")];
// let itemImages = [...document.querySelectorAll("#newImage")];
// console.log(changeDesc[i]);
// let newId = (itemId[i].innerText = changeId[i].value);
// let newName = (itemNames[i].innerText = changeName[i].value);
// let newPrice = (itemPrices[i].innerText = changePrice[i].value);
// let newImage = itemImages[i].setAttribute("src", changeImage.value);
// console.log(data[i]);';
//       let newerContent = {
//         id:newId,
//         name: newName,
//         image: newImage,
//         desc: changeDesc[i].value,
//         price: newPrice,
//       };
//       flowers[i] = newerContent;
//       let p = document.querySelector("#tableRow");
//       // console.log(data);
//       localStorage.setItem("products", JSON.stringify(flowers));
//       p.innerHTML = "";
//       let modal = document.querySelector(".modal-backdrop");
//       modal.style.display = "none";
//       showProducts();
//   });
// })
// }
