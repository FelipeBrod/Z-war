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
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.isDying = false;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            //Inititalize our variables
            this.background = new objects.Background();
            this.player = new objects.Player();
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 5;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            //this.background.Update();
            this.player.Update();
            //this.enemy.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                _this.player.isDead = managers.Collision.Check(_this.player, e);
                _this.player.Bullets.forEach(function (bullet) {
                    e.isDead = managers.Collision.Check(bullet, e);
                });
                if (_this.player.isDead && !_this.isDying) {
                    _this.isDying = true;
                    _this.removeChild(_this.player);
                }
                if (e.isDead) {
                    _this.isDying = true;
                    _this.removeChild(e);
                }
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            //this.addChild(this.enemy);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreBoard);
            //register for the click events
        };
        PlayScene.prototype.handleDying = function () {
            this.isDying = false;
            managers.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map