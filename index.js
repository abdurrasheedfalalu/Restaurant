window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    document.querySelector('.cart  span').classList.toggle('window-scroll-cart', window.scrollY > 0)

})

window.addEventListener("DOMContentLoaded", getRandomFood())

const rightImage = document.getElementById("right__image");


async function getRandomFood () {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    const resData = await res.json();

    const randomFood = resData.meals[0]
    console.log(randomFood)

    randomRightFood(randomFood)
}



function randomRightFood (randomData, random = false) {
    const image = document.createElement("img")
    image.classList.add("right-image")
    image.src = [randomData.strMealThumb]

    rightImage.appendChild(image)
}