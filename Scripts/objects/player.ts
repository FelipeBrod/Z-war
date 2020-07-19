module objects{
    export class Player extends objects.GameObject{
        //variables
        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "player");

            this.Start();
        }

        public Start():void{
            this.x = 640;
            this.y = 600;
        }

        public Update():void{
            this.Move();
            this.CheckBound();
        }

        public Reset():void{

        }

        public Move():void{
            //need a reference to the stage createjs object to get mouse position
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;

            //this will eventually be replaced with the keyboard input
        }

    



        public CheckBound():void{
            //right boundary
            if(this.x >= 1280 -this.halfW)
            {
                this.x = 1280 -this.halfW;
            }
            //left boundary
            if(this.x <= this.halfW)
            {
                this.x = this.halfW;
            }
            if(this.y >= 720 -this.halfH)
            {
                this.y = 720 -this.halfH;
            }
            //left boundary
            if(this.y <= this.halfH)
            {
                this.y = this.halfH;
            }
        }
    }
}