// slider content codes start

let dataArr = []

function dataObj(a, b){

    this.heading = a,
    this.content = b

}


let one = new dataObj("Discover new products & Honest reviews", "Thousands of products and Millions of honest reviews to help you make informed choices")
let two = new dataObj("Redeem Free Products & Win Rewards Everyday", "Get free products, experience them, write a review, share socially to Win exciting Rewards and points")
let three = new dataObj("Join the community!", "Connect with like minded people and beauty experts for tips and tricks.")

dataArr.push(one, two, three)


let dataImgArr = ["https://www.stylecraze.com/static-content/products-reviews/images/signup2.jpg", "https://www.stylecraze.com/static-content/products-reviews/images/review_banner_login.png"]


let sliderContainer = document.querySelector("#middle")
let sliderImg = document.querySelector("#slideshow")

let i = 0
let id;
let j = 0

if(i === 0)
{
    id = setInterval(function(){

        const slider1 = dataArr[0].heading
        const slider2 = dataArr[0].content

        const slider3 = dataImgArr[0]

        sliderContainer.innerHTML = null
        sliderImg.innerHTML = null

        let p1 = document.createElement("p")
        p1.innerText = slider1

        let p2 = document.createElement("p")
        p2.innerText = slider2

        let img = document.createElement("img")
        img.src = slider3

        sliderContainer.append(p1, p2)
        sliderImg.append(img)
        
        i++
        j++

        clearInterval(id)

    }, 0)
}


setInterval(function() {

    if(dataArr.length === i)
    {
        i = 0;
    }

    if(dataImgArr.length === j)
    {
        j = 0;
    }

    let slider1 = dataArr[i].heading
    let slider2 = dataArr[i].content

    let slider3 = dataImgArr[j]

    sliderContainer.innerHTML = null
    sliderImg.innerHTML = null

    let p1 = document.createElement("p")
    p1.innerText = slider1

    let p2 = document.createElement("p")
    p2.innerText = slider2

    let img = document.createElement("img")
    img.src = slider3

    sliderContainer.append(p1, p2)
    sliderImg.append(img)

    i++
    j++

}, 2000)

// slider content codes ends