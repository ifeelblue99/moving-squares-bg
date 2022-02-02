const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

let squaresArray = [];

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

const Square = function(){

    this.x = Math.random() * innerWidth
    this.y = Math.random() * innerHeight

    this.velocityY = Math.random()*5 - 2.5;
    this.velocityX = Math.random()*5 - 2.5;

    this.size = Math.random()*70+50
    this.color = `hsl(${Math.random()*365},100%,50%)`;

    this.update = function () {

        this.x += this.velocityX
        this.y += this.velocityY 
        
        if (this.y < -innerHeight / 30 || this.y > innerHeight) {
            this.velocityY *= -1;
          }
          if (this.x < -innerWidth / 30 || this.x > innerWidth) {
            this.velocityX *= -1;
          }     
    }

    this.draw = function () {
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, this.size, this.size);
      };
}

function init() {
    for (let index = 0; index < 200; index++) {
        let p = new Square();
        squaresArray.push(p);
    }
}
  
init();

function animate() {
    c.fillStyle = "rgba(0,0,0,0.06)";
    c.fillRect(0, 0, canvas.width, canvas.height);
  
    for (let i = 0; i < squaresArray.length; i++) {
      squaresArray[i].update();
      squaresArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  
  animate();