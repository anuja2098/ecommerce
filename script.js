const products = [
  {
    id: 1,
    name: "Pillow",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/brushed-cotton-euro-sham_dusk_lightbox_cpg_15864.jpg?v=1702358746&width=533",
    price: 59.99,
  },
  {
    id: 2,
    name: "Table",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/cape-side-table_default_lightbox_cpg_0726_c023bde0-d12a-41a7-a807-0df00cd8c1f9.jpg?v=1702051811&width=533",
    price: 499.99,
  },
  {
    id: 3,
    name: "Towel",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/classic-turkish-cotton-supreme-towel-bundle_cream_lightbox_cpg_045.jpg?v=1702061705&width=533",
    price: 159.99,
  },
  {
    id: 4,
    name: "T-Shirt",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/women-s-classic-crew-sweatshirt_fawn_lightbox_cpg_5929.jpg?v=1702055827&width=533",
    price: 39.99,
  },
  {
    id: 5,
    name: "Pillow 2",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/classic-flange-pillow-cover_ecru_lightbox_cpg_744_296b812c-ed2b-4860-8148-b9066aa8bbfc.jpg?v=1702051293&width=533",
    price: 59.99,
  },
  {
    id: 6,
    name: "Pant",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/men-s-organic-cotton-jersey-pant_moss_cpg_9938_641de04f-f64c-4e8d-9b43-d90a0dbb8ea5.jpg?v=1702954781&width=533",
    price: 69.99,
  },
  {
    id: 7,
    name: "Slippers",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/shearling-wool-slides_olive_lightbox_cpg__8_3af79a9a-aee4-413b-931d-cb40e9eb5afe.jpg?v=1702050975&width=533",
    price: 199.99,
  },
  {
    id: 8,
    name: "Shoes",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/waffle-bootie_tan_lightbox_cpg_0183_94f1013d-d913-47e7-94ca-76c3cf999f48.jpg?v=1702057333&width=533",
    price: 159.99,
  },
  {
    id: 9,
    name: "Socks",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/cotton-marled-socks_flax_lightbox_cpg_5869_8f379406-ae29-4850-bfab-df7731ad974f.jpg?v=1702055475&width=533",
    price: 29.99,
  },
  {
    id: 10,
    name: "Rug",
    image_url: "https://theme-trade-demo.myshopify.com/cdn/shop/products/geo-flatweave-rug_default_lightbox_cpg_21516.jpg?v=1702058757&width=533",
    price: 89.99,
  },
];

let productInCart = [];

function getProductCart(product) {
  return `
    <div class="product-item">
    <div class="product-image">
        <img src=${product.image_url}
            alt="product-image" />
    </div>
    <div class="product-name">${product.name}</div>
    <div class="product-price">$${product.price}</div>
    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to cart</button>
</div>
    
    `;
}

function getCartCard(product) {
  return `
  <div class="mini-cart-details">
  <div class="item-image-name">
      <div class="item-image">
          <img src=${product.image_url}
              alt="">
      </div>
      <div class="item-name">
      ${product.name}</div>
  </div>
  <div class="item-price-close">
      <div class="item-price">
      $${product.price}      
      </div>
      <div class="item-close" onclick="removeItem(${product.id})">
          <i class="bi bi-trash3"></i>
      </div>
  </div>
</div>
`;
}

document.addEventListener("DOMContentLoaded", () => {
  loadProductCarts();
});

function loadProductCarts() {
  const productlist = document.querySelector(".product-list");
  let productCards = "";
  products.forEach((product) => {
    productCards += getProductCart(product);
  });
  productlist.innerHTML = productCards;
}

function showCart() {
  const miniCart = document.querySelector(".mini-cart");
  miniCart.classList.remove("is-hidden");
}

function hideCart() {
  const miniCart = document.querySelector(".mini-cart");
  miniCart.classList.add("is-hidden");
}

function removeItem(productId) {
  const cartCount = document.querySelector(".icon-cart-no");
  const count = +cartCount.innerHTML - 1;
  if (count < 0) {
    cartCount.innerHTML = 0;
  } else {
    cartCount.innerHTML = count;
  }
  removeProductFromCart(productId);
}

function removeProductFromCart(productId) {
  const miniCartProductsList = document.querySelector(".mini-cart-products-list");
  productInCart = productInCart.filter((product) => product.id !== productId);
  let cartCards = "";
  productInCart.forEach((product) => {
    cartCards += getCartCard(product);
  });
  miniCartProductsList.innerHTML = cartCards;
}

function addProductToCart(productId) {
  const miniCartProductsList = document.querySelector(".mini-cart-products-list");
  const product = products.find((product) => product.id === productId);
  productInCart.push(product);
  console.log(productInCart);
  // const cartCard = getCartCard(product);
  // miniCartProductsList.innerHTML += cartCard;

  let cartCards = "";
  productInCart.forEach((product) => {
    cartCards += getCartCard(product);
  });
  miniCartProductsList.innerHTML = cartCards;
}

function addToCart(productId) {
  const cartCount = document.querySelector(".icon-cart-no");
  cartCount.innerHTML = +cartCount.innerHTML + 1;
  addProductToCart(productId);
  showCart();
}
