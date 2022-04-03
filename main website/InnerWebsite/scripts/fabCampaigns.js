
// slider-1 codes start

let imgArr = ["https://cdn2.stylecraze.com/wp-content/uploads/2021/04/Banner-A.jpg.webp", "https://cdn2.stylecraze.com/wp-content/uploads/2021/04/fab_banner_dsk_2.jpg.webp"]

let sliderContainer = document.querySelector("#slider-1")


let i = 0
let id;

if( i === 0)
{
    id = setInterval(()=> {

        const firstImg = imgArr[0]

        sliderContainer.innerHTML = null

        let first_img = document.createElement("img")
        first_img.src = firstImg

        sliderContainer.append(first_img)

        i++

        clearInterval(id)

    }, 0)
}

setInterval(()=> {

    if(imgArr.length === i)
    {
        i = 0
    }

    sliderContainer.innerHTML = null

    let slider1 = imgArr[i]

    let sliderImg = document.createElement("img")
    sliderImg.src = slider1

    sliderContainer.append(sliderImg)

    i++

}, 3000)

// slider-1 codes ends



// slider-2 codes start

let img2_arr = ["https://www.stylecraze.com/static-content/Influencer/1.png", "https://www.stylecraze.com/static-content/Influencer/2.png", "https://www.stylecraze.com/static-content/Influencer/3.png", "https://www.stylecraze.com/static-content/Influencer/4.png", "https://www.stylecraze.com/static-content/Influencer/5.png", "https://www.stylecraze.com/static-content/Influencer/6.png", "https://www.stylecraze.com/static-content/Influencer/7.png", "https://www.stylecraze.com/static-content/Influencer/8.png", "https://www.stylecraze.com/static-content/Influencer/9.png", "https://www.stylecraze.com/static-content/Influencer/10.png"]

let slider2Container = document.querySelector("#image-container")


let j = 0
let id2;

if( j === 0)
{
    id2 = setInterval(()=> {

        const img1 = img2_arr[0]
        const img2 = img2_arr[1]
        const img3 = img2_arr[2]
        const img4 = img2_arr[3]

        slider2Container.innerHTML = null

        let slider1Img = document.createElement("img")
        slider1Img.src = img1
        
        let slider2Img = document.createElement("img")
        slider2Img.src = img2

        let slider3Img = document.createElement("img")
        slider3Img.src = img3

        let slider4Img = document.createElement("img")
        slider4Img.src = img4

        slider2Container.append(slider1Img, slider2Img, slider3Img, slider4Img)

        j++

        clearInterval(id2)

    }, 0)
}

// setInterval(()=> {

//     if(img2_arr.length === j)
//     {
//         j = 0
//     }

//     slider2Container.innerHTML = null

//     img2_arr.map(()=> {

//         let img1 = img2_arr[j+0]
//         let img2 = img2_arr[j+1]
//         let img3 = img2_arr[j+2]
//         let img4 = img2_arr[j+3]

//         console.log(img1, img2, img3, img4)

//         slider2Container.innerHTML = null

//         let slider1Img = document.createElement("img")
//         slider1Img.src = img1
        
//         let slider2Img = document.createElement("img")
//         slider2Img.src = img2

//         let slider3Img = document.createElement("img")
//         slider3Img.src = img3

//         let slider4Img = document.createElement("img")
//         slider4Img.src = img4

//         slider2Container.append(slider1Img, slider2Img, slider3Img, slider4Img)

//         j++

//     })
    

// }, 1000)

// slider-2 codes ends