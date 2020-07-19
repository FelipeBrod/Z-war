module objects{
    export class Background extends createjs.Bitmap{
        //variables
        private speedY:number = 0.5;
        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager.getResult("background"));

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
            //reset the background's y position
            console.log("RESET!");
        }
        public Move():void{
            this.y += this.speedY;
        }

        //collision detection
        public CheckBound():void{
            if(this.y >= 0){
                this.Reset();
            }
        }
    }
}