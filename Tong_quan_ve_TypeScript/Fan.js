var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        if (speed === void 0) { speed = 1; }
        if (on === void 0) { on = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = "blue"; }
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (spe) {
            this._speed = spe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (o) {
            this._on = o;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (rad) {
            this._radius = rad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (col) {
            this._color = col;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        if (this._on == true) {
            return "Speed: ".concat(this._speed, ", ") +
                "Color: ".concat(this._color, ", ") +
                "Radius: ".concat(this._radius, " fan is on");
        }
        else {
            return 'fan is off';
        }
    };
    return Fan;
}());
function toS() {
    if (fan._on == true) {
        return "Speed: ".concat(fan._speed, ", ") +
            "Color: ".concat(fan._color, ", ") +
            "Radius: ".concat(fan._radius, " fan is on");
    }
    else {
        return 'fan is off';
    }
}
var fan = new Fan(2, true, 7, "red");
console.log(toS());
