// Immediate Invoked Anonymous Function

(function() {

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene information
    let currentScene:objects.Scene;
    let currentState:number;

    let keyboardManager: managers.Keyboard;

    let textureAtlas : createjs.SpriteSheet;
    let textureAtlasData: any;
    
    
    

    textureAtlasData = {
        "images": [
            "Atlas.png"
        ],
        
        "framerate": 20,
        "frames": [
            [0, 0, 512, 512, 0, 256, 256],
    [512, 0, 512, 512, 0, 256, 256],
    [1024, 0, 512, 512, 0, 256, 256],
    [1536, 0, 512, 512, 0, 256, 256],
    [0, 512, 512, 512, 0, 256, 256],
    [512, 512, 512, 512, 0, 256, 256],
    [1024, 512, 230, 130, 0, 115, 65],
    [1254, 512, 155, 125, 0, 77.5, 62.5],
    [1409, 512, 108, 164, 0, 54, 82],
    [1517, 512, 108, 164, 0, 54, 82],
    [1625, 512, 108, 164, 0, 54, 82],
    [1733, 512, 50, 50, 0, 25, 25],
    [1783, 512, 112, 112, 0, 56, 56]
        ],
        
        "animations": {
            "survivor" : { "frames": [9]},
            "Blood": { "frames": [0, 1, 2, 3, 4, 5] },
            "Bullet": { "frames": [6] },
            "NextButton": { "frames": [7] },
            "survivor-shoot_shotgun": { "frames": [8, 9, 10] },
            "medicine": { "frames": [11] },
            "Zombie": { "frames": [12] }
       
        },
    };

    assetManifest = [
        
        {id:"textureAtlas", src:"./Assets/Sprites/Atlas.png"},
        {id:"background", src:"./Assets/background.png"},
        {id:"Death", src:"./Assets/Audio/Death.wav"},
        {id:"grab", src:"./Assets/Audio/grab.wav"},
         {id:"die", src:"./Assets/Audio/die.wav"},
        {id:"Shoot", src:"./Assets/Audio/Shoot.wav"},
        {id:"break", src:"./Assets/Audio/break.wav"},
        {id:"drop", src:"./Assets/Audio/drop.wav"},
        {id:"start_music", src:"./Assets/Audio/Title Screen.wav"},
        {id:"play_music", src:"./Assets/Audio/Level 1.wav"}


    ];

    function Init() {
        console.log("Initializing Start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application...");

        textureAtlasData.images = [ assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
    

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        // Set up default game states -- State Machine
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;

        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;

        Main();
    }

    function Update() {
        // Has my state changed since the last check?
        if(currentState != managers.Game.currentScene)
        {
            console.log("Changing scenes to " + managers.Game.currentScene);
            Main();
        }

        currentScene.Update();
        stage.update();
    }


    function Main() {
        console.log("Game Start");

        // Finite State Machine
        switch(managers.Game.currentScene)
        {
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

    window.onload = Init;
})();