module scenes{
    export class PlayScene extends objects.Scene {
        //varaibles

        private background:objects.Background;
        private player:objects.Player;
        //private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.Scoreboard;
        private isDying:boolean = false;

        //constructor
        constructor(){
            super();

            this.Start();
        }

        public Start():void {
            //Inititalize our variables
            this.background = new objects.Background();
            this.player = new objects.Player();
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i < this.enemyNum; i++){
                this.enemies[i] = new objects.Enemy();
            }

            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;


            
            this.Main();
        }

        public Update():void{
            //this.background.Update();
            this.player.Update();
            //this.enemy.Update();
            this.enemies.forEach(e => {
                e.Update();
                this.player.isDead = managers.Collision.Check(this.player, e);

                this.player.Bullets.forEach(bullet => {
                    e.isDead = managers.Collision.Check(bullet, e)
                });

                if(this.player.isDead && !this.isDying)
                {
                    this.isDying = true;
                    this.removeChild(this.player);
                }

                if(e.isDead)
                {
                    this.isDying = true;
                    this.removeChild(e);
                }
            })
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.player);
            //this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            
            this.addChild(this.scoreBoard);
            //register for the click events
            
        }

        private handleDying(){
            this.isDying = false;
            managers.Game.currentScene = config.Scene.OVER;
        }
    }
}