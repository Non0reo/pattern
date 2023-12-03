let img;
let patternSize = {
  width: 80,
  height: 80
}
let patterns = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let x = 0; (x - 1) * patternSize.width < width; x++) {
    for (let y = 0; (y - 1) * patternSize.height < height; y++) {
      const isPairColumn = x % 2 == 0;
      const isPairRow = y % 2 == 0;
      let squarePos = 0;

      if(isPairRow) {
        if(isPairColumn) squarePos = 0;
        else squarePos = 1;
      } else {
        if(!isPairColumn) squarePos = 2;
        else squarePos = 3;
      }


      patterns.push(new Pattern(x * patternSize.width, y * patternSize.height, squarePos));
    }
  }
}

function preload() {
  img = loadImage('assets/Curve2.svg');
}

function draw() {
  background(20);
  imageMode(CENTER);

  for (let i = 0; i < patterns.length; i++) {
    patterns[i].display();
  }
}


class Pattern {
  constructor(x, y, squarePos) {
    this.x = x;
    this.y = y;
    this.rotation = int(random(2));
    this.squarePos = squarePos;
  }

  display() {
    push();
      translate(this.x, this.y);
      //translate(this.x + patternSize.width / 2, this.y + patternSize.height / 2)

      /* fill(255);
      textSize(20);
      text(this.squarePos, 0, 0); */
      
      
      //rotate(this.rotation * (PI / 2));

      switch (this.squarePos) {
        case 0:
        case 2:
          rotate(this.rotation * PI);
          break;
        case 1:
        case 3:
          rotate((this.rotation * PI) + HALF_PI);
          break;
      }
      
      image(img, 0, 0, patternSize.width + 10, patternSize.height + 10);
      //image(img, 0, 0, 10, 10);
    pop();
  }
}