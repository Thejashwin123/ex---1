var playbutton,waitimg
var gameState="wait"
var enemies,enemyGroup

function preload(){
waitimg=loadImage("ASSERTS/SCREEN1.gif")
waitimg2=loadImage("ASSERTS/SCREEN2.gif")
roadimages=loadImage("ASSERTS/ROADIMAGES.png")
enemyimages=loadImage("/ASSERTS/TANKER/ENEMY.png")


gun1img=loadImage("/ASSERTS/TANKER/GUN1.png")
gun2img=loadImage("/ASSERTS/TANKER/GUN2.png")
gun3img=loadImage("/ASSERTS/TANKER/GUN3.png")


}

function setup(){
    createCanvas(windowWidth, windowHeight)

road=createSprite(width/2,height/2,width,height)
road.addImage(roadimages)
road.visible=false
road.scale=1.5


playbutton=createImg("play.png")
playbutton.position(width/4,height/2)

gun1=createImg("/ASSERTS/TANKER/GUN1.png")
gun2=createImg("/ASSERTS/TANKER/GUN2.png")
gun3=createImg("/ASSERTS/TANKER/GUN3.png")



gun1.position(width/3-200,height-300)
gun2.position(width/2-200,height-300)
gun3.position(width/3+300,height-300)


gun1.hide()
gun2.hide()
gun3.hide()


nextbutton=createImg("play.png")
nextbutton.position(width-200,height-200)
 nextbutton.hide()


player=createSprite(100,height-100)
player.visible=false


enemyGroup=new Group()

}

function draw(){
    if (gameState==="wait"){
background(waitimg)
}


if(playbutton.mousePressed(()=>{
    gameState="weaponselect"
}))


if (gameState==="weaponselect"){
    background(waitimg2)
    playbutton.hide()

gun1.show()
gun2.show()
gun3.show()
// gun4.show()







}
if (gun1.mousePressed(() => {
    gun1.position(width/2-250,height/4)
    gun1.size( 500,300)
    fill("red")
    gameState="gunselected"
    gun2.hide()
    gun3.hide()
    nextbutton.show()
    player.addImage(gun1img)
    
    
}))

if (gun2.mousePressed(() => {
    gun2.position(width/2-250,height/4)
    gun2.size( 500,300)
    fill("red")
    gameState="gunselected"
    gun1.hide()
    gun3.hide()
    nextbutton.show()
    player.addImage(gun2img)
}))

if (gun3.mousePressed(() => {
    gun3.position(width/2-250,height/4)
    gun3.size( 500,300)
    fill("red")
    gameState="gunselected"
    gun1.hide()
    gun2.hide()
    nextbutton.show()
    player.addImage(gun3img)
}))

if (nextbutton.mousePressed(() => {
    gameState="play"
    gun1.hide()
    gun2.hide()
    gun3.hide()

    
}))




if(gameState==="play"){
    background(0)
     nextbutton.hide()
     player.visible=true
     road.visible=true
     road.velocityX=-4

     if(road.x<=width/2){
        road.x=road.width/1.5
     }

spawnenemies()

// tanker movement


if(keyDown("UP_ARROW")){
    player.velocityY =-4
}
else{
    player.velocityY =0

}

if(keyDown("RIGHT_ARROW")){
    player.velocityX =4
}
else{
    player.velocityX =0
}


if(player.x<=20){
    player.x=width-50
}

if(player.x>width){
    player.x=50
}

if(player.y>height-50){
    player.y=height-100
}

if(player.y<50){
    player.y=80
}


}




drawSprites()
if(gameState==="gunselected"){
    textSize(100)
    stroke("yellow")
    strokeWeight(2)
    text("WEAPON SELECTED",100,height/2+height/4)
    // nextbutton.hide()

}


}

function spawnenemies(){
    if(frameCount%90 === 0){
        enemyy=Math.round(random(100,height-100))
        enemies=createSprite(width,enemyy)
        enemies.velocityX =-6
        enemies.addImage(enemyimages)
        enemies.scale=0.4
        enemyGroup.add(enemies)
    }
}