class Tree{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(this.x, this.y, {isStatic:true});
        World.add(world, this.body);
    }
    display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        fill(255);
        imageMode(CENTER);
        image(this.image, 1000, 350, 500, 500);
        pop();
    }
}