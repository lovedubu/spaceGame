
//캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas)

//
let backgroundImage,spaceshipImage, bulletImage, enemyImage, gameOverImage
//우주선 좌표
let spaceShipX = canvas.width/2 - 15
let spaceShipY = canvas.height - 60

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src = "images/space-background.avif"

    spaceshipImage = new Image();
    spaceshipImage.src = "images/icons8-space-60.png"

    gameOverImage = new Image();
    gameOverImage.src = "images/game-over.png"

    bulletImage = new Image();
    bulletImage.src = "images/icons8-bullet-48.png"

    enemyImage = new Image();
    enemyImage.src = "images/icons8-ghast-30.png"
}

function render() {
    ctx.drawImage(backgroundImage, 0,0, canvas.width, canvas.height)
    ctx.drawImage(spaceshipImage,spaceShipX,spaceShipY)
}

function main() {
    render()
    console.log("animation calls main function")
    requestAnimationFrame(main)
}


loadImage()
main()