module scenes{
    export class PlayScene extends objects.Scene {
        //varaibles

        private background:objects.Background;
        private player:objects.Player;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.Scoreboard;
        private bullet:objects.Bullet;
        private oneShot: boolean;

        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }

        public Start():void {
            //Inititalize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.bullet = new objects.Bullet(this.assetManager);
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++){
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;              
            this.bullet
            this.Main();
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.player);

            if(managers.Game.keyboardManager.shoot && this.oneShot)
            {
                this.oneShot = false;
                console.log("in if, shoot");
                this.addChild(this.bullet);                         
            } 
            this.oneShot = true;
            
            this.enemies.forEach(e => {
                this.addChild(e);
            });
        
            this.addChild(this.scoreBoard);
            //register for the click events
            
        }
        public Update():void{
            //this.background.Update();
            this.player.Update();
            //this.enemy.Update();
            this.enemies.forEach(e => {
                e.Update();
                managers.Collision.Check(this.player, e);
            })
                            
            
        }

        
    }
}
    



