module scenes{
    export class GameOverScene extends objects.Scene{
        //varaibles
        private gameOverLabel: objects.Label;
        private previousButton: objects.Button;

        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }

        //method
        public Start():void {
            //Inittalize our variables
            this.gameOverLabel = new objects.Label(
                "Game Over!", "40px", "Consolas", "#000000", 320, 240, true);
            
            this.previousButton = new objects.Button(this.assetManager, "previousButton", 120, 300);
            this.Main();
        }

        public Update():void{
            
        }
        
        public Main():void{
            this.addChild(this.gameOverLabel);
            this.addChild(this.previousButton);

            //register for the click events
            this.previousButton.on("click", this.previousButtonClick);
        }

        private previousButtonClick():void{
            managers.Game.currentScene = config.Scene.GAME;
        }
    }
}