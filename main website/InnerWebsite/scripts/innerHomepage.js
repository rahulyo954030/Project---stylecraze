let benefit_data = [
    {
        img : "https://www.stylecraze.com/wp-content/uploads/static-content/pr-images/positives/Anti-inflammatory.png",
        title : "Anti inflammatory",
    },
    {
        img : "https://www.stylecraze.com/wp-content/uploads/static-content/pr-images/positives/Antioxidant.png",
        title : "Antioxidant",
    },
    {
        img : "https://www.stylecraze.com/wp-content/uploads/static-content/pr-images/positives/Exfoliant.png",
        title : "Exfoliant",
    },
    {
        img : "https://www.stylecraze.com/wp-content/uploads/static-content/pr-images/positives/Moisturizing.png",
        title : "Moisturizing",
    },
    {
        img : "https://www.stylecraze.com/wp-content/uploads/static-content/pr-images/positives/Skin-Conditioning.png",
        title : "Skin Conditioning",
    },
    {
        img : "https://www.stylecraze.com/wp-content/uploads/static-content/pr-images/positives/Hair-Conditioning.png",
        title : "Hair Conditioning",
    }
];

let categories_data = [
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Skin-Care-Products.png.webp",
        title : "Skin Care Products",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Acne-products.png.webp",
        title : "Acne Products",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Moisturizers.png.webp",
        title : "Moisturizers",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Face-Packs.png.webp",
        title : "Face Packs",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Icons_Face-Washes.png.webp",
        title : "Face Washes",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Icons_Fairness-Creams.png.webp",
        title : "Fairness Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    }
];

let brands_data = [
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/brands/Patanjali.png.webp",
        p1 : "101 Products",
        p2 : "1418 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/brands/Himalaya.png.webp",
        p1 : "166 Products",
        p2 : "2531 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/brands/Loreal.png.webp",
        p1 : "151 Products",
        p2 : "1701 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/brands/Vestige.png.webp",
        p1 : "27 Products",
        p2 : "121 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/brands/Amway.png.webp",
        p1 : "33 Products",
        p2 : "136 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/brands/logo_Mamaearth.png.webp",
        p1 : "104 Products",
        p2 : "3507 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/brands/logo_Lakme.png.webp",
        p1 : "116 Products",
        p2 : "3031 Reviews",
    },
]

let products_data = [
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/2018/08/Indulekha-Bringha-Hair-Oil-Review..jpg.webp",
        title : "Indulekha Hair Oil",
        brands : "By Indulekha",
        rating : "3.9",
        reviews : "172 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/2018/08/Patanjali-Kesh-Kanti-Hair-Oil-product-image.jpg.webp",
        title : "Patanjali Oil",
        brands : "By Patanjali",
        rating : "3.8",
        reviews : "45 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/2018/09/Parachute-Coconut-Oil.jpg.webp",
        title : "Parachute Hair Oil",
        brands : "By Parachute",
        rating : "4.5",
        reviews : "213 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/2018/09/Dabur-Amla-Hair-Oil.jpg.webp",
        title : "Dabur Amla Oil",
        brands : "By Dabur",
        rating : "4.0",
        reviews : "144 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/2018/09/Citra-Pearl-Fair-Face-Cream-With-Korean-Pink-Pearl.jpg.webp",
        title : "Citra Face Creame",
        brands : "By Chitra",
        rating : "3.5",
        reviews : "24 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/2018/09/Olay-Natural-White-Day-SPF-24-PA-Glowing-Fairness-Cream-2.jpg.webp",
        title : "Olay Natural Day",
        brands : "By Olay",
        rating : "4.3",
        reviews : "49 Reviews",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/2018/09/Roop-Mantra-Ayurvedic-Medicinal-Face-Cream.jpg.webp",
        title : "Roop mantra Cream",
        brands : "By Roop Mantra",
        rating : "4.1",
        reviews : "120 Reviews",
    },
]

localStorage.setItem("benefit_data",JSON.stringify(benefit_data));
localStorage.setItem("categories_data",JSON.stringify(categories_data));
localStorage.setItem("brands_data",JSON.stringify(brands_data));
localStorage.setItem("products_data",JSON.stringify(products_data));

let benefitsType = document.getElementById("benefits_types");
let categoriesType = document.getElementById("categories_list"); 
let brandsType = document.getElementById("brands_list");
let productType = document.getElementById("product_list");

benefit_data.map(function(elem){
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.img;
    image.setAttribute("class","benefits_image")

    let name = document.createElement("p");
    name.innerText = elem.title;
    name.setAttribute("class","name_item")

    div.append(image,name);
    benefitsType.append(div);

});

categories_data.map(function(elem){
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.img;
    image.setAttribute("class","benefits_image")

    let name = document.createElement("p");
    name.innerText = elem.title;
    name.setAttribute("class","name_item")

    div.append(image,name);
    categoriesType.append(div);

});

brands_data.map(function(elem){
    let div = document.createElement("div");
    div.setAttribute("class","brands_div")

    let image = document.createElement("img");
    image.src = elem.img;
    image.setAttribute("class","brands_image")

    let p1 = document.createElement("p");
    p1.innerText = elem.p1;
    p1.setAttribute("class","p1name")

    let p2 = document.createElement("p");
    p2.innerText = elem.p2;
    p2.setAttribute("class","p2name")

    div.append(image,p1,p2);
    brandsType.append(div);

});

products_data.map(function(elem){
    let div = document.createElement("div");
    div.setAttribute("class","products_div")

    let image = document.createElement("img");
    image.src = elem.img;
    image.setAttribute("class","product_image")

    let title = document.createElement("p");
    title.innerText = elem.title;
    title.setAttribute("class","productName")
    

    let brands = document.createElement("p");
    brands.innerText = elem.brands;
    brands.setAttribute("class","brandsName")

    var d = document.createElement("div");
    d.setAttribute("id","first");
    var d1 = document.createElement("div");
    let rating = document.createElement("p");
    rating.innerText = elem.rating
    rating.setAttribute("class","ratingClass")

    d1.append(rating);

    var d2 = document.createElement("div");
    let reviews = document.createElement("p");
    reviews.innerText = elem.reviews;
    reviews.setAttribute("class","reviewsClass")
    d2.append(reviews);

    
    d.append(d1,d2);

    div.append(image,title,brands,d);
    productType.append(div);

});


