all = ["Face","Skin","Hair","Eyes","Lips","Health","Nails","Mens","Genral","View All Categories"]

ul = document.querySelector(".top>ul")
// console.log(ul)


Face = ["BB Creams","CC Creams","Compact Powders","Concealers","Contours","DD Creams","Face and Body Glitters","Face Bleaches","Face Illuminators","Face Masks","Face Packs","Face Washes","Facial Kits","Facial Wipes","Fairness Creams","Foundations","Makeup Bases","Makeup Blushes","Makeup Brushes","Makeup Kits","Makeup Palettes","Makeup Primers","Makeup Removers","Makeup Sponges","Makeup Tools And Accessories","Mask Peels","Setting Powders","Setting Sprays","Sindoor","Talcum Powders"]
Skin = ["Acne Products","Anti Aging Products","Anti Blemish Products","Anti Pigmentation Products","Body Butters","Body Hair Removal Products","Body Lotions","Body Oils","Body Washes","Bronzers","Cleansers","Deodorants","Essential Oils","Foot Creams","Hand Creams","Hand Washes","Highlighters","Massage Creams","Massage Oils","Mists","Moisturizers","Night Creams","Perfumes","Personal Care Products","Sanitizers","Scrubs","Sheet Masks","Shower Gels","Skin Care Products","Skin Serums","Soaps","Sunscreens"]
Hair = ["Conditioners","Hair Care Products","Hair Colors","Hair Dryers","Hair Oils","Hair Creams","Hair Packs And Hair Masks","Hair Serums","Hair Sprays","Hair Straighteners","Hair Styling Products","Hair Waxes","Hennas","Shampoos"]
Eyes = ["Eye Care Products","Eye Creams","Eye Makeup Removers","Eyebrow Pencils And Enhancers","Eyelashes","Eyeliners","Eyeshadows","Kajals","Mascaras"]
Lips = ["Lip Balms","Lip Care Products","Lip Crayons","Lip Glosses","Lip Liners","Lip Plumpers","Lip Tints","Lipsticks"]
Health = ["Foods And Supplements","Medical Products","Teas","Weightloss Products"]
Nails = ["Manicure Kits","Nail Care Products","Nail Polishes"]
Mens = ["Beard Oils","Men's Products"]
Genral = ["Air Fresheners","Car Fresheners","Dental Products","Multipurpose Oils","Baby Care Products"]
// allarr.concat(Face,Skin,Hair,Eyes,Lips,Health,Nails,Mens,Genral)
allarr=[Face,Skin,Hair,Eyes,Lips,Health,Nails,Mens,Genral]
abcd = []
allarr.forEach(ele => {
    ele.forEach(e => {
        abcd.push(e)
    });
});


item = (arr) => {
    sec = document.querySelector(".middle>ul")
    sec.innerText = null
    arr.forEach(ele => {
        let n = document.createElement("li")
        // console.log(n)
        n.innerText = ele
        sec.append(n)
    });
}

run = (event) =>{
    console.log(event.target.innerText)
    cl = document.querySelectorAll(".top>ul>li")
    cl.forEach(ele => {
        ele.style = "border: 2px solid slategrey;"
    });
    event.target.style = "border: 2px solid #fe5b75;"
    btn = event.target.innerText
    if(btn == "Face")
        item(Face)
    if (btn == "Skin")
        item(Skin)
    if (btn == "Hair")
        item(Hair)
    if (btn == "Eyes")
        item(Eyes)
    if (btn == "Lips")
        item(Lips)
    if (btn == "Health")
        item(Health)
    if (btn == "Nails")
        item(Nails)
    if (btn == "Mens")
        item(Mens)
    if (btn == "Genral")
        item(Genral)
    if(btn == "View All Categories")
    {
        document.querySelector(".middle>ul").style = "grid-template-columns: repeat(5,1fr);"
        item(abcd)
    }
}
item(Face)



all.forEach(elem => {
    li = document.createElement("li")
    li.innerText = elem
    // console.log(li);
    ul.append(li)
});

rrr = document.querySelectorAll(".top>ul>li")
rrr.forEach(r => {
    // console.log(r)
    r.addEventListener("click",run)
});
