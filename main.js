const PRODUCTS = [
  {
    image: "https://www.thenextsole.com/storage/images/CQ8639-600.png",
    name: "Nike Pegasus 37",
    description:
      "Zapatillas deportivas con amortiguación suave y transpirables para mayor comodidad durante la actividad física.",
    category: "Asfalto",
    price: 80,
    seller: "Nike",
  },
  {
    image: "https://www.thenextsole.com/storage/images/DZ4779-304.png",
    name: "Nike VaporFly Next%2",
    description:
      "Zapatillas de running de alto rendimiento con tecnología de placa de carbono para una mayor eficiencia en la carrera",
    category: "Asfalto",
    price: 200,
    seller: "Nike",
  },
  {
    image: "https://www.thenextsole.com/storage/images/EG0710.png",
    name: "Adidas Ultraboost 20",
    description:
      "Zapatillas de running con una suela elástica que proporciona un gran retorno de energía en cada paso.",
    category: "Asfalto",
    price: 100,
    seller: "Adidas",
  },
  {
    image: "https://www.thenextsole.com/storage/images/,,GX6646.png",
    name: "Adidas Adizero Adios 7",
    description:
      "Zapatillas de running con una suela elástica que proporciona un gran retorno de energía en cada paso.",
    category: "Asfalto",
    price: 120,
    seller: "Adidas",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/1804/7057/products/D9E62B76-03BD-437F-BF34-CA379AB11823_1280x587.png?v=1653046491",
    name: "ASICS Cumulus 24",
    description:
      "Zapatillas de running con una suela elástica que proporciona un gran retorno de energía en cada paso.",
    category: "Asfalto",
    price: 80,
    seller: "Asics",
  },
  {
    image:
      "https://deporticket.blob.core.windows.net/awebs/asics-trail-running-test/trabuco-11-600.png",
    name: "ASICS Trabuco 11",
    description:
      "Zapatillas de trail running con una gran amortiguación y una suela con un excelente agarre en terrenos variados.",
    category: "Trail",
    price: 111,
    seller: "Asics",
  },
  {
    image:
      "https://img.staticdj.com/2e73d9c93aa9b9655a26e3b1e0b64cf0_1080x_nw.png",
    name: "Salomon XA PRO 3D v8 GORE-TEX",
    description:
      "Zapatillas de trail running con una gran amortiguación y una suela con un excelente agarre en terrenos variados.",
    category: "Trail",
    price: 120,
    seller: "Salomon",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0751/7203/products/fasfrgUntitled-1_1024x1024@2x.png?v=1634167628",
    name: "Salomon Sense Ride 4 ",
    description:
      "Zapatillas de trail running con una gran amortiguación y una suela con un excelente agarre en terrenos variados..",
    category: "Trail",
    price: 90.5,
    seller: "Salomon",
  },
  {
    image:
      "https://cdn.sneakerbaron.nl/uploads/2023/02/02211715/Mens-PUMA-Evospeed-Tokyo-Future-Jump-4-Track-And-Field-Shoes-Sun-StreamSunset-GlowBlack-376999_01.png",
    name: "Puma EvoSPEED Tokyo Future Jump 4 ",
    description:
      "Zapatillas de trail running con una suela duradera y una membrana GORE-TEX para una protección óptima en condiciones climáticas adversas.",
    category: "Clavos",
    price: 120.8,
    seller: "Puma",
  },
  {
    image:
      "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/w_1650/v1664362474/catalog/images/transparent/1123097-RYCM_1.png?_s=RAABAB0",
    name: "HOKA ONE ONE-CIELO X LD",
    description:
      "Zapatillas de running con una gran amortiguación y una suela ancha para una mayor estabilidad y comodidad durante la carrera.",
    category: "Clavos",
    price: 120,
    seller: "Hoka",
  },
];

const products$$ = document.querySelector("#products");
const optionsSelect = document.querySelector("#sellerSelect");
const priceValue = document.querySelector(".search_number");

const getProducts = (pr) => {
  return `
  
  <div class="div_product">
     <div class="img_wrap">
        <img src=${pr.image} alt=${pr.name} class="img_product">
        <div class="text_kind">${pr.category}</div>
      </div>
      <div class="title_name">
        <h4 title=${pr.name}>${pr.name}</h4>
      </div> 
      <p class="descript_product">${pr.description}</p>
      <p class="price">${pr.price} €</p>
      <p class="seller">${pr.seller}</p>
  </div>`;
};

// PRINTING PRODUCT
const printProducts = (PRODUCTS) => {
  products$$.innerHTML = " ";

  for (pr of PRODUCTS) {
    products$$.innerHTML += getProducts(pr);
  }
};

// SEARCH ALL PRODUCT
const searchProduct = (event) => {
  console.log(event.target.value);

  handlePriceAndSeller();
  filterProductsBySellerAndPrice(optionsSelect.value, priceValue.value);
  

  const productsFilter = PRODUCTS.filter((producto) =>
    producto.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
  console.log(productsFilter);

  printProducts(productsFilter);
};

// SELECT PRODUCT BY SELLER
const addOptionsSelect = () => {

const selectAll = document.createElement("option");
selectAll.innerText = "Todos";
optionsSelect.appendChild(selectAll);
  const addedBrands = new Set();
  PRODUCTS.forEach((product) => addedBrands.add(product.seller));
  addedBrands.forEach((brand) => {
    const select = document.createElement("option");
    select.innerText = brand;
    optionsSelect.appendChild(select);
  });
};

const filterProductsBySeller = (seller) => {
let filteredProducts;

if(seller==="Todos"){
  filteredProducts= PRODUCTS;
}else{
  filteredProducts = PRODUCTS.filter(
    (product) => product.seller === seller
  );

}
  printProducts(filteredProducts);
};

const filterProductsBySellerAndPrice = (seller, maxPrice) => {
  let filteredProducts1;

  if (seller === "Todos") {
    filteredProducts1 = PRODUCTS.filter((product) => product.price <= maxPrice);
  } else {
    filteredProducts1 = PRODUCTS.filter(
      (product) => product.seller === seller && product.price <= maxPrice
    );
  }

  if (filteredProducts1.length === 0) {
    products$$.innerHTML = `
    <article>
        <h3>No hay ningún producto con estos filtros</h3>
   </article>
    `;
  } else {
    printProducts(filteredProducts1);
  }
};

const handlePriceAndSeller = () => {
  const selectedSeller = optionsSelect.value;
  const maxPrice = priceValue.value;

  if (!maxPrice) {
    filterProductsBySeller(selectedSeller);
  } else {
    filterProductsBySellerAndPrice(selectedSeller, maxPrice);
  }
};

const selectionOption = () => {
  const options = document.querySelectorAll("#sellerSelect").value;
  console.log(options);
};


const filterProductsByPrice = (PRODUCTS, maxPrice) => {
  const filteredProducts = PRODUCTS.filter(
    (producto) => producto.price <= maxPrice
  );
  if (filteredProducts.length === 0) {
    products$$.innerHTML = `
    <article>
        <h3>No hay ningún producto con este precio</h3>
   </article>
    `;
  } else {
    printProducts(filteredProducts);
  }
};

// FILTER PRODUCT BY PRICE

const handlePriceClick = () => {
  const priceValue = document.querySelector(".search_number");
  const maxPrice = priceValue.value;

  filterProductsByPrice(PRODUCTS, maxPrice);
};





//RESET FILTERS
const resetAllFilters = () => {
  products$$.innerHTML = "";

  printProducts(PRODUCTS);
  optionsSelect.value = "Todos";
  priceValue.value = "init";
  inputValue.value = "";
};

// PRICE
const searchButton = document.querySelector(".search-price");
searchButton.addEventListener("click", handlePriceClick);
searchButton.addEventListener("click", handlePriceAndSeller);

//SELLER
const selectSeller = document.querySelector("#sellerSelect");
selectSeller.addEventListener("change", handlePriceAndSeller);

//ALL
const inputValue = document.querySelector(".search_inp");
inputValue.addEventListener("input", searchProduct);

//RESET
const btnReset = document.querySelector(".resetFilters");
btnReset.addEventListener("click", resetAllFilters);

addOptionsSelect();
printProducts(PRODUCTS);








