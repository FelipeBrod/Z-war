module objects {
    export class Laser extends objects.GameObject {
        // Variables
        private shootSFX: createjs.AbstractSoundInstance;
        // Constructor
        constructor()
        {

            super("Bullet");
            this.shootSFX = createjs.Sound.play("Shoot");
            this.shootSFX.volume = 0.7;
           this.Start();

        }
        // Methods
        public Start():void {
            this.speedX = 0;
            this.speedY = -2;
            

            this.Reset();
        }

        public Update():void {
            this.Move();
   
        }

        public Reset():void {
            this.x = 0;
            this.y = 0;
        }

        public Move():void {
            this.y += this.speedY;
        }

        public Main():void {}
        public CheckBounds():void {
            if(this.y <= 0){
                this.x=2000;
                this.y=0;
            }
          }
    }
}
