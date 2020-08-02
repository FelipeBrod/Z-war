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

        public Reset():void
        {  
        }        
        
        public Move():void{
            if(managers.Game.keyboardManager.moveLeft)
            {
                this.x -= 7.5;
            }
            if(managers.Game.keyboardManager.moveRight)
            {
                this.x += 7.5;
            }
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