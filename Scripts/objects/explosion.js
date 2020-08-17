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
    var Death = /** @class */ (function (_super) {
        __extends(Death, _super);
        // Constructor
        function Death(x, y) {
            var _this = _super.call(this, "Death") || this;
            // Play the sound
            _this.explosionSFX = createjs.Sound.play("Death");
            _this.explosionSFX.volume = 0.5;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        // Functions
        Death.prototype.Start = function () { };
        Death.prototype.Update = function () { };
        Death.prototype.Reset = function () { };
        Death.prototype.Move = function () { };
        Death.prototype.CheckBound = function () { };
        return Death;
    }(objects.GameObject));
    objects.Death = Death;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map