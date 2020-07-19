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

    assetManifest = [
        {id:"startButton", src:"./Assets/StartButton.png"},
        {id:"nextButton", src:"./Assets/NextButton.png"},
        {id:"previousButton", src:"./Assets/PreviousButton.png"},
        {id:"background", src:"./Assets/Background.png"},
        {id:"player", src:"./Assets/Spaceship.png"},
        {id:"enemy", src:"./Assets/Enemy.png"}
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
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }

    function Update(){
        //has my state changed since my last check?
        if(currentState != objects.Game.currentScene){
            console.log("Changing scene to " + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }

    function Main(){
        console.log("Game Start");

        //finite state machine
        switch(objects.Game.currentScene){
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
            break;

            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
            break;

            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
            break;
        }
        currentState = objects.Game.currentScene;
    }


    window.onload =Init;

})();