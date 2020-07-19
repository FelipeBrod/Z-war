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
            //need a reference to the stage createjs object to get mouse position
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
            function keyboardInput(event) {
                // PRESS LEFT ARROW OR 'A' KEY
                if (event.keyCode == 37 || event.keyCode == 65) {
                    this.x -= 5;
                    console.log('move left');
                }
                // PRESS UP ARROW OR 'W' KEY
                else if (event.keyCode == 38 || event.keyCode == 87) {
                    this.y -= 5;
                    console.log('move up');
                }
                // PRESS RIGHT ARROW OR 'D' KEY
                else if (event.keyCode == 39 || event.keyCode == 68) {
                    this.x += 5;
                    console.log('move down');
                }
                // PRESS DOWN ARROW OR 'S' KEY
                else if (event.keyCode == 40 || event.keyCode == 83) {
                    this.y += 5;
                    console.log('move right');
                }
            }
            // window.onkeydown = movement;
            // function movement(e){
            //     switch (e.keyCode){
            //     case 37:
            //         this.x -= 2;
            //         console.log('move left');
            //         break;
            //     case 38:
            //         this.y += 2;
            //         console.log('move up');
            //         break;
            //     case 39:
            //         this.x += 2;
            //         console.log('move right');
            //         break;
            //     case 40:
            //         this.y -= 2;
            //         console.log('move down');
            //         break;
            //     }
            // }
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