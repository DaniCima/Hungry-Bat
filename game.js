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
}

class Bat {
    constructor(){
      this.x = 50;
      this.y = 50;
      this.speedX=0;
      this.speedY=0;
      this.width = 50;
      this.height = 50;
      this.imga = "./images/murci1.png"
    }
    
    drawBat(){
      const batImg = new Image();
      batImg.src = this.imga;
      ctx.drawImage(batImg, this.x, this.y, this.width, this.height);
    }

    movebat(keyCode){
      console.log('x', this.x);
      console.log('y', this.y);
      ctx.clearRect(this.x, this.y, this.width, this.height);
      
    //   switch(keyCode){
    //     case 37:
    //     //Making sure car doesn't go off the road
    //     if(this.x > 20){
    //       this.x -= 10;
    //     }
    //       break;
    //     case 39:
    //     //Making sure car doesn't go off the road
    //     if (this.x < 430 ){
    //       this.x += 10;
    //     }
    //       break;
    //   }
    }
  }