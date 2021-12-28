class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  writeInfo() {
    var playerIndex = "players/player"+this.index;

    database.ref(playerIndex).set({
      name:this.name
    });
  }
  
}
