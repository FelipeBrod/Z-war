module objects {
    export class Player extends objects.GameObject {
        // Variables
        private laserSpawn:math.Vec2;
        public Lasers:objects.Laser[];
        public laserCount:number = 0;

        public isDead:boolean;
        // Constructor
        constructor() {
            super("survivor");
            this.Start();
        }

        public Start():void {
            this.x = 640;
            this.y = 700;
            this.isDead = false;
            this.Lasers = new Array<objects.Laser>();
            this.Update();
        }
        public Update():void {
            this.Move();
            this.CheckBound();
            this.LaserFire();

            this.Lasers.forEach(laser => {
                laser.Update();
            });
        }
        public Reset():void {}
        public Move():void {
            // I need a reference to the "STAGE" createjs object to get mouse position
            // this.x = objects.Game.stage.mouseX;
            // This will eventually be replaced with keyboard input
            if(managers.Game.keyboardManager.moveLeft)
            {
                this.x -= 5.5;
            }
            if(managers.Game.keyboardManager.moveRight)
            {
                this.x += 5.5;
            }
            if(managers.Game.keyboardManager.moveUp)
            {
                this.y -= 5.5;
            }
            if(managers.Game.keyboardManager.moveDown)
            {
                this.y += 5.5;
            }
            if(managers.Game.keyboardManager.shoot)
            {
                
            }
            // Maybe xbox controller....maybe...
        }
        public CheckBound():void {
            // Right boundary
            if(this.x >= 1270 - this.halfW)
            {
                // I have collided with the right boundary
                this.x = 1270 - this.halfW;
            }
            // Left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }


            if(this.y >= 720 - this.halfW)
            {
                // I have collided with the right boundary
                this.y = 720 - this.halfW;
            }
            // Left boundary
            if(this.y <= this.halfW) {
                this.y = this.halfW;
            }
        }

        public LaserFire():void {

            let ticker:number = createjs.Ticker.getTicks();

            if(!this.isDead && managers.Game.keyboardManager.shoot && (ticker % 10 == 0))
            {
                
                this.laserSpawn = new math.Vec2(this.x, this.y - this.halfH);
                let laser = new objects.Laser();
                laser.x = this.laserSpawn.x+90;
                laser.y = this.laserSpawn.y;
                this.Lasers[this.laserCount] = laser;
                managers.Game.currentSceneObject.addChild(laser);
                this.laserCount++;
            }
        }
    }
}