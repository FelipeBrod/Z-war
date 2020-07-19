var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        //constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //methods
        StartScene.prototype.Start = function () {
            //Initialize our objects for the scene
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.Label("Z-War", "60px", "Consolas", "#ffffff", 640, 240, true);
            this.welcomeSubLabel = new objects.Label("Low Survival Chance", "30px", "Consolas", "#ffffff", 640, 300, true);
            this.startButton = new objects.Button(this.assetManager, "nextButton", 1100, 500);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            //this.background.Update();
        };
        StartScene.prototype.Main = function () {
            //Add items to the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.welcomeSubLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        StartScene.prototype.startButtonClick = function () {
            //Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map