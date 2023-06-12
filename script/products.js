let products = [
    {
        id: 1,
        image: 'https://i.postimg.cc/HLhMzNgF/biel-morro-kc-Ki-Bc-DTJt4-unsplash.jpg',
        title: 'Rose',
        description: '"A rose is a delicate flower with velvety petals that unfold in a symmetrical pattern, showcasing its timeless elegance. Its captivating fragrance and vibrant colors make it a symbol of love, beauty, and passion."',
        button: 'add to cart',
        price: 'R 100.00',
    },
    {
        id: 2,
        title: 'Sunflower',
        image: 'https://i.postimg.cc/N09Fsf3P/jordan-cormack-79-Ruac-Ui-XUI-unsplash.jpg',
        description: '"A sunflower is a tall and majestic flower that stands proudly with its vibrant yellow petals and a dark center filled with seeds. Its large, cheerful blooms follow the movement of the sun, symbolizing positivity, happiness, and a sunny disposition."',
        button: 'add to cart',
        price: 'R 160.00',
    },
    {
        id: 3,
        image: 'https://i.postimg.cc/zDjz1gLG/serafima-lazarenko-i-Vu-WPrf-CZI-unsplash.jpg',
        title: 'Lily',
        description: '"A lily is an exquisite flower with elegant, trumpet-shaped blooms and long, slender stems. Its delicate petals, often in shades of white, pink, or orange, exude a sweet fragrance, adding a touch of grace and purity to any setting."',
        button: 'add to cart',
        price: 'R 500.00',
    },
    {
        id: 4,
        image: 'https://i.postimg.cc/tJSt0gQC/nazim-zafri-VHhn5t-XVFVk-unsplash.jpg',
        title: 'Jasmine',
        description: '"Jasmine is a fragrant flower with small, delicate white blossoms that release a sweet and intoxicating scent, especially in the evening. Its vining nature allows it to gracefully climb and adorn trellises, walls, and fences, creating a romantic and enchanting atmosphere wherever it blooms."',
        button: 'add to cart',
        price: 'R 70.00',
    },
    {
        id: 5,
        image: 'https://i.postimg.cc/9X4p6GgG/micheile-henderson-ROs-Xqv-Rzhi-Q-unsplash.jpg',
        title: 'Daisy',
        description: '"A daisy is a simple and charming flower with a sunny yellow center surrounded by delicate white petals. Its cheerful and unassuming nature makes it a symbol of innocence, purity, and the beauty found in simplicity."',
        button: 'add to cart',
        price: 'R 150.00',
    },
    {
        id: 6,
        image: 'https://i.postimg.cc/fLq14t0k/tulip.jpg',
        title: 'Tulip',
        description: '"A tulip is a graceful flower with smooth, upright stems and vibrant, cup-shaped blooms that come in a variety of colors, including red, yellow, pink, and purple. Its elegant form and striking colors make it a symbol of spring, renewal, and beauty."',
        button: 'add to cart',
        price: 'R 200.00',
    },
    {
        id: 7,
        image: 'https://i.postimg.cc/0N84bdYb/dahlia.jpg',
        title: 'Dahlia',
        description: '"A dahlia is a stunning flower with intricate, layered petals that form a beautiful and symmetrical bloom. Available in a wide range of colors and sizes, dahlias showcase a remarkable diversity, bringing vibrancy and elegance to gardens and floral arrangements alike."',
        button: 'add to cart',
        price: 'R 140.00',
    },
    {
        id: 8,
        image: 'https://i.postimg.cc/P5SFMdFy/earl-wilcox-o1240roc-II-unsplash.jpg',
        title: 'Orchid',
        description: '"An orchid is an exquisite flower with intricate, delicate blooms that often display vibrant colors and intriguing patterns. Its elegant and exotic appearance, combined with its reputation as a symbol of luxury and refinement, makes the orchid a captivating and sought-after addition to any floral collection or display."',
        button: 'add to cart',
        price: 'R 200.00',
    },
    {
        id: 9,
        image: 'https://i.postimg.cc/ydjJDrND/annie-spratt-Pgx-HC2p-XFUc-unsplash.jpg',
        title: 'Snowberries',
        description: '"Snowberries are small, round berries that grow in clusters and are known for their distinctive white color. These berries create a striking contrast against their dark green foliage, adding a touch of winter charm to gardens and landscapes."',
        button: 'add to cart',
        price: 'R 200.00',
    },
    {
        id: 10,
        image: 'https://i.postimg.cc/QN5vYtdN/lavendar.jpg',
        title: 'Lavender',
        description: '"Lavender is a fragrant herb with slender, silver-green foliage and clusters of small, aromatic purple flowers that adorn its stems. Its soothing scent and calming properties have made it a popular choice for aromatherapy, as well as a delightful addition to gardens, attracting bees and butterflies with its beauty."',
        button: 'add to cart',
        price: 'R 412.00',
    },
    {
        id: 11,
        image: 'https://i.postimg.cc/x17xJtZT/richard-burlton-l-VR-Hh-H-Qek-unsplash.jpg',
        title: 'Aster',
        description: '"Aster is a dainty flower with vibrant petals that come in shades of purple, pink, blue, and white, resembling a small star. Its delicate yet resilient nature and late-season blooming make it a beloved addition to gardens, providing a burst of color and attracting pollinators as the summer comes to a close."',
        button: 'add to cart',
        price: 'R 12.00', 
    },
    {
        id: 12,
        image: 'https://i.postimg.cc/qM4DmxFQ/marigold.jpg',
        title: 'Marigold',
        description: '"Marigolds are cheerful and vibrant flowers with golden, orange, and yellow petals that resemble rays of sunshine. Their compact size and resilience make them a popular choice for borders and containers, adding a burst of color and a touch of warmth to any garden or landscape."',
        button: 'add to cart',
        price: 'R 240.00',
    },
    {
        id: 13,
        image: 'https://i.postimg.cc/zf6N0CPx/aj-Mcs-Nra2-VRQQ-unsplash.jpg',
        title: 'Cherry Blossom',
        description: '"Cherry blossoms are delicate and ethereal flowers that grace the branches of cherry trees, creating a breathtaking sight. Their soft pink or white petals, blooming en masse, symbolize the arrival of spring and evoke a sense of beauty, transience, and renewal."',
        button: 'add to cart',
        price: 'R 1050.00',
    },
    {
        id: 14,
        image: 'https://i.postimg.cc/bN7QcWSP/katrin-hauf-r-VCJf-t-ASn4-unsplash.jpg',
        title: 'Bellflower',
        description: '"Bellflowers, also known as Campanula, are charming and bell-shaped flowers that come in various shades of blue, purple, pink, and white. Their graceful, drooping blooms and slender stems add an elegant touch to gardens and floral arrangements, enchanting with their whimsical beauty."',
        button: 'add to cart',
        price: 'R 130.00',
    },
    {
        id: 15,
        image: 'https://i.postimg.cc/RZ37G3vX/dandelion.jpg',
        title: 'Dandelion',
        description: '"A dandelion is a resilient and tenacious weed with bright yellow flowers that transform into fluffy seed heads known as "blowballs." These blowballs disperse in the wind, carrying the dandelions seeds far and wide, making it a symbol of resilience, wishes, and childhood memories of blowing the seeds and making a wish."',
        button: 'add to cart',
        price: 'R 550.00',
    },
    {
        id: 16,
        image: 'https://i.postimg.cc/Dwykdj5r/rob-pumphrey-QHWFAlp3idg-unsplash.jpg',
        title: 'Myosotis',
        description: '"Myosotis, commonly known as forget-me-not, is a delicate and charming flower with tiny, five-petaled blooms in shades of blue, pink, or white. Its dainty appearance and the distinctive yellow or white center create a lovely contrast, while its name evokes sentiments of remembrance, loyalty, and enduring love."',
        button: 'add to cart',
        price: 'R 2200.00',
    },
    {
        id: 17,
        image: 'https://i.postimg.cc/xC9brqSr/pansy.jpg',
        title: 'Pansy',
        description: '"Pansies are delightful flowers with velvety petals that come in a wide array of vibrant colors, including shades of purple, yellow, orange, and white. Their distinct "faces" with contrasting hues and delicate patterns add a touch of whimsy and cheerfulness to gardens and floral displays, making them a beloved symbol of free-spiritedness and joy."',
        button: 'add to cart',
        price: 'R 100.00',
    },
    {
        id: 18,
        image: 'https://i.postimg.cc/DwqZ2F67/strawflower.jpg',
        title: 'Strawflower',
        description: '"Strawflowers are unique flowers with papery petals that retain their vibrant colors even after they have been picked and dried. Their petals, which can be shades of yellow, orange, pink, or red, give them a straw-like appearance, adding an intriguing texture and durability to bouquets and crafts."',
        button: 'add to cart',
        price: 'R 50.00',
    }
]

let divProducts = document.querySelector('#products');
products.forEach((data)=> {
    divProducts.innerHTML += `
    <div class ="col-4 ">
    <div class="card">
        <h5 class="display-5">${data.title}</h5>
        <div class="text-black">
           <img src="${data.image}" alt="image" loading="lazy" class="img-fluid" id="img">
        </div>
        <div class="card-body">
            <div class="text-black bod">
            <p id="price">
                ${data.price} 
            </p>
            <p id="text">
                ${data.description} 
            </p>
            </div>
            <div class="knob">
            <button id="btn">${data.button}</button>
            </div>
        </div>
    </div>
    </div>
    `
})

