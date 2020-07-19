module objects {
    export class Enemy extends objects.GameObject {
        //variables
        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"enemy");
            this.Start();
        }
        //methods

        public Start():void{
            this.Reset();
        }
        public Update():void{
            this.Move();
            this.CheckBound();
        }
        public Reset():void{
            this.x = Math.floor(Math.random() * 540) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        }
        public Move():void{
            this.y += 2;
        }
        public CheckBound():void{
            if(this.y >= 900 + this.halfH + 25){
                this.Reset();
            }
        }
    }
}