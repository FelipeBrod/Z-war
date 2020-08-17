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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        function Enemy() {
            return _super.call(this, "Zombie") || this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.Reset();
            this.isDead = false;
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            if (this.isDead) {
                this.x = 2000;
            }
        };
        Enemy.prototype.Reset = function () {
            this.x = Math.floor(Math.random() * 1100) + 50;
            this.y = Math.floor(Math.random() * -700) - 50;
        };
        Enemy.prototype.Move = function () {
            this.y += 5;
        };
        Enemy.prototype.CheckBound = function () {
            if (this.y >= 900 + this.halfH + 25) {
                this.Reset();
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map