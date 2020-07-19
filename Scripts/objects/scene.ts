module objects {
    export class Scene extends createjs.Container {
        //variables
        public assetManager:createjs.LoadQueue;
        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super();
            this.assetManager = assetManager;
        }
        //methods
        public Start():void{}
        public Update():void{}
        public Main():void{}
    }
}