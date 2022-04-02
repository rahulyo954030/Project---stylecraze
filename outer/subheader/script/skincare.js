// <----------------heading----------------->
let headingdiv = document.createElement("div")
headingdiv.setAttribute("id","headingdiv")

let heading = document.createElement("h2")
heading.innerHTML ="SKIN CARE"

let line = document.createElement("hr")
line.setAttribute("id","line")

headingdiv.append(heading,line)
// <---------------heading---------------->

// <--------------Subheadings--------------->
let div1 = document.createElement("div")
div1.setAttribute("id","div1")

let subhHeadingDiv1 = document.createElement("div")
let subHeading1 = document.createElement("p")
subHeading1.innerHTML = "Sunscreen"
subhHeadingDiv1.append(subHeading1)

let subhHeadingDiv2 = document.createElement("div")
let subHeading2 = document.createElement("p")
subHeading2.innerHTML = "Anti Ageing"
subhHeadingDiv2.append(subHeading2)

let subhHeadingDiv3 = document.createElement("div")
let subHeading3 = document.createElement("p")
subHeading3.innerHTML = "Dry Skin"
subhHeadingDiv3.append(subHeading3)

let subhHeadingDiv4 = document.createElement("div")
let subHeading4 = document.createElement("p")
subHeading4.innerHTML = "Glowing Skin"
subhHeadingDiv4.append(subHeading4)

let subhHeadingDiv5 = document.createElement("div")
let subHeading5 = document.createElement("p")
subHeading5.innerHTML = "Oily Skin"
subhHeadingDiv5.append(subHeading5)

let subhHeadingDiv6 = document.createElement("div")
let subHeading6 = document.createElement("p")
subHeading6.innerHTML = "Homemade Tips"
subhHeadingDiv6.append(subHeading6)

let subhHeadingDiv7 = document.createElement("div")
let subHeading7 = document.createElement("p")
subHeading7.innerHTML = "Perfumes"
subhHeadingDiv7.append(subHeading7)

let subhHeadingDiv8 = document.createElement("div")
let subHeading8 = document.createElement("p")
subHeading8.innerHTML = "Skin Care Problems"
subhHeadingDiv8.append(subHeading8)
div1.append(subhHeadingDiv1,subhHeadingDiv2,subhHeadingDiv3,subhHeadingDiv4,subhHeadingDiv5,subhHeadingDiv6,subhHeadingDiv7,subhHeadingDiv8)
// <--------------Subheadings--------------->

// <--------------div2--------------->
let div2 = document.createElement("div")
div2.setAttribute("id","div2")

let imagediv1 = document.createElement("div")
imagediv1.setAttribute("id","imagediv1")
let image1 = document.createElement("img")
image1.src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/787_10-Effective-Homemade-Face-Packs-To-Treat-Dark-Spots_257745499-720x810.jpg.webp"
imagediv1.append(image1)

let paradiv1 = document.createElement("div")
paradiv1.setAttribute("id","paradiv1")
let title1 = document.createElement("h2")
title1.innerHTML="10 Effective Homemade Face Packs To Treat Dark Spots"
let para1 = document.createElement("p")
para1.innerText="Facial dark patches can be annoying! Unfortunately, there is already enough drama in our lives, and adding the stress of covering unattractive blemishes on the face is not an ideal condition. But as the saying goes, every issue has a […]"
let by1 = document.createElement("p")
by1.innerHTML="BY KUSHNEET KUKREJA"
by1.setAttribute("id","by1")
paradiv1.append(title1,para1,by1)

div2.append(imagediv1,paradiv1)
// <--------------div2--------------->

// <--------------div3--------------->
let div3=document.createElement("div")
div3.setAttribute("id","div3")

let subdiv1=document.createElement("div")
subdiv1.setAttribute("id","subdiv1")

let imagediv2 = document.createElement("div")
let image2 = document.createElement("img")
image2.src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/Acne-On-Dry-Skin-Causes-Remedies-And-Tips.jpg.webp"
imagediv2.append(image2)

let paradiv2 = document.createElement("div")
paradiv2.setAttribute("id","paradiv2")
let title2 = document.createElement("h2")
title2.innerHTML="Acne On Dry Skin: 12 Home Remedies And Tips To Prevent It"
let by2 = document.createElement("p")
by2.innerHTML="MEDICALLY REVIEWED BY DR. HARI HARA SUDHAN, MD , MD, DERMATOLOGIST"
paradiv2.append(imagediv2,title2,by2)

subdiv1.append(paradiv2)
//////

let subdiv2=document.createElement("div")
subdiv2.setAttribute("id","subdiv2")

let imagediv3 = document.createElement("div")
let image3 = document.createElement("img")
image3.src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/851_Top-10-Methods-To-Get-Instant-Fairness391498855.jpg.webp"
imagediv3.append(image3)

let paradiv3 = document.createElement("div")
paradiv3.setAttribute("id","paradiv3")
let title3 = document.createElement("h2")
title3.innerHTML="Top 10 Methods To Get Instant Fairness"
let by3 = document.createElement("p")
by3.innerHTML="BY ARSHIYA SYEDA"
paradiv3.append(imagediv3,title3,by3)

subdiv2.append(paradiv3)
// //////

let subdiv3=document.createElement("div")
subdiv3.setAttribute("id","subdiv3")

let imagediv4 = document.createElement("div")
let image4 = document.createElement("img")
image4.src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Top-10-Ayurvedic-Treatments-For-Glowing-Skin.jpg.webp"
imagediv4.append(image4)

let paradiv4 = document.createElement("div")
paradiv4.setAttribute("id","paradiv4")
let title4 = document.createElement("h2")
title4.innerHTML="Top 10 Ayurvedic Treatments For Glowing Skin"
let by4 = document.createElement("p")
by4.innerHTML="BY KUSHNEET KUKREJA"
paradiv4.append(imagediv4,title4,by4)
subdiv3.append(paradiv4)

div3.append(subdiv1,subdiv2,subdiv3)
// <--------------div3--------------->

// <--------------div4--------------->
let div4 = document.createElement("div")
div4.setAttribute("id","div4")

let imagediv5 = document.createElement("div")
imagediv5.setAttribute("id","imagediv5")
let image5 = document.createElement("img")
image5.src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/3-Amazing-Benefits-Of-Water-Therapy-To-Get-Glowing-Skin-1-720x810.jpg.webp"
imagediv5.append(image5)

let paradiv5 = document.createElement("div")
paradiv5.setAttribute("id","paradiv5")
let title5 = document.createElement("h2")
title5.innerHTML="3 Amazing Benefits Of Water Therapy – Get Glowing and Healthy Skin"
let para5 = document.createElement("p")
para5.innerText="Drink enough water! That is probably the easiest way to keep your skin healthy and glowing. We are not joking. Water therapy benefits your skin in numerous ways. It can improve your overall skin health, minimize dark spots, acne, blemishes, […]"
let by5 = document.createElement("p")
by5.innerHTML="BY RAMONA SINHA"
by5.setAttribute("id","by5")
paradiv5.append(title5,para5,by5)

div4.append(paradiv5,imagediv5)
// <--------------div4--------------->

// <--------------div5--------------->

let div5=document.createElement("div")
div5.setAttribute("id","div5")

let subdiv4=document.createElement("div")
subdiv4.setAttribute("id","subdiv4")

let imagediv6 = document.createElement("div")
let image6 = document.createElement("img")
image6.src="https://cdn2.stylecraze.com/wp-content/uploads/2018/12/Hormonal-Acne-How-To-Treat-It-Effectively.jpg.webp"
imagediv6.append(image6)

let paradiv6 = document.createElement("div")
paradiv6.setAttribute("id","paradiv6")
let title6 = document.createElement("h2")
title6.innerHTML="Hormonal Acne: Causes, How To Treat It, And Foods To Avoid"
let by6 = document.createElement("p")
by6.innerHTML="MEDICALLY REVIEWED BY DR. AANAND GERIA , MD, DERMATOLOGIST"
paradiv6.append(imagediv6,title6,by6)

subdiv4.append(paradiv6)
//////

let subdiv5=document.createElement("div")
subdiv5.setAttribute("id","subdiv5")

let imagediv7 = document.createElement("div")
let image7 = document.createElement("img")
image7.src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Using-Ice-On-Pimples-And-Acne-%E2%80%93-Is-It-Effective.jpg.webp"
imagediv7.append(image7)

let paradiv7 = document.createElement("div")
paradiv7.setAttribute("id","paradiv7")
let title7 = document.createElement("h2")
title7.innerHTML="Using Ice On Pimples And Acne – Is It Effective?"
let by7 = document.createElement("p")
by7.innerHTML="BY RAMONA SINHA"
paradiv7.append(imagediv7,title7,by7)

subdiv5.append(paradiv7)
// //////

let subdiv6=document.createElement("div")
subdiv6.setAttribute("id","subdiv6")

let imagediv8 = document.createElement("div")
let image8 = document.createElement("img")
image8.src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Mesotherapy-For-The-Face-%E2%80%93-Benefits-Procedure-And-Side-Effects.jpg.webp"
imagediv8.append(image8)

let paradiv8 = document.createElement("div")
paradiv8.setAttribute("id","paradiv8")
let title8 = document.createElement("h2")
title8.innerHTML="Mesotherapy For The Face – Benefits, Procedure, And Side Effects"
let by8 = document.createElement("p")
by8.innerHTML="MEDICALLY REVIEWED BY DR. VINDHYA L VEERULA , MD, FAAD, DERMATOLOGIST"
paradiv8.append(imagediv8,title8,by8)
subdiv6.append(paradiv8)
/////////
let subdiv7=document.createElement("div")
subdiv7.setAttribute("id","subdiv7")

let imagediv9 = document.createElement("div")
let image9 = document.createElement("img")
image9.src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/37_How-Does-Castor-Oil-Reduce-Skin-Pigmentation-640307210.jpg.jpg.webp"
imagediv9.append(image9)

let paradiv9 = document.createElement("div")
paradiv9.setAttribute("id","paradiv9")
let title9 = document.createElement("h2")
title9.innerHTML="How Does Castor Oil Reduce Skin Pigmentation?"
let by9 = document.createElement("p")
by9.innerHTML="REVIEWED BY DR.K.HARISH KUMAR , MD.DVL, DERMATOLOGIST, DERMATOLOGIST"
paradiv9.append(imagediv9,title9,by9)
subdiv7.append(paradiv9)
//////

let subdiv8=document.createElement("div")
subdiv8.setAttribute("id","subdiv8")

let imagediv10 = document.createElement("div")
let image10 = document.createElement("img")
image10.src="https://cdn2.stylecraze.com/wp-content/uploads/2018/12/Spray-Tanning-%E2%80%93-What-Is-it-Should-You-Get-One.jpg.webp"
imagediv10.append(image10)

let paradiv10 = document.createElement("div")
paradiv10.setAttribute("id","paradiv10")
let title10 = document.createElement("h2")
title10.innerHTML="Spray Tanning: Is It Safe? Is It Worth It? Should You Do It?"
let by10 = document.createElement("p")
by10.innerHTML="MEDICALLY REVIEWED BY DR. AANAND GERIA , MD, DERMATOLOGIST"
paradiv10.append(imagediv10,title10,by10)
subdiv8.append(paradiv10)
/////

let subdiv9=document.createElement("div")
subdiv9.setAttribute("id","subdiv9")

let imagediv11 = document.createElement("div")
let image11 = document.createElement("img")
image11.src="https://cdn2.stylecraze.com/wp-content/uploads/2018/10/Dermaplaning-Everything-You-Need-To-Know-About-It.jpg.webp"
imagediv11.append(image11)

let paradiv11 = document.createElement("div")
paradiv11.setAttribute("id","paradiv11")
let title11 = document.createElement("h2")
title11.innerHTML="Dermaplaning: What To Know Before Trying It Out"
let by11 = document.createElement("p")
by11.innerHTML="MEDICALLY REVIEWED BY DR. DEANNE MRAZ ROBINSON , DERMATOLOGY"
paradiv11.append(imagediv11,title11,by11)
subdiv9.append(paradiv11)

div5.append(subdiv4,subdiv5,subdiv6,subdiv7,subdiv8,subdiv9)

// <--------------div5--------------->
// <-------------------pageNumbers--------------------->
let pageNumbers = document.createElement("div")
pageNumbers.setAttribute("id","page-numbers")

let pagediv1 = document.createElement("div")
let p1 = document.createElement("p")
p1.innerHTML="1"
pagediv1.append(p1)

let pagediv2 = document.createElement("div")
let p2 = document.createElement("p")
p2.innerHTML="2"
pagediv2.append(p2)


let pagediv3 = document.createElement("div")
let p3 = document.createElement("p")
p3.innerHTML="3"
pagediv3.append(p3)

let pagediv4 = document.createElement("div")
let p4 = document.createElement("p")
p4.innerHTML="..."
pagediv4.append(p4)

let pagediv5 = document.createElement("div")
let p5 = document.createElement("p")
p5.innerHTML="153"
pagediv5.append(p5)

let pagediv6 = document.createElement("div")
let p6 = document.createElement("p")
p6.innerHTML=">>"
pagediv6.append(p6)

pageNumbers.append(pagediv1,pagediv2,pagediv3,pagediv4,pagediv5,pagediv6)
// <-------------------pageNumbers--------------------->

// <---------------Append---------------->
document.querySelector("#container").append(headingdiv,div1,div2,div3,div4,div5,pageNumbers)
// <---------------Append---------------->