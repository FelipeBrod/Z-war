module objects{
    export abstract class GameObject extends createjs.Bitmap{
        //variables
        protected speedX: number;
        protected speedY: number;

        //useful for collision detection
        public width: number;
        public height: number;
        public halfW: number;
        public halfH: number;

        //constructor
        constructor(assetManager:createjs.LoadQueue, imageString:string){
            super(assetManager.getResult(imageString));

            this.name = imageString;

            this.Init();
        }

        private Init():void{
            //initialize all properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;

            //registration points
            this.regX = this.halfW;
            this.regY = this.halfH;
        }

        public Start():void{

        }

        public Update():void{

        }

        public Reset():void{

        }

        public Move():void{

        }

        public CheckBound():void{

        }
    }
}