module objects{
    export class item extends objects.GameObject{
        private dropSFX: createjs.AbstractSoundInstance;

        constructor(x: number, y: number) {
            super("medicine");

            
            this.dropSFX = createjs.Sound.play("drop");
            this.dropSFX.volume = 0.8;

            this.x = x;
            this.y = y;
        }
    }
}