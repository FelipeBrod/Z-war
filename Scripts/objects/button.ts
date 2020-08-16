module objects {
    export class Button extends createjs.Bitmap {
        //variables
        //constructor
        constructor(imageString:string, x:number = 0, y:number = 0) {
            super(imageString);

            //default position
            this.x = x;
            this.y = y;

            //set up event handler
            this.on("mouseover", this.mouseOver);
            this.on("mouseout", this.mouseOut);
        }
        //methods
        //event handlers
        private mouseOver():void {
            this.alpha = 0.7;
        }

        private mouseOut():void {
            this.alpha = 1.0;
        }
    }
}