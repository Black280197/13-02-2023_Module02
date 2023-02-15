class Fan {
    SLOW: number = 1;
    MEDIUM: number = 2;
    FAST: number = 3;
    private _speed: number;
    private _on: boolean;
    private _radius: number;
    private _color: string;
    constructor(speed: number = 1,
                on: boolean = false,
                radius: number = 5,
                color: string = "blue") {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;

    }
    get speed(): number {
        return this._speed;
    }
    set speed(spe: number) {
        this._speed = spe;
    }
     get on(): boolean {
        return this._on;
    }
    set on(o: boolean) {
        this._on = o;
    }
     get radius(): number {
        return this._radius;
    }

    set radius(rad: number) {
        this._radius = rad;
    }
    public get color(): string {
        return this._color;
    }
    public set color(col: string) {
        this._color = col;
    }

    public toString(): string {
        if (this._on == true) {
            return `Speed: ${this._speed}, ` +
            `Color: ${this._color}, ` +
            `Radius: ${this._radius} fan is on`;
        } else {
            return 'fan is off';
        }
    }
}

    function toS(): string {
    if (fan._on == true) {
        return `Speed: ${fan._speed}, ` +
            `Color: ${fan._color}, ` +
            `Radius: ${fan._radius} fan is on`;
    } else {
        return 'fan is off';
    }
    }


const fan = new Fan(2,true, 7, "red");
console.log(toS());



