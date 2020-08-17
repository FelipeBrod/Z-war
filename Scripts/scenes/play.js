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
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.isDying = false;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            console.log("Play scene start");
            // Inintialize our variables
            this.background = new objects.Background();
            this.player = new objects.Player();
            // this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemyNum = 10;
            for (var i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy();
            }
            this.bullets = this.player.Lasers;
            this.scoreBoard = new managers.Scoreboard();
            this.scoreBoard.x = 10;
            this.scoreBoard.y = 10;
            this.scoreBoard.Score = 0;
            // Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Loop infinitely
            this.backgroundMusic.volume = 0.2;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            // this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                _this.player.isDead = managers.Collision.Check(e, _this.player);
                _this.bullets.forEach(function (b) {
                    b.Update();
                    e.isDead = managers.Collision.Check(b, e);
                    if (e.isDead) {
                        if (Math.random() < 0.80 && !_this.oneItem) {
                            _this.drop = new objects.item(e.x, e.y);
                            _this.addChild(_this.drop);
                            _this.oneItem = true;
                        }
                        _this.zDeath = new objects.Death((e.x + 100), (e.y + 100));
                        e.x = 2000;
                        e.y = -100;
                        _this.removeChild(b);
                        _this.addChild(_this.zDeath);
                        _this.zDeath.on("animationend", e.Reset);
                        e.isDead = false;
                        _this.scoreBoard.Score += 100;
                    }
                });
                if (_this.oneItem && managers.Collision.Check(e, _this.drop)) {
                    _this.breakItem();
                }
                if (_this.oneItem && managers.Collision.Check(_this.player, _this.drop)) {
                    _this.manageItems();
                }
                if (_this.player.isDead && !_this.isDying) {
                    // If the player is dead and hasn't exploded...explode!
                    // Disable music
                    _this.backgroundMusic.stop();
                    // Create the Death
                    _this.itemSFX = createjs.Sound.play("die");
                    _this.Death = new objects.Death((_this.player.x + 256), (_this.player.y + 256));
                    _this.Death.on("animationend", _this.handleDeath);
                    _this.addChild(_this.Death);
                    _this.isDying = true;
                    _this.removeChild(_this.player);
                }
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreBoard);
        };
        PlayScene.prototype.handleDeath = function () {
            this.stage.removeChild(this.Death);
            this.isDying = false;
            managers.Game.currentScene = config.Scene.OVER;
        };
        PlayScene.prototype.manageItems = function () {
            this.itemSFX = createjs.Sound.play("grab");
            this.scoreBoard.Score += 10000;
            this.removeChild(this.drop);
            this.oneItem = false;
        };
        PlayScene.prototype.breakItem = function () {
            this.itemSFX = createjs.Sound.play("break");
            this.removeChild(this.drop);
            this.oneItem = false;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map