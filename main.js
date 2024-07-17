let sleder = document.querySelector("#sleder")
let button1 = document.querySelector("#NTBTN")
let button2 = document.querySelector("#prevBtn")
let end = document.querySelector("#end")


let images = [
    "https://img.freepik.com/free-vector/hand-drawn-houseplant-collection_23-2148910610.jpg?t=st=1721129017~exp=1721132617~hmac=7c18036ee71b8defd8d1c8ef9bbeaa7d84e1d6170e6eff48437aba3cbd6b80f8&w=740",
    "https://img.freepik.com/free-photo/two-sister-posing-picture-family-photo-shooting_1328-2791.jpg?t=st=1721129449~exp=1721133049~hmac=f28b3c1325c54d0efe271f12d64263e8b1638591da862c450ca8ccb2c9fea0c1&w=360",
    "https://img.freepik.com/free-psd/portrait-person-with-watercolor-effect-mock-up_23-2149598915.jpg?t=st=1721129501~exp=1721133101~hmac=9b7406a882599d741ef93bcd7371f45879049ea07eb78c40c01b092f7f48d7c1&w=740",
    "https://img.freepik.com/free-photo/two-sister-posing-picture-family-photo-shooting_1328-2767.jpg?t=st=1721129940~exp=1721133540~hmac=51d68ac5e8b20c63923a2aab38ca8690596eb0c3efb4e7d77ba65bac6f50e72f&w=740",
     "https://img.freepik.com/free-vector/travel-landing-page-template-with-photo_23-2148378376.jpg?t=st=1721131388~exp=1721134988~hmac=a2dbd4890860cdf216dbe84234c6e723e4af2de40b008e8429975c735540d090&w=740",
    "https://img.freepik.com/free-photo/selective-focus-head-gorgeous-blue-peacock_181624-6397.jpg?t=st=1721131605~exp=1721135205~hmac=8fb1e8713aa081f8ee0d84ac8eec7bfd4679d1d12b31fd14a4e8db72bf8acbb1&w=740"

]
let indexNmber = 0

sleder.src = images[indexNmber]

button1.addEventListener("click", function () {
    if(indexNmber < images.length  -1) {
        indexNmber++
sleder.src = images[indexNmber]
    }

    if(indexNmber == images.length -1){
    end.innerHTML = "Dhamaanka ayaa la gaaray"
    end.style.backgroundColor = "yellow"
  end.style.color = "black"
    }

})

button2.addEventListener("click", function () {
    if(indexNmber > 0) {
    indexNmber-- 
sleder.src = images[indexNmber]
    }
    
    if(indexNmber == images.length -1){
        end.innerHTML = "Dhamaanka ayaa la gaaray"
        end.style.backgroundColor = "white"
      end.style.color = "black"
        }
})