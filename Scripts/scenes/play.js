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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        //constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            //Inititalize our variables
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.bullet = new objects.Bullet(this.assetManager);
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            this.bullet;
            this.Main();
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            if (managers.Game.keyboardManager.shoot && this.oneShot) {
                this.oneShot = false;
                console.log("in if, shoot");
                this.addChild(this.bullet);
            }
            this.oneShot = true;
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreBoard);
            //register for the click events
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            //this.background.Update();
            this.player.Update();
            //this.enemy.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                managers.Collision.Check(_this.player, e);
            });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map