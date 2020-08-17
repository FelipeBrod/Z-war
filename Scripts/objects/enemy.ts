module objects {
    export class Enemy extends objects.GameObject {
        // Variables
        // Constructor

        public isDead:boolean;

        constructor() {
            super("Zombie");
            
        }
        // Methods
        public Start():void {
            this.Reset();
            this.isDead = false;
        }
        public Update():void {
            this.Move();
            this.CheckBound();
            if (this.isDead){
                this.x = 2000;
            }
          

        }
        public Reset():void {
            this.x = Math.floor(Math.random() * 1100) + 50;
            this.y = Math.floor(Math.random() * -700) - 50;
        }
        public Move():void {
            this.y += 5;
        }
        public CheckBound():void {
            if(this.y >= 900 + this.halfH + 25) {
                this.Reset();
            }
        }
    }
}