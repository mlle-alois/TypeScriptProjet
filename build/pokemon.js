"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(properties) {
        this.name = properties.name;
        this.speed = properties.speed;
        this.attacks = properties.attacks;
        this.health = properties.health;
    }
    Pokemon.whoStart = function (p1, p2) {
        if (p1.speed !== p2.speed) {
            return p1.speed > p2.speed ? 1 : 2;
        }
        return 1;
    };
    Pokemon.prototype.randomAttack = function () {
        return this.attacks[Math.round(Math.random() * (this.attacks.length - 1))];
    };
    Pokemon.prototype.attack = function (adversary) {
        var attack = this.randomAttack();
        adversary.health -= attack.damage;
        if (adversary.health < 0) {
            adversary.health = 0;
        }
        return attack;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
