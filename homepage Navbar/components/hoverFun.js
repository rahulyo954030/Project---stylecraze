
let navbarfun = ()=> {

    
// function dropdown codes start
let createAllDropdown = (opt, optdropdown, options_title_1, options_title_2, options_title_3, options_title_4, options_title_5, options_title_6 ,options_title_7, options_url_1, options_url_2, options_url_3,options_url_4, options_url_5, options_url_6, options_imgContent_one, options_imgContent_two, options_imgContent_three, options_imgContent_four, options_imgContent_five, options_imgContent_six)=> {

    document.querySelector(opt).addEventListener("mouseenter", ()=> {

        let mainDiv = create("div")

        // Top part codes start
        let borderDiv = create("div")

        let bDp1 = create("p")
        bDp1.innerText = options_title_1

        let bDp2 = create("p")
        bDp2.innerText = options_title_2

        let bDp3 = create("p")
        bDp3.innerText = options_title_3

        let bDp4 = create("p")
        bDp4.innerText = options_title_4

        let bDp5 = create("p")
        bDp5.innerText = options_title_5

        let bDp6 = create("p")
        bDp6.innerText = options_title_6

        let bDp7 = create("p")
        bDp7.innerText = options_title_7

        borderDiv.append(bDp1,bDp2,bDp3,bDp4,bDp5,bDp6,bDp7)
        // Top part codes ends

        
        // img part codes start
        let imgDiv = create("div")

        // img div one codes start
        let imgDiv1 = create("div")

        let img1 = create("img")
        img1.src = options_url_1

        let p1 = create("p")
        p1.innerText = options_imgContent_one

        imgDiv1.append(img1, p1)
        // img div one div codes ends

        // img div two div codes starts
        let imgDiv2 = create("div")

        let img2 = create("img")
        img2.src = options_url_2

        let p2 = create("p")
        p2.innerText = options_imgContent_two

        imgDiv2.append(img2, p2)
        // img div two div codes ends

        // img div three div codes start
        let imgDiv3 = create("div")

        let img3 = create("img")
        img3.src = options_url_3

        let p3 = create("p")
        p3.innerText = options_imgContent_three

        imgDiv3.append(img3, p3)
        // img div three div codes ends

        // img div four div codes start
        let imgDiv4 = create("div")

        let img4 = create("img")
        img4.src = options_url_4

        let p4 = create("p")
        p4.innerText = options_imgContent_four

        imgDiv4.append(img4, p4)
        // img div four div codes ends

        // img div five div codes start
        let imgDiv5 = create("div")

        let img5 = create("img")
        img5.src = options_url_5

        let p5 = create("p")
        p5.innerText = options_imgContent_five

        imgDiv5.append(img5, p5)
        // img div five div codes ends

        // img div six div codes start
        let imgDiv6 = create("div")

        let img6 = create("img")
        img6.src = options_url_6

        let p6 = create("p")
        p6.innerText = options_imgContent_six

        imgDiv6.append(img6, p6)
        // img div six div codes ends

        imgDiv.append(imgDiv1, imgDiv2, imgDiv3, imgDiv4, imgDiv5, imgDiv6)
        // img part codes ends


        // find more codes start
        let findBtn = create("button")
        findBtn.innerHTML = "Find More"
        // find more codes ends


        mainDiv.append(borderDiv, imgDiv, findBtn)

        document.querySelector(optdropdown).append(mainDiv)

    })


    document.querySelector(opt).addEventListener("mouseleave", ()=> {

            document.querySelector(optdropdown).innerHTML = ""

    })

}
//funtion dropdown codes ends



//Makeup dropdown codes start
let optOne = "#opt-one"
let optOnedropdownOne = "#dropdown-one"

let optionsOne_title_1 = "Bridal Makeup"
let optionsOne_title_2 = "Celebrity Makeup"
let optionsOne_title_3 = "Eye Make up"
let optionsOne_title_4 = "Face Makeup"
let optionsOne_title_5 = "Lip Make up"
let optionsOne_title_6 = "Makeup Ideas"
let optionsOne_title_7 = "Mehandi Designs"

let optionsOne_url_1 = "https://cdn2.stylecraze.com/wp-content/uploads/2014/03/41-Top-5-Keya-Seth%E2%80%99s-Bridal-Makeup-Packages-267x300.jpg.webp"
let optionsOne_url_2 = "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg.webp"
let optionsOne_url_3 = "https://cdn2.stylecraze.com/wp-content/uploads/2013/10/1731_15-Best-Bridal-Makeup-Artists-In-Delhi_Ss-267x300.jpg.webp"
let optionsOne_url_4 = "https://cdn2.stylecraze.com/wp-content/uploads/2013/03/290-100-Most-Beautiful-Indian-Bridal-Looks-277960493-267x300.jpg.webp"
let optionsOne_url_5 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/06/Nigerian-Bridal-Makeup-%E2%80%93-A-Simple-Stepwise-Tutorial-267x300.jpg.webp"
let optionsOne_url_6 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/08/1513_Top-10-Bridal-Makeup-Packages-In-India-267x300.jpg.webp"

let optionsOne_imgContent_one = "Top 5 Keya Seth's Bridal Makeup Packages"
let optionsOne_imgContent_two = "Top 11 Bridal Makeup Artists In India For Weddings"
let optionsOne_imgContent_three = "15 Best Bridal Makeup Artists In Delhi"
let optionsOne_imgContent_four = "100 Most Beautiful Indian Bridal Looks"
let optionsOne_imgContent_five = "Nigerian Bridal Makeup - A Simple Stepwise Tutorial"
let optionsOne_imgContent_six = "10 Best Bridal Makeup Packages In India To Try In 2022"

let optionsOne = createAllDropdown(optOne, optOnedropdownOne, optionsOne_title_1, optionsOne_title_2, optionsOne_title_3, optionsOne_title_4, optionsOne_title_5, optionsOne_title_6 , optionsOne_title_7, optionsOne_url_1, optionsOne_url_2, optionsOne_url_3, optionsOne_url_4, optionsOne_url_5, optionsOne_url_6, optionsOne_imgContent_one, optionsOne_imgContent_two, optionsOne_imgContent_three, optionsOne_imgContent_four, optionsOne_imgContent_five, optionsOne_imgContent_six)
//Makeup dropdown codes ends



//Hair Care dropdown codes start/
let optTwo = "#opt-two"
let optTwodropdownTwo = "#dropdown-two"

let optionsTwo_title_1 = "Basic hair Care"
let optionsTwo_title_2 = "Dandruff"
let optionsTwo_title_3 = "Dry Hair Care"
let optionsTwo_title_4 = "Hair Care Ideas"
let optionsTwo_title_5 = "Hair Care Solutions"
let optionsTwo_title_6 = "Hair Color"
let optionsTwo_title_7 = "Hair Fall"

let optionsTwo_url_1 = "https://cdn2.stylecraze.com/wp-content/uploads/2012/07/1016-Deep-Conditioning-For-Hair-At-Home-267x300.jpg.webp"
let optionsTwo_url_2 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/05/How-To-Make-Brown-Sugar-Scrub-For-Scalp-267x300.jpg.webp"
let optionsTwo_url_3 = "https://cdn2.stylecraze.com/wp-content/uploads/2012/07/How-To-Care-For-Your-Hair-In-Monsoon-267x300.jpg.webp"
let optionsTwo_url_4 = "https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Winter-Wavy-and-Curly-Hair-Tips-1-267x300.jpg.webp"
let optionsTwo_url_5 = "https://cdn2.stylecraze.com/wp-content/uploads/2012/08/Ultra-Shiny-And-Glossy-Hair-Secrets-No-One-Tells-267x300.jpg.webp"
let optionsTwo_url_6 = "https://cdn2.stylecraze.com/wp-content/uploads/2012/12/10-Best-Homemade-Conditioners-For-Curly-Hair-267x300.jpg.webp"

let optionsTwo_imgContent_one = "At-Home Deep Conditioning Treatments For..."
let optionsTwo_imgContent_two = "How To Make Brown Sugar Scrub For Scalp?"
let optionsTwo_imgContent_three = "How To Care For Your Hair In Monsoon"
let optionsTwo_imgContent_four = "7 Winter Wavy and Curly Hair Tips"
let optionsTwo_imgContent_five = "How To Get Mirror Shiny Hair Easily"
let optionsTwo_imgContent_six = "10 Best Homemade Conditioners For Curly Hair"

let optionsTwo = createAllDropdown(optTwo, optTwodropdownTwo, optionsTwo_title_1, optionsTwo_title_2, optionsTwo_title_3, optionsTwo_title_4, optionsTwo_title_5, optionsTwo_title_6 ,optionsTwo_title_7, optionsTwo_url_1,optionsTwo_url_2,optionsTwo_url_3,optionsTwo_url_4,optionsTwo_url_5,optionsTwo_url_6, optionsTwo_imgContent_one, optionsTwo_imgContent_two, optionsTwo_imgContent_three, optionsTwo_imgContent_four, optionsTwo_imgContent_five, optionsTwo_imgContent_six)
//Hair Care dropdown codes ends/



//Skin Care dropdown codes start
let optThree = "#opt-three"
let optThreedropdownThree = "#dropdown-three"

let optionsThree_title_1 = "Acne"
let optionsThree_title_2 = "Anti Ageing"
let optionsThree_title_3 = "Beauty Secrets"
let optionsThree_title_4 = "Dry Skin"
let optionsThree_title_5 = "Face Care Tips"
let optionsThree_title_6 = "Face Packs and Masks"
let optionsThree_title_7 = "Glowing skin"

let optionsThree_url_1 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/07/Is-Sesame-Oil-Good-For-Acne-Banner-267x300.jpg.webp"
let optionsThree_url_2 = "https://cdn2.stylecraze.com/wp-content/uploads/2018/12/How-To-Use-Jojoba-Oil-For-Acne-267x300.jpg.webp"
let optionsThree_url_3 = "https://cdn2.stylecraze.com/wp-content/uploads/2018/12/Spironolactone-For-Acne-267x300.jpg.webp"
let optionsThree_url_4 = "https://cdn2.stylecraze.com/wp-content/uploads/2018/11/15-Best-Pimple-Patches-For-Pimple-Free-Spotless-Skin-Banner-267x300.jpg.webp"
let optionsThree_url_5 = "https://cdn2.stylecraze.com/wp-content/uploads/2018/11/15-Best-Body-Washes-For-Acne-267x300.png.webp"
let optionsThree_url_6 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/07/Is-Lemon-Juice-Good-For-Acne-And-Acne-Scars-267x300.jpg.webp"

let optionsThree_imgContent_one = "Is Sesame Oil Good For Acne?"
let optionsThree_imgContent_two = "How To Use Jojoba Oil For Acne"
let optionsThree_imgContent_three = "Spironolactone For Acne: Does It Really Work? How To..."
let optionsThree_imgContent_four = "15 Best Pimple Patches For Pimple-Free, Spotless..."
let optionsThree_imgContent_five = "15 Best Body Washes For Acne - Our Top Picks for..."
let optionsThree_imgContent_six = "Is Lemon Juice Good For Acne And Acne Scars?"

let optionsThree = createAllDropdown(optThree, optThreedropdownThree, optionsThree_title_1, optionsThree_title_2, optionsThree_title_3, optionsThree_title_4, optionsThree_title_5, optionsThree_title_6, optionsThree_title_7, optionsThree_url_1, optionsThree_url_2, optionsThree_url_3, optionsThree_url_4, optionsThree_url_5, optionsThree_url_6, optionsThree_imgContent_one, optionsThree_imgContent_two, optionsThree_imgContent_three, optionsThree_imgContent_four, optionsThree_imgContent_five, optionsThree_imgContent_six)
//Skin Care dropdown codes ends



//Hairstyles dropdown codes start
let optFour = "#opt-four"
let optFourdropdownFour = "#dropdown-four"

let optionsFour_title_1 = "Bob Hairstyles"
let optionsFour_title_2 = "Braid Hairstyles"
let optionsFour_title_3 = "Bridal Hairstyles"
let optionsFour_title_4 = "Bun Hairstyles"
let optionsFour_title_5 = "Celebrity Hairstyles"
let optionsFour_title_6 = "Curly Hairstyles"
let optionsFour_title_7 = "Different..."

let optionsFour_url_1 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/06/86-60-Bob-Haircuts-For-Black-Women-267x300.jpg.webp"
let optionsFour_url_2 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/05/10-Back-View-Of-Bob-Hairstyles-To-Inspire-You-1-267x300.jpg.webp"
let optionsFour_url_3 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/05/Chic-Feathered-Hairstyles-Banner-267x300.jpg.webp"
let optionsFour_url_4 = "https://cdn2.stylecraze.com/wp-content/uploads/2015/03/10-Stylish-Bob-Hairstyles-For-Oval-Faces-1-267x300.jpg.webp"
let optionsFour_url_5 = "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/21-Luscious-Long-Bobs-Styling-Ideas-To-Inspire-You-2-267x300.jpg.webp"
let optionsFour_url_6 = "https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Latest-And-Most-Popular-Messy-Bob-Hairstyles-For-Women-267x300.jpg.webp"

let optionsFour_imgContent_one = "60 Best Bob Haircuts For Black Women You May Love To..."
let optionsFour_imgContent_two = "10 Back View Of Bob Hairstyles To Inspire You"
let optionsFour_imgContent_three = "40 Chic Feathered Hairstyles For Short, Medium, And Long..."
let optionsFour_imgContent_four = "10 Stylish Bob Hairstyles For Oval Faces"
let optionsFour_imgContent_five = "21 Gorgeous Long Bob Hairstyles For A Stunning Look"
let optionsFour_imgContent_six = "80 Best And Cute Short Bob Hairstyles For Women In 2022"

let optionsFour = createAllDropdown(optFour, optFourdropdownFour, optionsFour_title_1, optionsFour_title_2, optionsFour_title_3, optionsFour_title_4, optionsFour_title_5, optionsFour_title_6, optionsFour_title_7, optionsFour_url_1, optionsFour_url_2, optionsFour_url_3, optionsFour_url_4, optionsFour_url_5, optionsFour_url_6, optionsFour_imgContent_one, optionsFour_imgContent_two, optionsFour_imgContent_three, optionsFour_imgContent_four, optionsFour_imgContent_five, optionsFour_imgContent_six)
//Hairstyles dropdown codes end



//Health and Wellness dropdown codes start
let optFive = "#opt-five"
let optFivedropdownFive = "#dropdown-five"

let optionsFive_title_1 = "Fitness"
let optionsFive_title_2 = "Health Devices"
let optionsFive_title_3 = "Ayurveda"
let optionsFive_title_4 = "Diet Tips"
let optionsFive_title_5 = "Health Conditions and Diseases"
let optionsFive_title_6 = "Healty Food"
let optionsFive_title_7 = "Home Remedies"

let optionsFive_url_1 = "https://cdn2.stylecraze.com/wp-content/uploads/2020/11/5-Best-Fabric-Resistance-Bands-267x300.jpg.webp"
let optionsFive_url_2 = "https://cdn2.stylecraze.com/wp-content/uploads/2020/04/13-Best-Sauna-Suits-Of-2020-To-Burn-More-Calories--Reviews-267x300.jpg.webp"
let optionsFive_url_3 = "https://cdn2.stylecraze.com/wp-content/uploads/2020/05/The-10-Best-Olympic-Barbell-Bars--Reviews-And-Buying-Guide-Banner-SC-267x300.jpg.webp"
let optionsFive_url_4 = "https://cdn2.stylecraze.com/wp-content/uploads/2020/05/The-10-Best-Triathlon-Helmets--Reviews-And-Buying-Guide-267x300.jpg.webp"
let optionsFive_url_5 = "https://cdn2.stylecraze.com/wp-content/uploads/2020/05/9-Best-Adjustable-Kettlebells-Banner-SC-267x300.jpg.webp"
let optionsFive_url_6 = "https://cdn2.stylecraze.com/wp-content/uploads/2020/05/11-Best-Weighted-Jump-Ropes-Of-2020-For-Home-Workouts-267x300.jpg.webp"

let optionsFive_imgContent_one = "6 Best Fabric Resistance Bands"
let optionsFive_imgContent_two = "13 Best Sauna Suits Of 2022 To Burn More Calories..."
let optionsFive_imgContent_three = "The 10 Best Olympic Barbell Bars - Reviews And Buy..."
let optionsFive_imgContent_four = "The 10 Best Triathlon Bike Helmets For Better Road Sa..."
let optionsFive_imgContent_five = "9 Best Adjustable Kettlebells"
let optionsFive_imgContent_six = "12 Best Weighted Jump Ropes Of 2022 For Home..."

let optionsFive = createAllDropdown(optFive, optFivedropdownFive, optionsFive_title_1, optionsFive_title_2, optionsFive_title_3, optionsFive_title_4, optionsFive_title_5, optionsFive_title_6, optionsFive_title_7, optionsFive_url_1, optionsFive_url_2, optionsFive_url_3, optionsFive_url_4, optionsFive_url_5, optionsFive_url_6, optionsFive_imgContent_one, optionsFive_imgContent_two, optionsFive_imgContent_three, optionsFive_imgContent_four, optionsFive_imgContent_five, optionsFive_imgContent_six)
//Health and Wellness codes ends



//News dropdown codes start
let optSix = "#opt-six"
let optSixdropdownSix = "#dropdown-six"

let optionsSix_title_1 = "Collaboration"
let optionsSix_title_2 = "Women Empowerment"
let optionsSix_title_3 = "Relationships"
let optionsSix_title_4 = "Discover"
let optionsSix_title_5 = "Face Care Tips"
let optionsSix_title_6 = "Brand News"
let optionsSix_title_7 = "Celebrity News"

let optionsSix_url_1 = "https://cdn2.stylecraze.com/wp-content/uploads/2022/03/Every-woman-is-a-WomanOfGoeld-267x300.jpg.webp"
let optionsSix_url_2 = "https://cdn2.stylecraze.com/wp-content/uploads/2022/02/The-ThriveCo-Hair-Vitalizing-Shampoo-And-Hair-Growth-Serum-Made-My-Hair-Grow-Faster-Longer-And-Stronger-267x300.png.webp"
let optionsSix_url_3 = "https://cdn2.stylecraze.com/wp-content/uploads/2022/02/Aqualens-267x300.jpg.webp"
let optionsSix_url_4 = "https://cdn2.stylecraze.com/wp-content/uploads/2022/02/Beauty-Devices-To-Use-Right-Now-267x300.jpg.webp"
let optionsSix_url_5 = "https://cdn2.stylecraze.com/wp-content/uploads/2021/02/What-Is-Botox-For-Hair-Does-It-Work-267x300.jpg.webp"
let optionsSix_url_6 = "https://cdn2.stylecraze.com/wp-content/uploads/2021/12/The-Best-Kajal-Is-The-One-That-Wont-Irritate-Sensitive-Eyes-267x300.jpg.webp"

let optionsSix_imgContent_one = "Every woman, is a #WomanOfGoeld"
let optionsSix_imgContent_two = "The ThriveCo Hair Vitalizing Shampoo And Hair Growth..."
let optionsSix_imgContent_three = "Looking for a perfect partner for a clear future?..."
let optionsSix_imgContent_four = "How To Supercharge Your Skincare Routine..."
let optionsSix_imgContent_five = "What Is Botox For Hair? Does It Work?"
let optionsSix_imgContent_six = "The Best Kajal Is The One That Won't Irritate Sensitive..."

let optionsSix = createAllDropdown(optSix, optSixdropdownSix, optionsSix_title_1, optionsSix_title_2, optionsSix_title_3, optionsSix_title_4, optionsSix_title_5, optionsSix_title_6, optionsSix_title_7, optionsSix_url_1, optionsSix_url_2, optionsSix_url_3, optionsSix_url_4, optionsSix_url_5, optionsSix_url_6, optionsSix_imgContent_one, optionsSix_imgContent_two, optionsSix_imgContent_three, optionsSix_imgContent_four, optionsSix_imgContent_five, optionsSix_imgContent_six)
//News dropdown codes ends




//document.createElement function codes
function create(x){

    return document.createElement(x)
}
//document.createElement function codes/

}



export default navbarfun