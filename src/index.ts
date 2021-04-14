import {Pokemon} from "./pokemon";
import {Attack} from "./attack";

const pokemon1 = new Pokemon({
    name: "Pikachu",
    speed: 90,
    health: 100,
    attacks: [
        new Attack({
            title: "Queue de fer",
            damage: 12
        }),
        new Attack({
            title: "Rafale",
            damage: 6
        }),
        new Attack({
            title: "Morsure",
            damage: 8
        }),
        new Attack({
            title: "Flèche",
            damage: 10
        })
    ]
});
const pokemon2 = new Pokemon({
    name: "Salamèche",
    speed: 65,
    health: 95,
    attacks: [
        new Attack({
            title: "Queue enflammée",
            damage: 10
        }),
        new Attack({
            title: "Morsure",
            damage: 8
        }),
        new Attack({
            title: "Boule de feu",
            damage: 12
        }),
        new Attack({
            title: "Coup de poing",
            damage: 6
        })
    ]
});

console.log(pokemon1.name);
console.log(pokemon2.name);

let turn = Pokemon.whoStart(pokemon1, pokemon2);
let attack;
do {
    let attacker = turn === 1 ? pokemon1 : pokemon2;
    let defender = turn === 1 ? pokemon2 : pokemon1;
    attack = attacker.attack(defender);
    console.log(`${attacker.name} a infligé ${attack.damage} points de dégâts avec son attaque ${attack.title} à {defender.name}, il lui reste ${defender.health} points de vie`);
    turn = turn === 1 ? 2 : 1;
} while (pokemon1.health > 0 && pokemon2.health > 0);
