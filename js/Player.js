class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }


getCount(){
  var playerCountRef=database.ref("playerCount");
  playerCountRef.on("value",data=>{
    playerCount=data.val();
  });
}
updateCount(count){
  database.ref("/").update({
    playerCount:count
  });
}
update(){
  var playerIndex="player/player"+this.index;
  database.ref(playerIndex).update({
    positionX:this.positionX,
    positionY:this.positionY,
  })
}

static getPlayersInfo(){
  var playerInfoRef=database.ref("players");
  playerInfoRefon("value",data=>{
    allPlayers=data.val()
  })
}

 }

