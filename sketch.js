var player, game;
var playerimg, platformimg;
var gameState = 0;
var distance = 0;

function preload(){
    playerimg = loadImage("images/doodlejumpimage.png");
    platformimg = loadImage("images/doodlejumpplatforms.png");
    
};

function setup(){
    createCanvas(200,800);
    
    player = new Player(100,100,20,20);
    //player.addImage(playerimg);
    
 
    platform = new Platform(random(20,180),20,20,20);
    //platform.addImage(platformimg);


    
    if(player.distance === 750){
        gameState = 1;

    }
    
}

function draw(){
    if(player.distance === 750){
        gameState = 1;

        
    }

    drawSprites();

}