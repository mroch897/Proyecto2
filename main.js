const PRODUCTS=[
    {
        image:
        "https://www.thenextsole.com/storage/images/CQ8639-600.png",
        name:'Nike Pegasus 37',
        description:"Ideales para correr....",
        category:'Asfalto',
        price:80,
        seller:"Nike"
        
    },
    {
        image:
        "https://www.thenextsole.com/storage/images/DZ4779-304.png",
        name:'Nike VaporFly Next%2',
        description:"Ideales para correr....",
        category:'Asfalto',
        price:200,
        seller:"Nike"
        
    },
    {
        image:
        "https://www.thenextsole.com/storage/images/EG0710.png",
        name:'Adidas Ultraboost 20',
        description:"Ideales para correr....",
        category:'Asfalto',
        price:100,
        seller:"Adidas"
        
    },
    {
        image:
        "https://21run.com/blog/app/uploads//2020/11/adios-pro-dots.png",
        name:'Adidas Adizero Adios Pro',
        description:"Ideales para correr....",
        category:'Asfalto',
        price:120,
        seller:"Adidas"
        
    },
    {
        image:
        "https://cdn.shopify.com/s/files/1/1804/7057/products/D9E62B76-03BD-437F-BF34-CA379AB11823_1280x587.png?v=1653046491",
        name:'ASICS Cumulus 24',
        description:"Ideales para correr....",
        category:'Asfalto',
        price:80,
        seller:"Asics"
        
    },
    {
        image:
        "https://deporticket.blob.core.windows.net/awebs/asics-trail-running-test/trabuco-11-600.png",
        name:'ASICS Trabuco 11',
        description:"Ideales para correr....",
        category:'Trail',
        price:111,
        seller:"Asics"
        
    },
    {
        image:
        "https://img.staticdj.com/2e73d9c93aa9b9655a26e3b1e0b64cf0_1080x_nw.png",
        name:'Salomon XA PRO 3D v8 GORE-TEX',
        description:"Ideales para correr....",
        category:'Trail',
        price:120,
        seller:"Salomon"
        
    },
    {
        image:
        "https://www.salomon.com/en-us/shop/media/catalog/product/L/4/L41210400_30408aea34176dd5b52f7fc7c3c73b0a.png",
        name:'Salomon Sense Ride 4 ',
        description:"Ideales para correr....",
        category:'Trail',
        price:90.5,
        seller:"Salomon"
        
    },
    {
        image:
        "https://cdn.sneakerbaron.nl/uploads/2023/02/02211715/Mens-PUMA-Evospeed-Tokyo-Future-Jump-4-Track-And-Field-Shoes-Sun-StreamSunset-GlowBlack-376999_01.png",
        name:'Puma EvoSPEED Tokyo Future Jump 4 ',
        description:"Ideales para correr....",
        category:'Clavos',
        price:120.8,
        seller:"Puma"
        
    },
    {
        image:
        "https://dms.deckers.com/hoka/image/upload/f_auto,q_auto,dpr_auto/w_1650/v1664362474/catalog/images/transparent/1123097-RYCM_1.png?_s=RAABAB0",
        name:'HOKA ONE ONE-CIELO X LD',
        description:"Ideales para correr....",
        category:'Clavos',
        price:120,
        seller:"Hoka"
        
    },
    
    

]


const printProducts=(productos)=>{
    const products$$ = document.querySelector("#products");
    products$$.innerHTML = "";
    for(let i=0; i<productos.length; i++){
        const product=productos[i];

        const div1 = document.createElement("div");
        const divimg = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h4");
        const descript=document.createElement("p");
        const cat=document.createElement("p");
        const price = document.createElement("p");
        const sell=document.createElement("p");
        
        img.src=product.image;
        name.textContent=product.name;
        descript.textContent=product.description;
        cat.textContent=product.category;
        price.textContent=product.price;
        sell.textContent=product.seller;




    }
}

console.log(PRODUCTS)


printProducts(PRODUCTS);