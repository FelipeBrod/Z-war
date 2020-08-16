module objects{
    export class Player extends objects.GameObject{
        //variables
        private bulletSpawn:math.Vec2;
        public Bullets:objects.Bullet[];
        public bulletCount:number = 0;

        public isDead:boolean;
        //constructor
        constructor(){
            super("player");               
            
            this.Start();
        }

        public Start():void{
            this.x = 640;
            this.y = 600;
            this.isDead = false;
            this.Bullets = new Array<objects.Bullet>();
        }

        public Update():void{
            this.Move();
            this.CheckBound();
            this.BulletFire();

            this.Bullets.forEach(bullet => {
                bullet.Update();
            });
        }

        public Reset():void
        {  
        }        
        
        public Move():void{
            if(managers.Game.keyboardManager.moveLeft)
            {
                this.x -= 7.5;
            }
            if(managers.Game.keyboardManager.moveRight)
            {
                this.x += 7.5;
            }
            if(managers.Game.keyboardManager.moveUp)
            {
                this.y -= 7.5;
            }
            if(managers.Game.keyboardManager.moveDown)
            {
                this.y += 7.5;
            }
        }

    
    
        public CheckBound():void{
            //right boundary
            if(this.x >= 1280 -this.halfW)
            {
                this.x = 1280 -this.halfW;
            }
            //left boundary
            if(this.x <= this.halfW)
            {
                this.x = this.halfW;
            }
            if(this.y >= 720 -this.halfH)
            {
                this.y = 720 -this.halfH;
            }
            //left boundary
            if(this.y <= this.halfH)
            {
                this.y = this.halfH;
            }
        }

        public BulletFire():void{
            let ticker:number = createjs.Ticker.getTicks();

            if(!this.isDead && managers.Game.keyboardManager.shoot && (ticker % 10 == 0))
            {
                this.bulletSpawn = new math.Vec2(this.x, this.y - this.halfH);
                let bullet = new objects.Bullet();
                bullet.x = this.bulletSpawn.x;
                bullet.y = this.bulletSpawn.y;
                this.Bullets[this.bulletCount] = bullet;
                managers.Game.currentSceneObject.addChild(bullet);
                this.bulletCount++;
            }
        }
    }
}