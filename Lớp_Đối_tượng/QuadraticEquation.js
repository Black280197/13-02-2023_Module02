class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    geta() {
        return this.a;
    }
    getb() {
        return this.b;
    }
    getb() {
        return this.b;
    }
    getDiscriminant() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    getRoot1() {
        return ((-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a));
    }
    getRoot2() {
        return ((-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a));
    }
}

const Qua = new QuadraticEquation(1, 3.0, 1);

if (Qua.getDiscriminant() > 0) {
    console.log(`The equation has two roots ${Qua.getRoot1()} and ${Qua.getRoot2()}`);
    // console.log(Qua.getRoot2());
} else if (Qua.getDiscriminant() == 0) {
    console.log(`The equation has one root ${Qua.getRoot1()}`);
} else {
    console.log('The equation has no roots');
};