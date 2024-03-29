"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon");
var attack_1 = require("./attack");
var fight_1 = require("./fight");
var pokemon1 = new pokemon_1.Pokemon({
    name: "Pikachu",
    speed: 90,
    health: 100,
    attacks: [
        new attack_1.Attack({
            title: "Queue de fer",
            damage: 12
        }),
        new attack_1.Attack({
            title: "Rafale",
            damage: 6
        }),
        new attack_1.Attack({
            title: "Morsure",
            damage: 8
        }),
        new attack_1.Attack({
            title: "Flèche",
            damage: 10
        })
    ]
});
var pokemon2 = new pokemon_1.Pokemon({
    name: "Salamèche",
    speed: 65,
    health: 95,
    attacks: [
        new attack_1.Attack({
            title: "Queue enflammée",
            damage: 10
        }),
        new attack_1.Attack({
            title: "Morsure",
            damage: 8
        }),
        new attack_1.Attack({
            title: "Boule de feu",
            damage: 12
        }),
        new attack_1.Attack({
            title: "Coup de poing",
            damage: 6
        })
    ]
});
console.log(pokemon1.name);
console.log(pokemon2.name);
var turn = pokemon_1.Pokemon.whoStart(pokemon1, pokemon2);
var attack;
do {
    var attacker = turn === 1 ? pokemon1 : pokemon2;
    var defender = turn === 1 ? pokemon2 : pokemon1;
    fight_1.Fight.fight(attacker, defender);
    turn = turn === 1 ? 2 : 1;
} while (pokemon1.health > 0 && pokemon2.health > 0);
