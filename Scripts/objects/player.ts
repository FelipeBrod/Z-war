module objects{
    export class Player extends objects.GameObject{
        //variables
        //constructor

        public rightPressed = false;
        public leftPressed = false;
        public upKeyPressed = false;
        public downKeyPressed = false;

        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "player");

            

            document.addEventListener("keydown", this.keyDownHandler, false);
            document.addEventListener("keyup", this.keyUpHandler, false);

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

        
                   
       keyDownHandler(e : any):void {
                if(e.key == "Right" || e.key == "ArrowRight"|| e.key == "d") {
                    this.rightPressed = true;  
                    this.x += 5;                        
                    console.log("Right!")                  
                                                                         
                }
                else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
                    this.leftPressed = true;
                    this.x -= 5;
                    console.log("Left!")  
                }
                else if(e.key == "Up" || e.key=="ArrowUp"|| e.key == "w"){
                    this.upKeyPressed = true;
                    console.log("Up!")  
                    this.y -= 5;
                }
                 else if(e.key == "Down" || e.key=="ArrowDown" || e.key == "s"){
                    this.downKeyPressed = true;
                    console.log("Down!")  
                    this.y += 5;
                }
            }
                
        
            
      keyUpHandler(e: any):void{
            if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
                this.rightPressed = false;
                
            }
            else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
                this.leftPressed = false;
            }
            else if(e.key == "Up" || e.key=="ArrowUp" || e.key == "w"){
                this.upKeyPressed = false;
            }
             else if(e.key == "Down" || e.key=="ArrowDown" || e.key == "s"){
                this.downKeyPressed = false;
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