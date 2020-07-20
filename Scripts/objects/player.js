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
            document.addEventListener("keydown", keyDownHandler, false);
            document.addEventListener("keyup", keyUpHandler, false);
            function keyDownHandler(e) {
                if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
                    this.rightPressed = true;
                    console.log("Right!");
                    this.x += 5;
                }
                else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
                    this.leftPressed = true;
                    console.log("Left!");
                    this.x -= 5;
                }
                else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
                    this.upKeyPressed = true;
                    console.log("Up!");
                    this.y -= 5;
                }
                else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
                    this.downKeyPressed = true;
                    console.log("Down!");
                    this.y += 5;
                }
            }
            if (this.leftPressed) {
                this.x -= 5;
            }
            else if (this.rightPressed) {
                this.x += 5;
                console.log("Right!");
            }
            function keyUpHandler(e) {
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