"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;
var Fight = /** @class */ (function () {
    function Fight() {
    }
    Fight.fight = function (attacker, defender) {
        var attack = attacker.attack(defender);
        console.log(attacker.name + " a inflig\u00E9 " + attack.damage + " points de d\u00E9g\u00E2ts avec son attaque " + attack.title + " \u00E0 " + defender.name + ", il lui reste " + defender.health + " points de vie");
    };
    return Fight;
}());
exports.Fight = Fight;
