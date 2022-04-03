let ht;
let acd;

setTimeout(() => {
    acd = document.getElementsByClassName("account_option desktop_only")[0]
    console.log(acd)
    ht = acd.innerHTML
    loginValue = localStorage.getItem("loginValue")
    if(JSON.parse(loginValue) == "yes"){
        acd.innerHTML = null
        img = document.createElement("img")
        img.id = "unsplash"
        // img.style = ("border-radius:50%;height:60px;h")
        img.style = ("border-radius:50%;height:60px;width:60px")
        img.src = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmV1dGlmdWxsJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        img.addEventListener("click",logout)
        acd.append(img)
    }
    console.log(JSON.parse(loginValue))
}, 1000);

var logout = () =>{
    console.log(ht);
    console.log(acd);
    acd.innerHTML = ht
    loginValue = localStorage.getItem("loginValue")
    loginValue = "No"
    localStorage.setItem("loginValue",JSON.stringify(loginValue))
}