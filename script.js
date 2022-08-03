// let currentGame;
let restartButt = document.getElementById("re-start");
let scoreHTML = document.getElementById("score");
let canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
let startButton = document.getElementById("start-button");
let firstPage = document.querySelector("#first-page");
let finishPage = document.querySelector("#game-over");
let gameOver = false;
let score = 0;
let intervalId= 0;
let time = 0;
let left = false;
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
    

    restartButt.addEventListener("click", ()  => {
      gameOver = false;
      startGame();
      checkGameOver();
      score = 0;
      bat.x = 50;
      bat.y = 50;
      time = 0;
    })
    // let batX += batSpeedX;
    // let batY += batSpeedY;
    const bat = new Bat();
    const bats = [bat];
    
    moth0 = new Moth(300, 250, 30, 30, "./images/moth.png");
    moth1 = new Moth(500, 300, 30,30, "./images/moth2.png");
    moth2 = new Moth(1000,600,30,30,"./images/moth3.png");
    moth3 = new Moth(700, 250, 30, 30, "./images/butter.png");
    moth4 = new Moth(500,400, 30,30, "./images/butterfly1.png");
    moth5 = new Moth(1000,600,30,30,"./images/whiteMoth.png");
    moth6 = new Moth(30, 500, 30, 30, "./images/moth.png");
    moth7 = new Moth(130, 330, 30,30, "./images/moth2.png");
    moth8 = new Moth(170,60,30,30,"./images/moth2.png");
    const moths = [moth0, moth1, moth2, moth3, moth4, moth5, moth6, moth7, moth8];
    
    let keysPressed= {};
    document.addEventListener("keydown", (event) => {
        keysPressed[event.keyCode] = true;
        console.log(event.keyCode);
        switch(event.keyCode){
            case 38:
              bat.y -=4; //up
            break;
            case 40:
               bat.y +=4; //down
            break;
            case 37:
              left = true; 
              bat.x -= 4; // left
              break;
            case 39:
              left = false;
              bat.x += 4; // right
              break;
            case 87:
              bat1.y -=4; // W up
            break;
            case 83:
               bat1.y +=4; // S down
            break;
            case 65:
              left = true; 
              bat1.x -= 4; // A left
              break;
            case 68:
              left = false;
              bat1.x += 4; // D right
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
        ctx.clearRect(bat1.x, bat1.y, 50, 50);

        });

     document.addEventListener('keyup', (event) => {
        delete keysPressed[event.keyCode];
        // bat.speedX= 0;
        // bat.speedY= 0;
     });

     setInterval(() => {
      bats.forEach(bat => {
        bat.flapping = !bat.flapping
      })
      }, 300);

      function updateScore() {
        ctx.font = '20px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(`Score: ${score}`, 550, 50);
        ctx.font = '20px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(`Time: ${time}`, 650, 50);
      }

      function warning() {
        //setTimeout(() => {
       
      //},4000);
      }
     
    function startGame() {
  

      if (intervalId == 3000) {
        ctx.font = '30px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(`You are starving!! Need juici flies`, 550, 250);
        
      }
        // intervalId += 1; // increment 
        firstPage.style.display = 'none';
        finishPage.style.display = 'none';
        canvas.style.display = 'block';
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
       
        bats.forEach(bat => {
        bat.drawBat();
       
        if (bat.flapping) {
        bat.src = "./images/murci1.png";
      } else {
        bat.src = "./images/murci2mirror.png";
      }
    })
      
      // if (bat.flapping && left) {
      //   bat.src = "./images/murci-reverse.png";
      // } else {
      //   bat.src = "./images/murci3.png";
      // }
       // audio.play();     
        
        moths.forEach(moth => {
          moth.drawMoth();
          if(intervalId % 1000 === 0){ 
            moth.moveMoths()
          }
          let randomX= Math.floor(Math.random()*1100)+ 15;
          let randomY= Math.floor(Math.random()*700)+ 15;
          let randomX1= Math.floor(Math.random()*1100)+ 15;
          let randomY1= Math.floor(Math.random()*700)+ 15;
          if (bat.x + bat.width >= moth.x && bat.x <= moth.x + moth.width && bat.y + bat.height >= moth.y && bat.y <= moth.y + moth.height) {
            if (moth == moth3) {
              alert("Extra bat! controls: A (right) D(left) W (up) S (down)")
              const bat1 = new Bat();
              bats.push(bat1);
            
              let keysPressed= {};
              document.addEventListener("keydown", (event) => {
                keysPressed[event.keyCode] = true;
                
                switch(event.keyCode){
                 case 87:
                  bat1.y -=4; // W up
                  break;
                case 83:
                  bat1.y +=4; // S down
                  break;
                case 65:
                  left = true; 
                  bat1.x -= 4; // A left
                  break;
                case 68:
                  left = false;
                  bat1.x += 4; // D right
                  break;
                }
                if (keysPressed[38] && keysPressed[37]) {
                  bat1.y -=3;
                  bat1.x -=3;
                }
                if (keysPressed[38] && keysPressed[39]) {
                  bat1.y -=3;
                  bat1.x +=3;
                }
                if (keysPressed[40] && keysPressed[37]) {
                  bat1.y +=3;
                  bat1.x -=3;
                }
                if (keysPressed[40] && keysPressed[39]) {
                  bat1.y +=3;
                  bat1.x +=3;
                }
                ctx.clearRect(bat1.x, bat1.y, 50, 50);

              });

              document.addEventListener('keyup', (event) => {
                delete keysPressed[event.keyCode];
              
              });

            }
            moth.x = -500;
            score +=10;
            let newMoth= new Moth(randomX, randomY, 30,30, "./images/butterfly1.png");
            moths.push(newMoth);
            let newMoth2 = new Moth (randomX1, randomY1, 30,30, "./images/whiteMoth.png");
            if (score>60) {
              moths.push(newMoth2);
            }
          }
          // currentGame.moth.createMoths();
          // bat.speedX= 0;
          // bat.speedY= 0;
          updateScore();
        });

      detectCollision();

        if (gameOver === true) {
          firstPage.style.display = 'none';
          finishPage.style.display = 'block';
          canvas.style.display = 'none';
          scoreHTML.innerText = score;
            cancelAnimationFrame(intervalId);
        
        } else {
             intervalId= requestAnimationFrame(startGame)
        }
    }

    function detectCollision() {
       
     
    }
    function checkGameOver() {
        setTimeout(() => {
          if (score<30) {
            gameOver = true;
          }  
        },30000);
        setTimeout(() => {
          if (score<300) { gameOver = true;}
      },65000);
        setInterval(() => {
           time++;
        },1000);
        
    }
    
}
