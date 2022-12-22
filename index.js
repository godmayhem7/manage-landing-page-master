let svgs = document.querySelectorAll(".svgs")

svgs.forEach((svg)=>{
    svg.addEventListener("mouseover",function(){
        if (this===svgs[0]){
            svgs[0].setAttribute("src","images/facebook-orange.svg")
        }else if (this===svgs[1]){
            svgs[1].setAttribute("src","images/youtube-orange.svg")
        }else if (this=== svgs[2]){
            svgs[2].setAttribute("src","images/twitter-orange.svg")
        }else if (this=== svgs[3]){
            svgs[3].setAttribute("src","images/pintrest-orange.svg")
        }else if (this === svgs[4]){
            svgs[4].setAttribute("src","images/instagram-orange.svg")
        }
    })

    svg.addEventListener("mouseleave",function(){
        if (this===svgs[0]){
            svgs[0].setAttribute("src","images/icon-facebook.svg")
        }else if (this===svgs[1]){
            svgs[1].setAttribute("src","images/icon-youtube.svg")
        }else if (this=== svgs[2]){
            svgs[2].setAttribute("src","images/icon-twitter.svg")
        }else if (this=== svgs[3]){
            svgs[3].setAttribute("src","images/icon-pinterest.svg")
        }else if (this === svgs[4]){
            svgs[4].setAttribute("src","images/icon-instagram.svg")
        }
    })
})



document.querySelector(".input").addEventListener("keypress",(e)=>{
    if (e.key==="Enter"){
       if (document.querySelector(".input").value.slice(-10)==="@gmail.com"){
            document.querySelector(".input").value = null
            document.querySelector("span").style.display="none"
       }else{
        document.querySelector("span").style.display="flex"
       }
    }else{
        return null
    }
})

document.querySelector(".go").addEventListener("click",()=>{
    if (document.querySelector(".input").value.slice(-10)==="@gmail.com"){
        document.querySelector(".input").value=null
        document.querySelector("span").style.display="none"
    }else{
        document.querySelector("span").style.display="flex"
    }
})


document.querySelector("#hamburger").addEventListener("click",()=>{
    document.querySelector("nav").style.display="flex"
    document.querySelector(".close").style.display="flex"
    document.querySelector("#hamburger").classList.add("hamburger-sub")
})


document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector("nav").style.display="none"
    document.querySelector("#hamburger").classList.remove("hamburger-sub")
    document.querySelector(".close").style.display="none"
})


let radioswitcherDesktopLength = document.querySelectorAll(".radio-desktop").length
for (let i=0;i<radioswitcherDesktopLength;i++){
    document.querySelectorAll(".radio-desktop")[i].addEventListener("click",function(){
        if (this===document.querySelectorAll(".radio-desktop")[0]){
            document.querySelector(".second-main-article").style.transform="translateX(750px)"
            document.querySelectorAll(".radio-desktop")[0].classList.add("activer")
            document.querySelectorAll(".radio-desktop")[1].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[2].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[3].classList.remove("activer")
        }else if (this===document.querySelectorAll(".radio-desktop")[1]){
            document.querySelector(".second-main-article").style.transform="translateX(250px)"
            document.querySelectorAll(".radio-desktop")[1].classList.add("activer")
            document.querySelectorAll(".radio-desktop")[0].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[2].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[3].classList.remove("activer")
        }else if (this===document.querySelectorAll(".radio-desktop")[2]){
            document.querySelector(".second-main-article").style.transform="translateX(-250px)"
            document.querySelectorAll(".radio-desktop")[2].classList.add("activer")
            document.querySelectorAll(".radio-desktop")[1].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[0].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[3].classList.remove("activer")
        }else if (this===document.querySelectorAll(".radio-desktop")[3]){
            document.querySelector(".second-main-article").style.transform="translateX(-750px)"
            document.querySelectorAll(".radio-desktop")[3].classList.add("activer")
            document.querySelectorAll(".radio-desktop")[1].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[0].classList.remove("activer")
            document.querySelectorAll(".radio-desktop")[2].classList.remove("activer")
        }
    })
}

window.addEventListener("resize",()=>{
    if (window,innerWidth===380){
        document.querySelector(".second-main-article").style.transform="translateX(182px)" 
    }else if (window.innerWidth > 380){
        document.querySelector(".second-main-article").style.transform="translateX(250px)"
    }
})


let radioswitcherMobileLength = document.querySelectorAll(".radio-mobile").length

for (let i = 0; i<radioswitcherMobileLength; i++){
    document.querySelectorAll(".radio-mobile")[i].addEventListener("click",function(){
        if (this===document.querySelectorAll(".radio-mobile")[0]){
            document.querySelector(".second-main-article").style.transform="translateX(553px)"
            document.querySelectorAll(".radio-mobile")[0].classList.add("activer")
            document.querySelectorAll(".radio-mobile")[1].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[2].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[3].classList.remove("activer")
        }else if (this===document.querySelectorAll(".radio-mobile")[1]){
            document.querySelector(".second-main-article").style.transform="translateX(182px)"
            document.querySelectorAll(".radio-mobile")[1].classList.add("activer")
            document.querySelectorAll(".radio-mobile")[0].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[2].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[3].classList.remove("activer")
        }else if (this===document.querySelectorAll(".radio-mobile")[2]){
            document.querySelector(".second-main-article").style.transform="translateX(-189px)"
            document.querySelectorAll(".radio-mobile")[2].classList.add("activer")
            document.querySelectorAll(".radio-mobile")[1].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[0].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[3].classList.remove("activer")
        }else if (this===document.querySelectorAll(".radio-mobile")[3]){
            document.querySelector(".second-main-article").style.transform="translateX(-560px)"
            document.querySelectorAll(".radio-mobile")[3].classList.add("activer")
            document.querySelectorAll(".radio-mobile")[1].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[0].classList.remove("activer")
            document.querySelectorAll(".radio-mobile")[2].classList.remove("activer")
        }
    })
}