// let currentGame;

let canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
let startButton = document.getElementById("start-button");
let firstPage = document.querySelector("#first-page");
let finishPage = document.querySelector("#game-over");
let gameOver = false;
let score = 0;
let intervalId= 0;
// let audio = new Audio("./images/0000971.mp3");
// audio.volume = .1;


let img = new Image();
img.src ="../images/fondo2.jpg"

// let bat = new Image();
// bat.src = "../images/murci1.png"
// let batSpeedX = 5;
// let batSpeedY = 5;

// let batX = 50;
// let batY = 50;

window.onload = function () {
    canvas.style.display = "none";
    finishPage.style.display = 'none';

    startButton.addEventListener("click", () => {
        startGame();
        checkGameOver();
    });
    // currentGame = new Game();

  
    // let batX += batSpeedX;
    // let batY += batSpeedY;
    const bat = new Bat();
    
    moth0 = new Moth(300, 250, 20, 20, "./images/moth.png");
    moth1 = new Moth(500, 300, 20,20, "./images/moth2.png");
    moth2 = new Moth(1000,600,20,20,"./images/moth2.png");
    const moths = [moth0, moth1, moth2];
    
    let keysPressed= {};
    document.addEventListener("keydown", (event) => {
        keysPressed[event.keyCode] = true;
        console.log(event.keyCode);
        switch(event.keyCode){
            case 38: bat.y -=4; //up
            break;
            case 40: bat.y +=4; //down
            break;
            case 37:
              bat.x -= 4; // left
              break;
            case 39:
              bat.x += 4; // right
              break;
          }
          if (keysPressed[38] && keysPressed[37]) {
            bat.y -=3;
            bat.x -=3;
        }
        if (keysPressed[38] && keysPressed[39]) {
            bat.y -=3;
            bat.x +=3;
        }if (keysPressed[40] && keysPressed[37]) {
            bat.y +=3;
            bat.x -=3;
        }if (keysPressed[40] && keysPressed[39]) {
            bat.y +=3;
            bat.x +=3;
        }
        ctx.clearRect(bat.x, bat.y, 50, 50);

        });

     document.addEventListener('keyup', (event) => {
        delete keysPressed[event.keyCode];
        // bat.speedX= 0;
        // bat.speedY= 0;
     });

     setInterval(() => {
        bat.flapping = !bat.flapping
    
      }, 300);

      function updateScore() {
        ctx.font = '20px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(`Score: ${score}`, 550, 50);
      }
    
    function startGame() {
        // intervalId += 1; // increment 
        firstPage.style.display = 'none';
        finishPage.style.display = 'none';
        canvas.style.display = 'block';
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

    
        bat.drawBat();
        if (bat.flapping) {
        bat.src = "./images/murci1.png";
      } else {
        bat.src = "./images/murci2mirror.png";
      }
       // audio.play();     
        
        moths.forEach(moth => moth.drawMoth());

        // if(intervalId % 80 === 0){ 
        // moth0.moveMoths()
        // moth1.moveMoths()
        // moth2.moveMoths()
        // }
       // ctx.drawImage(bat,bat.x,bat.y,50,50);
      //  ctx.drawImage(moth,mothX,mothY,20,20);
      detectCollision();

        if (gameOver === true) {
            
            cancelAnimationFrame(intervalId);
        
        } else {
             intervalId= requestAnimationFrame(startGame)
        }
    }

    function detectCollision() {
        moths.forEach(moth => {
            if (bat.x + bat.width >= moth.x && bat.x <= moth.x - moth.width && bat.y + bat.height <= moth.y && bat.y >= moth.y + moth.height) {
                moth.x = -500;
                score +=10;
              }
            // currentGame.moth.createMoths();
        })
        updateScore();
    }
    function checkGameOver() {
        setTimeout(() => {
            gameOver = true;
        },3000);
        // setTimeout(() => {
        //     if (score<170) false
        // },12000);
        // setTimeout(() => {
        //     if (score<300) false
        // },18000);
    }
    f
}
