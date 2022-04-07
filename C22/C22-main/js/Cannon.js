var x, y, width, height, angle;
var cannon_image, cannon_base;

class Cannon{
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        cannon_image = loadImage("assets/cannon.png");
        cannon_base = loadImage("assets/cannonBase.png");
    }
    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannon_image,0,0,this.width,this.heigth);
        pop();
        image(this.cannon_base,70,20,200);
        noFill();
    }
}