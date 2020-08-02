module managers{
    export class Game{
        //global variables
        public static stage:createjs.Stage;
        public static assetManager:createjs.LoadQueue;
        public static currentScene:number;
        public static keyboardManager: managers.Keyboard;
    }
}