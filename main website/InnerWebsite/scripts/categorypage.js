let categories = [
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
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Skin-Serums.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Skin Serums",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Sunscreen.png.webp",
        title : "Sunscreens",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Facemask.png.webp",
        title : "Face Masks",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Body_hair_removal_product.png.webp",
        title : "Body Hair Removal Products",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Foundation.png.webp",
        title : "Foundations",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Facial_kit.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },
    {
        img : "https://cdn2.stylecraze.com/wp-content/uploads/static-content/pr-images/categories/Night-Creams.png.webp",
        title : "Night Creams",
    },

];

categories.map(function(elem){
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = elem.img;
    image.setAttribute("class","benefits_image")

    let name = document.createElement("p");
    name.innerText = elem.title;
    name.setAttribute("class","name_item")

    div.append(image,name);
    document.querySelector("#imgcontainer").append(div)

});