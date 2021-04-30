import {Pokemon} from "./pokemon";

export class Fight {
    static fight(attacker: Pokemon, defender: Pokemon) {
        const attack = attacker.attack(defender);
        console.log(`${attacker.name} a infligé ${attack.damage} points de dégâts avec son attaque ${attack.title} à ${defender.name}, il lui reste ${defender.health} points de vie`);
    }
}
