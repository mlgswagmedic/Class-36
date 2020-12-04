class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  playfunction(){
    form.hiden();
    textSize(30);
    text('Game Start', 120,70);
    Player.getplayerinfo()
    if(allPlayers!==undefined){
    var display_position=130;
    for(var plr in allPlayers){
    if(plr==="player"+player.index){
      fill("red")
    }
    else{
      fill("black")
    }
    display_position=display_position+30
    textsize(15);
    text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,display_position)
  }
  }    

  }
  }
