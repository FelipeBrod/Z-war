module objects {
    export class Death extends objects.GameObject {
        // Variables
        private deathSFX: createjs.AbstractSoundInstance;
        // Constructor
        constructor(x: number, y: number) {
            super("Blood");

            // Play the sound
            this.deathSFX = createjs.Sound.play("Death");
            this.deathSFX.volume = 0.7;

            this.x = x;
            this.y = y;
            
        }
        // Functions
        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}