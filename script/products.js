let products = [
    {
        id: 1,
        image: 'https://i.postimg.cc/gkp68WVj/Screenshot-2023-06-09-152916.png',
        title: 'AirsPops Pro',
        description: 'The Airscream Pro or AirPops / AirPops Pro is the perfect device for every palate, blending simple, aesthetic design with peak practical performance. AirsPops Pro delivers a velvety-smooth experience from start to finish, by capturing every detail of the authentic flavours and bringing them forth.',
    },
    {
        id: 2,
        title: 'AirsPops Pro - Nardo Grey',
        image: 'https://i.postimg.cc/XN2Ns6FQ/Screenshot-2023-06-09-152928.png',
        description: 'The Airscream Pro or AirPops / AirPops Pro is the perfect device for every palate, blending simple, aesthetic design with peak practical performance. AirsPops Pro delivers a velvety-smooth experience from start to finish, by capturing every detail of the authentic flavours and bringing them forth. The device is just in a different colour.',
    },
    {
        id: 3,
        image: 'https://i.postimg.cc/Y0Xsw3km/Screenshot-2023-06-09-152940.png',
        title: 'AirsPops Pro Cartridge',
        description: 'A 2ml refillable cartridge that connects magnetically to the AirsPops Pro or AirEgg device. Each pack comes with two (2) cartridges.',
    },
    {
        id: 4,
        image: 'https://i.postimg.cc/YSZX89RQ/Screenshot-2023-06-09-153005.png',
        title: 'bottle. by AirsPops Vape Kit',
        description: 'bottle. by AirsPops is an all-ready vape pod, with an adjustable airflow system that provides a good fit for both direct to lung and mouth to lung vaping preferences.',
    },
    {
        id: 5,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 6,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 7,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 8,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 9,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 10,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 11,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 12,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 13,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 14,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    },
    {
        id: 15,
        image: 'https://i.postimg.cc/dVn8C99f/Screenshot-2023-05-26-145340.png',
        title: 'BMI calculator',
        description: 'This is a task we had to do in relation to understand how javscript works.',
    }
]

let divProducts = document.querySelector('#products');
products.forEach((data)=> {
    divProducts.innerHTML += `
    <div class="card">
        <h5 class="display-5">${data.title}</h5>
        <div class="card-body">
            <p class="text-black">
               <img src="${data.image}" alt="image" loading="lazy" class="img-fluid">
            </p>
            <p class="text-black">
                ${data.description} 
            </p>
        </div>
    </div>
    `
})