module objects{
    export class Bullet extends objects.GameObject{
            

        constructor(){
            super("bullet");

            this.Start();
        }

        public Start():void{
            this.speedX = 0;
            this.speedY = -10;
            this.Reset();
        }

        public Update():void {
            this.Move();
        }

<<<<<<< HEAD
            public Reset():void{

        }
        
        public Move():void{
            this.y -= 25;
=======
        public Reset():void {
            this.x = -5000;
            this.y = -5000;
>>>>>>> master
        }

        public Move():void {
            this.y += this.speedY;
        }

        public Main():void {}
        public CheckBounds():void {}
    }
}