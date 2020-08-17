module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private player:objects.Player;
        // private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private scoreBoard:managers.Scoreboard;
        private isDying:boolean = false;
        private Death:objects.Death;
        private zDeath:objects.Death;
        private bullets:objects.Laser[];
        private oneItem: boolean;
        private drop : objects.item;
        public itemSFX: createjs.AbstractSoundInstance;

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player();
            // this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 10;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.bullets = this.player.Lasers;


            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            this.scoreBoard.Score = 0;


            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;

            this.Main();
        }

        public Update():void {
            // this.background.Update();
            this.player.Update();
           
            // this.enemy.Update();
            this.enemies.forEach(e => {
                e.Update();
                this.player.isDead = managers.Collision.Check(e, this.player);
                this.bullets.forEach(b => {
                    b.Update();
                    e.isDead = managers.Collision.Check(b, e);
                        if(e.isDead)
                        {   
                            if(Math.random()<0.25 && !this.oneItem)
                            {                          
                                this.drop = new objects.item(e.x, e.y)
                                this.addChild(this.drop)   
                                this.oneItem = true;    
                            }
                            this.zDeath = new objects.Death((e.x + 100), (e.y+100));
                            e.x = 2000;
                            e.y = -100;
                            this.removeChild(b);  
                            this.addChild(this.zDeath)
                            this.zDeath.on("animationend",e.Reset);        
                            e.isDead = false; 
                            this.scoreBoard.Score+=100;
                            
                        }
                        
                    }

                ); 
                if(this.oneItem && managers.Collision.Check(e, this.drop))
                {
                    
                    this.breakItem();
                    
                }  
                
               if(this.oneItem && managers.Collision.Check(this.player, this.drop))
                {
                    
                  this.manageItems();               
               }
    
                
                if(this.player.isDead && !this.isDying)
                {
                    // If the player is dead and hasn't exploded...explode!
                    // Disable music
                    this.backgroundMusic.stop();

                    // Create the Death
                    this.itemSFX =  createjs.Sound.play("die");
                    this.Death = new objects.Death((this.player.x + 256), (this.player.y+256));
                    this.Death.on("animationend", this.handleDeath);
                    this.addChild(this.Death);
                    this.isDying = true;
                    this.removeChild(this.player);
                    
                   
                    
                }
            }
            );
        
           
        }

        public Main():void {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        }

        private handleDeath() {
            this.stage.removeChild(this.Death);
            this.isDying = false;
            managers.Game.currentScene = config.Scene.OVER;
        }

        private manageItems(){

            this.itemSFX =  createjs.Sound.play("grab");
            this.scoreBoard.Score +=10000;
            this.removeChild(this.drop);
            this.oneItem = false;

        }
        private breakItem(){

            this.itemSFX =  createjs.Sound.play("break");
            this.removeChild(this.drop);
            this.oneItem = false;
        }

           

        }
         
    }

