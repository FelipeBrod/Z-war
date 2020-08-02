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
        //variables
        //constructor
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
            if (managers.Game.keyboardManager.moveLeft) {
                this.x -= 7.5;
            }
            if (managers.Game.keyboardManager.moveRight) {
                this.x += 7.5;
            }
            if (managers.Game.keyboardManager.moveUp) {
                this.y -= 7.5;
            }
            if (managers.Game.keyboardManager.moveDown) {
                this.y += 7.5;
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