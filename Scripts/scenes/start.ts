module scenes {
    export class StartScene extends objects.Scene {
        //variables
        private background:objects.Background;
        private welcomeLabel:objects.Label;
        private welcomeSubLabel:objects.Label;
        private startButton:objects.Button;
        
        //constructor
        constructor(){
            super();
            this.Start();
        }

        //methods
        public Start():void {
            //Initialize our objects for the scene

            this.background = new objects.Background();
            this.welcomeLabel = new objects.Label("Z-War", "60px", "Consolas", "#ffffff", 640, 240, true);
            this.welcomeSubLabel = new objects.Label("Low Survival Chance", "30px", "Consolas", "#ffffff", 640, 300, true);
            this.startButton = new objects.Button("nextButton", 1100, 500);
            this.Main();
        }

        public Update():void{
            //this.background.Update();
        }

        public Main():void{
            //Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeSubLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        private startButtonClick():void{
            //Change from START to GAME scene
            managers.Game.currentScene = config.Scene.GAME;
        }
    }
}