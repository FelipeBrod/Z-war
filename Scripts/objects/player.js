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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            document.addEventListener("keydown", _this.onKeyDown.bind(_this), false);
            document.addEventListener("keyup", _this.keyUpHandler.bind(_this), false);
            _this.Start();
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 640;
            this.y = 600;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Move = function () {
            if (this.leftPressed) {
                this.x -= 5;
            }
            else if (this.rightPressed) {
                this.x += 5;
            }
            else if (this.downKeyPressed) {
                this.y += 5;
            }
            else if (this.upKeyPressed) {
                this.y -= 5;
            }
        };
        Player.prototype.onKeyDown = function (e) {
            if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
                this.rightPressed = true;
            }
            else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
                this.leftPressed = true;
            }
            else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
                this.upKeyPressed = true;
            }
            else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
                this.downKeyPressed = true;
                console.log("Down!");
            }
        };
        Player.prototype.keyUpHandler = function (e) {
            if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
                this.rightPressed = false;
            }
            else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
                this.leftPressed = false;
            }
            else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
                this.upKeyPressed = false;
            }
            else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
                this.downKeyPressed = false;
            }
        };
        Player.prototype.CheckBound = function () {
            //right boundary
            if (this.x >= 1280 - this.halfW) {
                this.x = 1280 - this.halfW;
            }
            //left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            if (this.y >= 720 - this.halfH) {
                this.y = 720 - this.halfH;
            }
            //left boundary
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map