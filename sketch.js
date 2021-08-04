function preload(){
 
}
var obs_touched = false
function setup() {
  createCanvas(500, 500);
  bg=createSprite(250,250,440,500)
  bg.shapeColor="green"
  
  player=createSprite(70,450,10,10)
  player.shapeColor="white"
  
  target=createSprite(400,50,40,40)
  target.shapeColor="pink"
  
  obs1=createSprite(90,220,80,15)
  obs1.shapeColor="red"
  
  obs2=createSprite(200,220,80,15)
  obs2.shapeColor="red"
  
  obs3=createSprite(310,220,80,15)
  obs3.shapeColor="red"
  
  obs4=createSprite(420,220,80,15)
  obs4.shapeColor="red"
  
  obs5=createSprite(55,250,50,15)
  obs5.shapeColor="red"
  
  obs6=createSprite(150,250,80,15)
  obs6.shapeColor="red"
  
  obs7=createSprite(260,250,80,15)
  obs7.shapeColor="red"
  
  obs8=createSprite(370,250,80,15)   
  obs8.shapeColor="red"
  
  obs9=createSprite(455,250,30,15)
  obs9.shapeColor="red"
  
}

function draw() {
  if (keyDown("up")) {
    player.y=player.y-5;
  }
  if (keyDown("down")) {
    player.y=player.y+5
  }
  if (keyDown("left")) {
    player.x=player.x-5
  }
  if (keyDown("right")) {
    player.x=player.x+5
  }
  if (player.isTouching(obs1)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs2)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs3)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs4)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs5)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs6)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs7)){
    player.x=70
    player.y=450
    obs_touched = true
  }
  if (player.isTouching(obs8)){
    player.x=70
    player.y=450
    player.destroy()
    obs_touched = true
  }
  if (player.isTouching(obs9)){
    player.x=70
    player.y=450
    player.destroy()
    obs_touched = true
  }
  if (obs_touched == true){
    text("you lose",250,250)
  }
  if (player.isTouching(target)){
    target.destroy()
    player.destroy()
    obs1.destroy()
    obs2.destroy()
    obs3.destroy()
    obs4.destroy()
    obs5.destroy()
    obs6.destroy()
    obs7.destroy()
    obs8.destroy()
    obs9.destroy()
    text("you won",250,250)
  }
  drawSprites();
}
