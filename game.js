class Game {
    constructor() {
        this.bat = {},
        this.moth = [];
        this.score = 0;
    }
}

class Moth {
    constructor(x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
    }

    drawMoth() {
        const mothImg = new Image();
        mothImg.src = this.img;
        ctx.drawImage(mothImg,this.x, this.y, this.width, this.height);
    }

    // createMoths () {
    //   let minHeight = 10; // set params for the obstacles
    //   let maxHeight = 550;
    //   let minWidth = 20; // set params for the obstacles
    //   let maxWidth = 200;
    //   this.x = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    //   this.y = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    //   if (score==20) {
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth2.png"));
    //   } else if (score==40) {
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth2.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth2.png"));
    //   } else {
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth2.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth2.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth.png"));
    //     moths.push(new Moth(this.x, this.y, 20, 20, "./images/moth2.png"));
    //   }
    // }

    moveMoths() {

      // this.x= Math.floor(Math.random()*1100)+ 15;
      // this.y= Math.floor(Math.random()*700)+ 15;
     }
}

class Bat {
    constructor(){
      this.x = 50;
      this.y = 50;
      // this.speedX=0;
      // this.speedY=0;
      this.width = 50;
      this.height = 50;
      this.flapping = true;
      this.src= "./images/murci2mirror.png";
    }
    
    drawBat(){
      const batImg = new Image();
      batImg.src = this.src;
      ctx.drawImage(batImg, this.x, this.y, this.width, this.height);
      
    }

    movebat(keyCode){
      console.log('x', this.x);
      console.log('y', this.y);
      ctx.clearRect(this.x, this.y, this.width, this.height);
      // this.x += this.speedX;
      // this.y += this.speedY;
      
      
    }
  }