module objects{
    export class Player extends objects.GameObject{
        //variables
        //constructor

        
        leftPressed:boolean;
        upKeyPressed:boolean;
        downKeyPressed:boolean;
        rightPressed: boolean;

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

            document.addEventListener("keydown",keyDownHandler, false);
            document.addEventListener("keyup", keyUpHandler, false);             
               
                 
         function keyDownHandler(e:any):void {
                if(e.key == "Right" || e.key == "ArrowRight"|| e.key == "d") {
                    this.rightPressed = true; 
                    console.log("Right!");
                    this.x += 5;                                                     
                                                         
                }
                else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
                    this.leftPressed = true;                   
                    console.log("Left!");
                    this.x -= 5; 
                }
                else if(e.key == "Up" || e.key== "ArrowUp"|| e.key == "w"){
                    this.upKeyPressed = true;
                    console.log("Up!"); 
                    this.y -= 5;
                }
                 else if(e.key == "Down" || e.key== "ArrowDown" || e.key == "s"){
                    this.downKeyPressed = true;
                    console.log("Down!");  
                    this.y += 5;
                }
            }

            if(this.leftPressed){
                this.x -=5;
            }
            else if(this.rightPressed){
                 this.x +=5;
                 console.log("Right!");
         }
                       
            
      function keyUpHandler(e : any):void{
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