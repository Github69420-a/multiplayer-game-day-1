class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  display() {
    this.input.position((windowWidth/2)-100,windowHeight/2);
    this.playButton.position(windowWidth/2-75, windowHeight/2+50);
    this.titleImg.position(windowWidth/20, windowHeight/2-250);
    this.greeting.position(windowWidth/2-100, windowHeight/2+50);

    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting");
    this.writeData();
  }
  writeData() {
    this.playButton.mousePressed(()=>{
      console.log("pressed"); 
      this.playButton.hide();
      this.input.hide();
      this.greeting.html("welcome")
      player.name = this.input.value();
      playerCount = playerCount += 1;
      player.index = playerCount;
      player.writeInfo();
    });
  }
}
