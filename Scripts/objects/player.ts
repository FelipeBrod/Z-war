module objects{
    export class Player extends objects.GameObject{
        //variables
        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "player");

            this.Start();
        }

        public Start():void{
            this.x = 320;
            this.y = 700;
        }

        public Update():void{
            this.Move();
            this.CheckBound();
        }

        public Reset():void{

        }

        public Move():void{
            function keyboardInput(event: KeyboardEvent) {
                // PRESS LEFT ARROW OR 'A' KEY
                if (event.keyCode == 37 || event.keyCode == 65) {
                   this.x -= 5;
                   console.log('move left');
                }
                // PRESS UP ARROW OR 'W' KEY
                else if (event.keyCode == 38 || event.keyCode == 87) {
                   this.y -= 5;
                   console.log('move up');
                }
                // PRESS RIGHT ARROW OR 'D' KEY
                else if (event.keyCode == 39 || event.keyCode == 68 ) {
                   this.x += 5;
                   console.log('move down');
                }
                // PRESS DOWN ARROW OR 'S' KEY
                else if (event.keyCode == 40 || event.keyCode == 83 ) {
                   this.y += 5;
                   console.log('move right');
                }
             }

            // window.onkeydown = movement;
            // function movement(e){
            //     switch (e.keyCode){
            //     case 37:
            //         this.x -= 2;
            //         console.log('move left');
            //         break;
            //     case 38:
            //         this.y += 2;
            //         console.log('move up');
            //         break;
            //     case 39:
            //         this.x += 2;
            //         console.log('move right');
            //         break;
            //     case 40:
            //         this.y -= 2;
            //         console.log('move down');
            //         break;
            //     }
            // }
        }

        public CheckBound():void{
            //right boundary
            if(this.x >= 640-this.halfW)
            {
                this.x = 640-this.halfW;
            }
            //left boundary
            if(this.x <= this.halfW)
            {
                this.x = this.halfW;
            }
        }
    }
}