//Immediate Invoked Anonymous Function

(function() {

    //Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest:any[];

    //store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    let keyboardManager:managers.Keyboard;

    assetManifest = [
        {id:"startButton", src:"./Assets/StartButton.png"},
        {id:"nextButton", src:"./Assets/NextButton.png"},
        {id:"previousButton", src:"./Assets/PreviousButton.png"},
        {id:"background", src:"./Assets/Background.png"},
        {id:"player", src:"./Assets/Survivor.png"},
        {id:"enemy", src:"./Assets/Zombie_1.png"},
        {id:"bullet", src:"./Assets/Bullet.png"}
        
    ];
    
    function Init(){
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start(){
        console.log("Starting Application...");

        //Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        //set up default game states -- State Machine
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager =  keyboardManager;
        Main();
    }

    function Update(){
        //has my state changed since my last check?
        if(currentState != managers.Game.currentScene){
            console.log("Changing scene to " + managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }

    function Main(){
        console.log("Game Start");

        //finite state machine
        switch(managers.Game.currentScene){
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
            break;

            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
            break;

            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
            break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }


    window.onload =Init;

})();