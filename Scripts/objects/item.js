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
    var item = /** @class */ (function (_super) {
        __extends(item, _super);
        function item(x, y) {
            var _this = _super.call(this, "medicine") || this;
            _this.dropSFX = createjs.Sound.play("drop");
            _this.dropSFX.volume = 0.8;
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return item;
    }(objects.GameObject));
    objects.item = item;
})(objects || (objects = {}));
//# sourceMappingURL=item.js.map