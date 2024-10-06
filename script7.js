fetch('https://raw.githubusercontent.com/laurasayuri07/Json-ecommerce/refs/heads/main/loja.json')
    .then(response => response.json())
    .then(products => {
        const productGrid = document.getElementById('produto');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">R$ ${product.price.toFixed(2)}</p>
                <button onclick="window.location.href='${product.link}'">Comprar</button>
            `;
            productGrid.appendChild(productDiv);
        });
    })
   