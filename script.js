let canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
let startButton = document.getElementById("start-button")
let firstPage = document.querySelector("#first-page");
let finishPage = document.querySelector("#game-over");
let gameOver = false;
let intervalId= 0;

let img = new Image();
img.src ="../images/fondo2.jpg"

// let bat = new Image();
// bat.src = "../images/murci1.png"
// let batSpeedX = 5;
// let batSpeedY = 5;

// let batX = 50;
// let batY = 50;


let moth = new Image ();
moth.src = "../images/moth2.png"
let mothX = 250;
let mothY = 100;


window.onload = function () {
    canvas.style.display = "none";
    finishPage.style.display = 'none';

    startButton.addEventListener("click", () => {
        startGame();
    });

    // let batX += batSpeedX;
    // let batY += batSpeedY;
    const bat = new Bat();
    const moth = new Moth(150, 250, 20, 20, "./images/moth.jpg");
    const moth1 = new Moth( 500, 300, 20,20, "./images/moth2.png");
    // const moth2 = new Moth(1000,600,20,20,)


    document.addEventListener("keydown", (event) => {
        console.log(event.keyCode);
        switch(event.keyCode){
            case 38: bat.y -=2;
            break;
            case 40: bat.y +=2;
            break;
            case 37:
              bat.x -= 2;
              break;
            case 39:
              bat.x += 2;
              break;
          }
        ctx.clearRect(bat.speedX, bat.speedY, 50, 50);

        });

     document.addEventListener('keyup', (event) => {
        bat.speedX= 0;
        bat.speedY= 0;
     });


    
    function startGame() {
        firstPage.style.display = 'none';
        finishPage.style.display = 'none';
        canvas.style.display = 'block';
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

    
        bat.drawBat();
        moth.drawMoth();
        moth1.drawMoth();
        
        
       // ctx.drawImage(bat,bat.x,bat.y,50,50);
      //  ctx.drawImage(moth,mothX,mothY,20,20);




        if (gameOver) {
            cancelAnimationFrame(intervalId);
        } else {
            intervalId= requestAnimationFrame(startGame)
        }
    }
}
