const images = document.querySelector('.image-previews')
const smallImage = document.querySelector('.small-pic')
const mainPic = document.querySelector('.main-pic')

let handleClick = (e) => {
    mainPic.src = e.target.src
}

images.addEventListener('click', handleClick)