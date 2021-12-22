let i = 0
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.zIndex = i
    i = i + 2
    document.body.append(image)
    return image
}