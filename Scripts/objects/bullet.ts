module objects{
    export class Bullet extends objects.GameObject{
            

        constructor(assetManager:createjs.LoadQueue, x:number = 0, y:number = 0){
            super(assetManager, "bullet");

            this.x = x;
            this.y = y;

            this.Start();
        }

        public Start():void{

        }
        public Update():void{
            this.Move();
        }

        public Reset():void{
        }
        
        public Move():void{
            this.y -= 25;
        }

        public CheckBound():void{
        }
    }
}