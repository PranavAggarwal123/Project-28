
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050, 580)

	ground = new Ground(550, 595, 1500, 5);

	stone = new Stone(150, 515, 17);

	mango1 = new Mango(1100, 200, 30);
	mango2 = new Mango(1000, 225, 30);
	mango3 = new Mango(875, 275, 30);
	mango4 = new Mango(1175, 275, 30);
	mango5 = new Mango(1050, 150, 30);
	mango6 = new Mango(1050, 275, 30);

	launcher = new Launcher(stone.body, {x:150, y:483});

	boy = createSprite(200, 540, 50, 50);
	boy.addImage(boyImg);
	boy.scale = 0.1;


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(180);
  
	tree.display();
	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	launcher.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);

	drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r) {
	Matter.Body.setStatic(lmango.body,false); 
}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:150, y:483});
		launcher.attach(stone.body);
	}
}