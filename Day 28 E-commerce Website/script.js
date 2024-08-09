const products = [
    {
        name: "Apple iPhone 12",
        price: 799.99,
        description: "The latest iPhone with A14 Bionic chip.",
        imageUrl: "https://www.khoslaonline.com/wp-content/uploads/2023/07/IPHONE-12-BLUE-128GB.png"
    },
    {
        name: "Samsung Galaxy S21",
        price: 699.99,
        description: "The latest Samsung phone with Exynos 2100.",
        imageUrl: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672425/Croma%20Assets/Communication/Mobiles/Images/300445_0_c2ehra.png?tr=w-600"
    },
    {
        name: "Google Pixel 5",
        price: 599.99,
        description: "Google's flagship phone with pure Android.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeHMNMYfpV2tR_n8VoACAUoP_vNP3Tt6vMg&s"
    },
    {
        name: "Sony WH-1000XM4",
        price: 349.99,
        description: "Industry-leading noise-cancelling headphones.",
        imageUrl: "https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

displayProducts();

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    const cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
}

updateCartCount();
