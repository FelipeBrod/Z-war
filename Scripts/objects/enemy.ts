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
        
            this.y = Math.floor(Math.random() * -350);
            this.x = Math.floor(Math.random() * 1100) + 50;
           
        }
        public Move():void{
            this.y += 2;
        }
        public CheckBound():void{
            if(this.y >= 800 + this.halfH + 25){
                this.Reset();
            }
        }
    }
}